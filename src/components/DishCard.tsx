
import React from 'react';
import { Dish, Allergen } from '../types/types';
import { Button } from './ui/button';
import { Info } from 'lucide-react';

interface DishCardProps {
  dish: Dish;
  selectedAllergens: string[];
  showDetails: (dish: Dish) => void;
  showAllDishes: boolean;
  allergenList: Allergen[];
}

const DishCard = ({ dish, selectedAllergens, showDetails, showAllDishes, allergenList }: DishCardProps) => {
  // Check if dish contains any of the selected allergens
  const containsSelectedAllergens = dish.allergens.some(allergen => 
    selectedAllergens.includes(allergen)
  );
  
  // Don't show the dish if it contains selected allergens and we're not showing all dishes
  if (containsSelectedAllergens && !showAllDishes) {
    return null;
  }

  // Get allergen info for this dish
  const dishAllergenInfo = allergenList.filter(allergen => 
    dish.allergens.includes(allergen.id)
  );

  // Function to handle clicking on the dish card
  const handleDishClick = () => {
    showDetails(dish);
  };

  return (
    <div className="dish-card group animate-scale-in bg-white rounded-lg shadow-md overflow-hidden">
      <div 
        className="aspect-w-16 aspect-h-9 overflow-hidden bg-gray-100 cursor-pointer" 
        onClick={handleDishClick}
      >
        <img 
          src={dish.image} 
          alt={dish.name} 
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start">
          <h3 
            className="font-playfair text-lg font-semibold text-gray-800 cursor-pointer hover:text-mallow-green transition-colors"
            onClick={handleDishClick}
          >
            {dish.name}
          </h3>
          
          {/* Safe/Unsafe indicator */}
          {selectedAllergens.length > 0 && (
            <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
              containsSelectedAllergens ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
            }`}>
              {containsSelectedAllergens ? 'Contains Allergens' : 'Safe'}
            </span>
          )}
        </div>
        
        <p 
          className="mt-2 text-gray-600 line-clamp-2 cursor-pointer hover:text-gray-900 transition-colors" 
          onClick={handleDishClick}
        >
          {dish.description}
        </p>
        
        {/* Dietary info */}
        <div className="mt-2 flex flex-wrap gap-1">
          {dish.onion_garlic_free && (
            <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-green-100 text-green-800">
              Onion & Garlic Free
            </span>
          )}
        </div>
        
        {/* Allergen Tags - made clickable */}
        {dishAllergenInfo.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1">
            {dishAllergenInfo.map((allergen) => (
              <span 
                key={allergen.id} 
                className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                  selectedAllergens.includes(allergen.id) 
                    ? 'bg-red-100 text-red-800' 
                    : 'bg-gray-100 text-gray-600'
                } cursor-pointer hover:opacity-80 transition-opacity`}
                title={allergen.name}
                onClick={handleDishClick}
                role="button"
                aria-label={`View details for ${dish.name} which contains ${allergen.name}`}
              >
                {allergen.name}
              </span>
            ))}
          </div>
        )}
        
        <Button 
          onClick={handleDishClick} 
          variant="outline"
          className="mt-4 w-full hover:bg-mallow-green-light"
        >
          <Info className="mr-2 h-4 w-4" />
          View Details
        </Button>
      </div>
    </div>
  );
};

export default DishCard;
