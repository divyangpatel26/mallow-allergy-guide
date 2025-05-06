
import { supabase } from "@/integrations/supabase/client";

// Sample dish data
const sampleDishes = [
  {
    name: 'Mushroom Risotto',
    description: 'Creamy arborio rice with wild mushrooms and truffle oil',
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371',
    category: 'mains',
    allergens: ['Gluten', 'Dairy'],
    ingredients: ['Arborio rice', 'Wild mushrooms', 'White wine', 'Vegetable stock', 'Parmesan', 'Truffle oil', 'Herbs']
  },
  {
    name: 'Avocado Toast',
    description: 'Smashed avocado on sourdough with microgreens and chili flakes',
    image: 'https://images.unsplash.com/photo-1603046891744-76bbd9f4dfe7',
    category: 'starters',
    allergens: ['Gluten'],
    ingredients: ['Sourdough bread', 'Avocado', 'Lemon juice', 'Chili flakes', 'Sea salt', 'Microgreens']
  },
  {
    name: 'Quinoa Buddha Bowl',
    description: 'Nutrient-rich bowl with roasted vegetables and tahini dressing',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
    category: 'mains',
    allergens: ['Sesame', 'Nuts'],
    ingredients: ['Quinoa', 'Roasted sweet potato', 'Broccoli', 'Chickpeas', 'Avocado', 'Tahini', 'Mixed seeds', 'Almonds']
  },
  {
    name: 'Chocolate Mousse',
    description: 'Rich dark chocolate mousse with raspberry coulis',
    image: 'https://images.unsplash.com/photo-1511715112108-9acc5d89e861',
    category: 'desserts',
    allergens: ['Dairy', 'Soy'],
    ingredients: ['Dark chocolate', 'Heavy cream', 'Egg whites', 'Sugar', 'Vanilla extract', 'Raspberries']
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
          category: dishData.category,
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
