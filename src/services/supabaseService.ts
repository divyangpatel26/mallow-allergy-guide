import { supabase } from "@/integrations/supabase/client";
import { Allergen, Dish, Category } from "../types/types";

// Fetch all allergens
export async function getAllergens(): Promise<Allergen[]> {
  const { data, error } = await supabase
    .from('allergens')
    .select('*');
  
  if (error) {
    console.error("Error fetching allergens:", error);
    return [];
  }
  
  return data.map((allergen) => ({
    id: allergen.id,
    name: allergen.name
  }));
}

// Fetch all dishes with their allergen information
export async function getDishes(): Promise<Dish[]> {
  // First fetch all dishes
  const { data: dishesData, error: dishesError } = await supabase
    .from('dishes')
    .select('*');
  
  if (dishesError) {
    console.error("Error fetching dishes:", dishesError);
    return [];
  }
  
  // For each dish, fetch its allergens, categories, and ingredients
  const dishes = await Promise.all(dishesData.map(async (dish) => {
    // Get dish allergens
    const { data: allergenData, error: allergenError } = await supabase
      .from('dish_allergens')
      .select('allergen_id, allergens(id, name)')
      .eq('dish_id', dish.id);
    
    if (allergenError) {
      console.error(`Error fetching allergens for dish ${dish.id}:`, allergenError);
      return null;
    }

    // Get dish categories
    const { data: categoryData, error: categoryError } = await supabase
      .from('dish_categories')
      .select('category_id')
      .eq('dish_id', dish.id);
    
    if (categoryError) {
      console.error(`Error fetching categories for dish ${dish.id}:`, categoryError);
      return null;
    }

    // Get dish ingredients
    const { data: ingredientData, error: ingredientError } = await supabase
      .from('dish_ingredients')
      .select('ingredients(name)')
      .eq('dish_id', dish.id);
    
    if (ingredientError) {
      console.error(`Error fetching ingredients for dish ${dish.id}:`, ingredientError);
      return null;
    }

    // Map the ingredient names to an array
    const ingredients = ingredientData.map(item => item.ingredients.name);

    // Map the allergen IDs to an array
    const allergens = allergenData.map(item => item.allergen_id);
    
    // Map the category IDs to an array
    const categories = categoryData.map(item => item.category_id);
    
    // Return the dish with allergens, categories, and ingredients
    return {
      id: dish.id,
      name: dish.name,
      description: dish.description,
      image: dish.image,
      categories: categories,
      allergens: allergens,
      ingredients: ingredients,
      onion_garlic_free: dish.onion_garlic_free || false
    };
  }));
  
  // Filter out any null values from dishes that had errors
  return dishes.filter(dish => dish !== null) as Dish[];
}

// Fetch all active categories ordered by display_order
export async function getCategories(): Promise<Category[]> {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .eq('is_active', true)
    .order('display_order');
  
  if (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
  
  return data.map((category) => ({
    id: category.id,
    label: category.name,
    displayOrder: category.display_order
  }));
}
