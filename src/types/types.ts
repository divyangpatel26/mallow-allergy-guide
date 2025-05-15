
export interface Allergen {
  id: string;
  name: string;
}

export interface Dish {
  id: string;
  name: string;
  description: string;
  image: string;
  categories: string[];  // Changed from category (single) to categories (array)
  allergens: string[];
  ingredients: string[];
  onion_garlic_free?: boolean;
  created_at?: string;  // Added created_at field
  display_order?: number; // Added display_order field for manual sorting
}

export interface Category {
  id: string;     // Slug field from database
  label: string;  // Name field from database
  displayOrder: number;
}
