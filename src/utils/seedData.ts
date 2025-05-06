
import { supabase } from "@/integrations/supabase/client";
import { Database } from "@/integrations/supabase/types"; 

type DishCategory = Database['public']['Enums']['dish_category'];

// Sample dish data
const sampleDishes = [
  {
    name: 'Mushroom Risotto',
    description: 'Creamy arborio rice with wild mushrooms and truffle oil',
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371',
    category: 'mains' as DishCategory,
    allergens: ['Gluten', 'Dairy'],
    ingredients: ['Arborio rice', 'Wild mushrooms', 'White wine', 'Vegetable stock', 'Parmesan', 'Truffle oil', 'Herbs'],
    onion_garlic_free: false
  },
  {
    name: 'Avocado Toast',
    description: 'Smashed avocado on sourdough with microgreens and chili flakes',
    image: 'https://images.unsplash.com/photo-1603046891744-76bbd9f4dfe7',
    category: 'starters' as DishCategory,
    allergens: ['Gluten'],
    ingredients: ['Sourdough bread', 'Avocado', 'Lemon juice', 'Chili flakes', 'Sea salt', 'Microgreens'],
    onion_garlic_free: true
  },
  {
    name: 'Quinoa Buddha Bowl',
    description: 'Nutrient-rich bowl with roasted vegetables and tahini dressing',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
    category: 'mains' as DishCategory,
    allergens: ['Sesame', 'Nuts'],
    ingredients: ['Quinoa', 'Roasted sweet potato', 'Broccoli', 'Chickpeas', 'Avocado', 'Tahini', 'Mixed seeds', 'Almonds'],
    onion_garlic_free: true
  },
  {
    name: 'Chocolate Mousse',
    description: 'Rich dark chocolate mousse with raspberry coulis',
    image: 'https://images.unsplash.com/photo-1511715112108-9acc5d89e861',
    category: 'desserts' as DishCategory,
    allergens: ['Dairy', 'Soy'],
    ingredients: ['Dark chocolate', 'Heavy cream', 'Egg whites', 'Sugar', 'Vanilla extract', 'Raspberries'],
    onion_garlic_free: true
  },
  {
    name: 'Breakfast Pancakes',
    description: 'Fluffy pancakes with fresh berries and maple syrup',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445',
    category: 'breakfast' as DishCategory,
    allergens: ['Gluten', 'Eggs'],
    ingredients: ['Flour', 'Eggs', 'Milk', 'Baking powder', 'Sugar', 'Berries', 'Maple syrup'],
    onion_garlic_free: true
  },
  {
    name: 'Eggs Benedict',
    description: 'Classic brunch dish with poached eggs and hollandaise sauce',
    image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7',
    category: 'weekend_brunch' as DishCategory,
    allergens: ['Gluten', 'Eggs', 'Dairy'],
    ingredients: ['English muffin', 'Eggs', 'Spinach', 'Hollandaise sauce', 'Butter', 'Vinegar'],
    onion_garlic_free: true
  },
  {
    name: 'Market Salad',
    description: 'Fresh seasonal salad with local vegetables and citrus dressing',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
    category: 'market_menu_lunch' as DishCategory,
    allergens: ['Nuts', 'Mustard'],
    ingredients: ['Mixed greens', 'Seasonal vegetables', 'Nuts', 'Citrus dressing'],
    onion_garlic_free: false
  },
  {
    name: 'Grilled Fish',
    description: 'Locally sourced fish grilled to perfection with seasonal sides',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2',
    category: 'market_menu_dinner' as DishCategory,
    allergens: ['Fish'],
    ingredients: ['Fresh fish', 'Lemon', 'Herbs', 'Olive oil', 'Seasonal vegetables'],
    onion_garlic_free: true
  }
];

// Function to seed the database with sample dishes
export async function seedSampleDishes() {
  try {
    // Get existing allergens
    const { data: existingAllergens } = await supabase
      .from('allergens')
      .select('*');
    
    const allergenMap = new Map();
    existingAllergens?.forEach(allergen => {
      allergenMap.set(allergen.name, allergen.id);
    });

    // Process each sample dish
    for (const dishData of sampleDishes) {
      // Step 1: Insert dish
      const { data: dish, error: dishError } = await supabase
        .from('dishes')
        .insert({
          name: dishData.name,
          description: dishData.description,
          image: dishData.image,
          category: dishData.category as DishCategory,
          onion_garlic_free: dishData.onion_garlic_free
        })
        .select()
        .single();
      
      if (dishError) {
        console.error('Error inserting dish:', dishError);
        continue;
      }
      
      // Step 2: Process ingredients
      for (const ingredientName of dishData.ingredients) {
        // Check if ingredient exists
        let ingredientId;
        const { data: existingIngredient } = await supabase
          .from('ingredients')
          .select('id')
          .eq('name', ingredientName)
          .single();
        
        if (existingIngredient) {
          ingredientId = existingIngredient.id;
        } else {
          // Insert new ingredient
          const { data: newIngredient, error: ingredientError } = await supabase
            .from('ingredients')
            .insert({ name: ingredientName })
            .select()
            .single();
          
          if (ingredientError) {
            console.error(`Error inserting ingredient ${ingredientName}:`, ingredientError);
            continue;
          }
          
          ingredientId = newIngredient.id;
        }
        
        // Link ingredient to dish
        await supabase
          .from('dish_ingredients')
          .insert({
            dish_id: dish.id,
            ingredient_id: ingredientId
          });
      }
      
      // Step 3: Process allergens
      for (const allergenName of dishData.allergens) {
        const allergenId = allergenMap.get(allergenName);
        
        if (allergenId) {
          // Link allergen to dish
          await supabase
            .from('dish_allergens')
            .insert({
              dish_id: dish.id,
              allergen_id: allergenId
            });
        } else {
          console.error(`Allergen ${allergenName} not found in database`);
        }
      }
    }
    
    console.log('Sample dishes seeded successfully!');
    
    return { success: true };
  } catch (error) {
    console.error('Error seeding sample dishes:', error);
    return { success: false, error };
  }
}
