
import React from 'react';
import { Allergen } from '../types/types';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';

interface AllergenSelectorProps {
  allergens: Allergen[];
  selectedAllergens: string[];
  onChange: (selectedAllergens: string[]) => void;
}

const AllergenSelector = ({ allergens, selectedAllergens, onChange }: AllergenSelectorProps) => {
  const handleAllergenChange = (allergenId: string) => {
    if (selectedAllergens.includes(allergenId)) {
      onChange(selectedAllergens.filter(id => id !== allergenId));
    } else {
      onChange([...selectedAllergens, allergenId]);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-5 md:p-6">
      <h3 className="text-xl font-playfair font-semibold mb-5 text-center md:text-left">Select Your Allergies</h3>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {allergens.map((allergen) => {
          const isSelected = selectedAllergens.includes(allergen.id);
          
          return (
            <div 
              key={allergen.id}
              className={`
                border rounded-xl p-3 transition-all cursor-pointer
                flex items-center gap-2 touch-manipulation
                ${isSelected 
                  ? 'bg-primary/10 border-primary shadow-sm' 
                  : 'bg-white border-mallow-gray-light hover:border-primary/30'}
              `}
              onClick={() => handleAllergenChange(allergen.id)}
              role="button"
              aria-pressed={isSelected}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleAllergenChange(allergen.id);
                }
              }}
            >
              <div className="flex-shrink-0">
                <Checkbox
                  id={`allergen-${allergen.id}`}
                  checked={isSelected}
                  onCheckedChange={() => {
                    handleAllergenChange(allergen.id);
                  }}
                  className="h-4 w-4 rounded-sm border-2 border-gray-400 data-[state=checked]:border-primary"
                />
              </div>
              <Label
                htmlFor={`allergen-${allergen.id}`}
                className={`cursor-pointer text-sm font-medium line-clamp-1 flex items-center ${isSelected ? 'text-primary-foreground font-semibold' : ''}`}
              >
                {allergen.name}
              </Label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllergenSelector;
