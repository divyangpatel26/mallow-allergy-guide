
import React from 'react';
import { Dish, Allergen } from '../types/types';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from './ui/dialog';
import { Button } from './ui/button';
import { X } from 'lucide-react';

interface DishModalProps {
  dish: Dish | null;
  isOpen: boolean;
  onClose: () => void;
  selectedAllergens: string[];
  allergenList: Allergen[];
}

const DishModal = ({ dish, isOpen, onClose, selectedAllergens, allergenList }: DishModalProps) => {
  if (!dish) return null;

  // Get allergen objects for this dish
  const dishAllergens = allergenList.filter(allergen => 
    dish.allergens.includes(allergen.id)
  );
  
  // Get just the selected allergens in this dish
  const dishSelectedAllergens = dishAllergens.filter(allergen => 
    selectedAllergens.includes(allergen.id)
  );
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-playfair text-2xl">{dish.name}</DialogTitle>
          {/* Replace regular text description with rich HTML rendering */}
          <div 
            className="prose prose-sm prose-gray text-base text-gray-700 mt-3 antialiased leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: dish.description }}
          />
        </DialogHeader>
        
        <div className="mt-4">
          <div className="aspect-w-16 aspect-h-9 rounded-md overflow-hidden mb-6">
            <img 
              src={dish.image} 
              alt={dish.name} 
              className="w-full h-64 object-cover" 
            />
          </div>
          
          {/* Ingredients */}
          <div className="mb-6">
            <h4 className="font-playfair text-lg font-semibold mb-2">Ingredients</h4>
            <ul className="list-disc list-inside space-y-1">
              {dish.ingredients.map((ingredient, index) => (
                <li key={index} className="text-gray-700">{ingredient}</li>
              ))}
            </ul>
          </div>
          
          {/* Allergens - without icons */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-2">Allergen Information</h4>
            
            {dishAllergens.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {dishAllergens.map((allergen) => (
                  <span 
                    key={allergen.id} 
                    className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${
                      selectedAllergens.includes(allergen.id) 
                        ? 'bg-mallow-red text-red-800' 
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {allergen.name}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-green-700">This dish contains no known allergens.</p>
            )}
          </div>
          
          {/* Alert if contains selected allergens */}
          {dishSelectedAllergens.length > 0 && (
            <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-400 rounded">
              <p className="font-medium text-red-800">
                This dish contains allergens you've selected:
              </p>
              <ul className="mt-1 list-disc list-inside">
                {dishSelectedAllergens.map((allergen) => (
                  <li key={allergen.id} className="text-red-800">
                    {allergen.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {selectedAllergens.length > 0 && dishSelectedAllergens.length === 0 && (
            <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-400 rounded">
              <p className="font-medium text-green-800">
                Good news! This dish does not contain any of your selected allergens.
              </p>
            </div>
          )}
        </div>
        
        <DialogFooter>
          <Button onClick={onClose}>
            <X className="mr-2 h-4 w-4" />
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DishModal;
