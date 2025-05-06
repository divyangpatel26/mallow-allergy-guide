
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
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {allergens.map((allergen) => (
          <div key={allergen.id} className="flex items-center space-x-2">
            <Checkbox
              id={`allergen-${allergen.id}`}
              checked={selectedAllergens.includes(allergen.id)}
              onCheckedChange={() => handleAllergenChange(allergen.id)}
            />
            <Label
              htmlFor={`allergen-${allergen.id}`}
              className="flex items-center cursor-pointer"
            >
              <span className="mr-1">{allergen.icon}</span> {allergen.name}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllergenSelector;
