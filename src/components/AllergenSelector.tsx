
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
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-playfair font-semibold mb-4">Select Your Allergies</h3>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {allergens.map((allergen) => {
          const isSelected = selectedAllergens.includes(allergen.id);
          
          return (
            <div 
              key={allergen.id}
              className={`
                border rounded-lg p-3 transition-all cursor-pointer flex items-center
                ${isSelected 
                  ? 'bg-primary/70 border-primary-foreground shadow-sm' 
                  : 'bg-white border-gray-200 hover:bg-mallow-gray-light'}
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
              <Checkbox
                id={`allergen-${allergen.id}`}
                checked={isSelected}
                onCheckedChange={() => {
                  handleAllergenChange(allergen.id);
                }}
                className="h-5 w-5 mr-3 border-2 border-gray-400 data-[state=checked]:border-primary-foreground"
              />
              <Label
                htmlFor={`allergen-${allergen.id}`}
                className={`cursor-pointer font-medium w-full ${isSelected ? 'text-primary-foreground font-semibold' : ''}`}
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
