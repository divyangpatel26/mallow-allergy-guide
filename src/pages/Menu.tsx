
import React, { useState, useEffect } from 'react';
import DishModal from '../components/DishModal';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Dish, Allergen } from '../types/types';
import { getDishes, getAllergens } from '../services/supabaseService';

const Menu = () => {
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [allergens, setAllergens] = useState<Allergen[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch dishes and allergens on component mount
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const [dishesData, allergensData] = await Promise.all([
          getDishes(),
          getAllergens()
        ]);
        setDishes(dishesData);
        setAllergens(allergensData);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadData();
  }, []);

  const categories = [
    { id: 'starters', name: 'Starters' },
    { id: 'mains', name: 'Mains' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'drinks', name: 'Drinks' },
  ];

  const showDishDetails = (dish: Dish) => {
    setSelectedDish(dish);
    setIsModalOpen(true);
  };

  const closeDishModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Our Menu</h1>
          <p className="text-lg text-gray-700 mb-8">
            Discover our seasonal plant-based dishes, carefully crafted with fresh ingredients.
            For allergen information, please see each dish or use our Allergy Checker.
          </p>
          <Button asChild className="bg-mallow-green-light text-gray-800 hover:bg-mallow-green border border-mallow-green">
            <Link to="/allergies">
              Check Your Allergies <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {isLoading ? (
          <div className="text-center py-12">Loading menu...</div>
        ) : (
          /* Menu Categories */
          <div className="space-y-16 max-w-6xl mx-auto">
            {categories.map((category) => {
              const categoryDishes = dishes.filter(dish => dish.category === category.id);
              
              if (categoryDishes.length === 0) return null;
              
              return (
                <div key={category.id} className="scroll-mt-24" id={category.id}>
                  <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-8 pb-2 border-b border-gray-200">
                    {category.name}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {categoryDishes.map((dish) => (
                      <div 
                        key={dish.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row"
                      >
                        <div className="md:w-1/3 h-40 md:h-auto bg-gray-100">
                          <img 
                            src={dish.image} 
                            alt={dish.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-5 flex-1 flex flex-col justify-between">
                          <div>
                            <h3 className="font-playfair text-lg font-semibold text-gray-800 mb-2">
                              {dish.name}
                            </h3>
                            <p className="text-gray-600 text-sm">{dish.description}</p>
                          </div>
                          <Button 
                            onClick={() => showDishDetails(dish)} 
                            variant="outline"
                            size="sm"
                            className="mt-4 self-end hover:bg-mallow-green-light"
                          >
                            View Details
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Dish Detail Modal */}
      <DishModal 
        dish={selectedDish}
        isOpen={isModalOpen}
        onClose={closeDishModal}
        selectedAllergens={[]}
        allergenList={allergens}
      />
    </div>
  );
};

export default Menu;
