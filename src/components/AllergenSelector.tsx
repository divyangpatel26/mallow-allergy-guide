
import React from 'react';
import { Allergen } from '../types/types';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import { Badge } from './ui/badge';

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
        {allergens.map((allergen) => (
          <div 
            key={allergen.id}
            className={`
              border rounded-lg p-3 transition-all cursor-pointer
              ${selectedAllergens.includes(allergen.id) 
                ? 'bg-primary border-primary-foreground shadow-sm' 
                : 'bg-white border-gray-200 hover:bg-mallow-gray-light'}
            `}
            onClick={() => handleAllergenChange(allergen.id)}
          >
            <div className="flex items-center justify-between">
              <Label
                htmlFor={`allergen-${allergen.id}`}
                className="flex items-center cursor-pointer flex-grow"
              >
                {allergen.name}
              </Label>
              <Checkbox
                id={`allergen-${allergen.id}`}
                checked={selectedAllergens.includes(allergen.id)}
                onCheckedChange={() => handleAllergenChange(allergen.id)}
                className="ml-2"
              />
            </div>
            {selectedAllergens.includes(allergen.id) && (
              <Badge variant="outline" className="mt-2 bg-secondary text-secondary-foreground text-xs">
                Selected
              </Badge>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllergenSelector;
