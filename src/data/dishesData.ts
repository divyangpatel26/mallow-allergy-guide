
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
}

export const allergens: Allergen[] = [
  { id: 'gluten', name: 'Gluten', icon: '🌾' },
  { id: 'nuts', name: 'Nuts', icon: '🥜' },
  { id: 'soy', name: 'Soy', icon: '🫘' },
  { id: 'sesame', name: 'Sesame', icon: '⚪' },
  { id: 'dairy', name: 'Dairy', icon: '🥛' },
  { id: 'shellfish', name: 'Shellfish', icon: '🦐' },
  { id: 'eggs', name: 'Eggs', icon: '🥚' },
  { id: 'sulphites', name: 'Sulphites', icon: '🍷' },
  { id: 'celery', name: 'Celery', icon: '🥬' },
  { id: 'mustard', name: 'Mustard', icon: '🟡' },
];

export const dishes: Dish[] = [
  {
    id: '1',
    name: 'Mushroom Risotto',
    description: 'Creamy arborio rice with wild mushrooms and truffle oil',
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371',
    category: 'mains',
    allergens: ['gluten', 'dairy'],
    ingredients: ['Arborio rice', 'Wild mushrooms', 'White wine', 'Vegetable stock', 'Parmesan', 'Truffle oil', 'Herbs']
  },
  {
    id: '2',
    name: 'Avocado Toast',
    description: 'Smashed avocado on sourdough with microgreens and chili flakes',
    image: 'https://images.unsplash.com/photo-1603046891744-76bbd9f4dfe7',
    category: 'starters',
    allergens: ['gluten'],
    ingredients: ['Sourdough bread', 'Avocado', 'Lemon juice', 'Chili flakes', 'Sea salt', 'Microgreens']
  },
  {
    id: '3',
    name: 'Quinoa Buddha Bowl',
    description: 'Nutrient-rich bowl with roasted vegetables and tahini dressing',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
    category: 'mains',
    allergens: ['sesame', 'nuts'],
    ingredients: ['Quinoa', 'Roasted sweet potato', 'Broccoli', 'Chickpeas', 'Avocado', 'Tahini', 'Mixed seeds', 'Almonds']
  },
  {
    id: '4',
    name: 'Chocolate Mousse',
    description: 'Rich dark chocolate mousse with raspberry coulis',
    image: 'https://images.unsplash.com/photo-1511715112108-9acc5d89e861',
    category: 'desserts',
    allergens: ['dairy', 'soy'],
    ingredients: ['Dark chocolate', 'Heavy cream', 'Egg whites', 'Sugar', 'Vanilla extract', 'Raspberries']
  },
  {
    id: '5',
    name: 'Wild Mushroom Soup',
    description: 'Velvety smooth soup with foraged mushrooms and truffle oil',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554',
    category: 'starters',
    allergens: ['dairy', 'celery'],
    ingredients: ['Wild mushrooms', 'Onion', 'Garlic', 'Celery', 'Vegetable stock', 'Heavy cream', 'Truffle oil', 'Herbs']
  },
  {
    id: '6',
    name: 'Matcha Latte',
    description: 'Premium ceremonial grade matcha with steamed milk of your choice',
    image: 'https://images.unsplash.com/photo-1536252584313-228652376c56',
    category: 'drinks',
    allergens: ['dairy'],
    ingredients: ['Matcha powder', 'Milk (dairy or plant-based)', 'Hot water', 'Optional sweetener']
  },
  {
    id: '7',
    name: 'Green Goddess Salad',
    description: 'Super green salad with avocado, edamame and herbs in a zesty dressing',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
    category: 'starters',
    allergens: ['soy', 'mustard'],
    ingredients: ['Mixed greens', 'Avocado', 'Cucumber', 'Edamame', 'Green herbs', 'Pumpkin seeds', 'Lemon-mustard dressing']
  },
  {
    id: '8',
    name: 'Berry Cheesecake',
    description: 'Creamy plant-based cheesecake with mixed berry compote',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187',
    category: 'desserts',
    allergens: ['gluten', 'nuts'],
    ingredients: ['Cashews', 'Coconut cream', 'Maple syrup', 'Lemon juice', 'Vanilla', 'Graham cracker crust', 'Mixed berries']
  },
  {
    id: '9',
    name: 'Pad Thai',
    description: 'Traditional Thai noodles with tofu and crushed peanuts',
    image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e',
    category: 'mains',
    allergens: ['gluten', 'nuts', 'soy', 'eggs'],
    ingredients: ['Rice noodles', 'Tofu', 'Bean sprouts', 'Green onions', 'Peanuts', 'Tamarind sauce', 'Lime', 'Eggs']
  },
  {
    id: '10',
    name: 'Kombucha',
    description: 'House-brewed fermented tea with seasonal fruit',
    image: 'https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8',
    category: 'drinks',
    allergens: ['sulphites'],
    ingredients: ['Fermented tea', 'Sugar', 'Seasonal fruits', 'Natural flavors']
  },
];
