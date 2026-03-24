import { CrystalProduct } from '../types';
import { CRYSTAL_PRODUCTS } from '../constants';
import { supabase } from './supabase';

/**
 * Merges static predefined products with those dynamically fetched from Supabase.
 * In a real-world scenario, you might entirely rely on Supabase, but here we 
 * ensure backwards compatibility with the existing hardcoded list.
 */
export const getProducts = async (): Promise<CrystalProduct[]> => {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('id', { ascending: true });

    if (error) {
      console.error('Error fetching products from Supabase:', error);
      return getMergedLocalProducts();
    }

    if (data && data.length > 0) {
      // Convert Supabase rows to CrystalProduct type
      return data.map(row => ({
        id: row.id.toString(),
        name: row.name,
        description: row.description,
        benefit: row.benefit,
        image: row.image_url.startsWith('http') ? row.image_url : (import.meta.env.BASE_URL + row.image_url),
        price: row.price,
        tags: row.tags || [],
        externalLink: row.external_link || undefined
      }));
    }

    // Only return empty if Supabase says so, do not fallback to default products
    return [];
  } catch (err) {
    console.warn('Network error or Supabase not configured. Using local fallback.');
    return getMergedLocalProducts();
  }
};

/**
 * Fallback to merging constant products and any local storage products,
 * in case Supabase is unavailable.
 */
const getMergedLocalProducts = (): CrystalProduct[] => {
  try {
    const local = localStorage.getItem('custom_products');
    if (local) {
      const parsed = JSON.parse(local) as CrystalProduct[];
      return [...parsed];
    }
  } catch (e) {
    console.error('Failed to parse local products', e);
  }
  return [];
};

/**
 * Uploads an image file to Supabase Storage and returns the public URL.
 */
export const uploadProductImage = async (file: File): Promise<string | null> => {
  try {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`;
    const filePath = `product_images/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('product_images') // The bucket name we'll create
      .upload(filePath, file);

    if (uploadError) {
      throw uploadError;
    }

    const { data } = supabase.storage
      .from('product_images')
      .getPublicUrl(filePath);

    return data.publicUrl;
  } catch (error) {
    console.error('Error uploading image:', error);
    return null;
  }
};

/**
 * Adds a new product to Supabase.
 */
export const addProduct = async (product: Omit<CrystalProduct, 'id'>) => {
  try {
    const { data, error } = await supabase
      .from('products')
      .insert([
        {
          name: product.name,
          description: product.description,
          benefit: product.benefit,
          price: product.price,
          image_url: product.image,
          tags: product.tags,
          external_link: product.externalLink || null
        }
      ])
      .select()
      .single();

    if (error) throw error;
    
    return data;
  } catch (error) {
    console.error('Failed pushing to Supabase. Saving to local storage as fallback.', error);
    
    // Fallback: save to LocalStorage
    const newProduct: CrystalProduct = { ...product, id: `local_${Date.now()}` };
    const existing = localStorage.getItem('custom_products');
    const products = existing ? JSON.parse(existing) : [];
    products.push(newProduct);
    localStorage.setItem('custom_products', JSON.stringify(products));
    
    return newProduct;
  }
};

/**
 * Deletes a product from Supabase.
 */
export const deleteProduct = async (id: string) => {
  try {
    // If it's a locally added product fallback
    if (id.startsWith('local_')) {
      const existing = localStorage.getItem('custom_products');
      if (existing) {
        let products = JSON.parse(existing) as CrystalProduct[];
        products = products.filter(p => p.id !== id);
        localStorage.setItem('custom_products', JSON.stringify(products));
      }
      return true;
    }

    // Delete from Supabase
    const { error } = await supabase
      .from('products')
      .delete()
      .eq('id', id);

    if (error) throw error;
    return true;
  } catch (error) {
    console.error('Error deleting product', error);
    return false;
  }
};
/**
 * Updates an existing product in Supabase.
 */
export const updateProduct = async (id: string, updates: Partial<Omit<CrystalProduct, 'id'>>) => {
  try {
    // If it's a locally added product fallback
    if (id.startsWith('local_')) {
      const existing = localStorage.getItem('custom_products');
      if (existing) {
        let products = JSON.parse(existing) as CrystalProduct[];
        const index = products.findIndex(p => p.id === id);
        if (index !== -1) {
          products[index] = { ...products[index], ...updates };
          localStorage.setItem('custom_products', JSON.stringify(products));
        }
      }
      return true;
    }

    // Map fields to Supabase snake_case
    const supabaseUpdates: any = {};
    if (updates.name) supabaseUpdates.name = updates.name;
    if (updates.description) supabaseUpdates.description = updates.description;
    if (updates.benefit) supabaseUpdates.benefit = updates.benefit;
    if (updates.price !== undefined) supabaseUpdates.price = updates.price;
    if (updates.image) supabaseUpdates.image_url = updates.image;
    if (updates.tags) supabaseUpdates.tags = updates.tags;
    if (updates.externalLink !== undefined) supabaseUpdates.external_link = updates.externalLink || null;

    const { error } = await supabase
      .from('products')
      .update(supabaseUpdates)
      .eq('id', id);

    if (error) throw error;
    return true;
  } catch (error) {
    console.error('Error updating product', error);
    return false;
  }
};
