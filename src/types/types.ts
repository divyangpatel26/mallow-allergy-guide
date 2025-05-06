
export interface Allergen {
  id: string;
  name: string;
  icon: string;
}

export interface Dish {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  allergens: string[];
  ingredients: string[];
  onion_garlic_free?: boolean;
}
