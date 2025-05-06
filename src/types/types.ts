
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
}

export interface Category {
  id: string;     // Slug field from database
  label: string;  // Name field from database
  displayOrder: number;
}
