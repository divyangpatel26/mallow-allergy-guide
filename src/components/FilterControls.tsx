
import React from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Search, Filter, Ban } from 'lucide-react';
import { Switch } from './ui/switch';

interface FilterControlsProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  showAllDishes: boolean;
  onShowAllChange: (showAll: boolean) => void;
  onionGarlicFree?: boolean;
  onOnionGarlicFreeChange?: (value: boolean) => void;
}

const FilterControls = ({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  showAllDishes,
  onShowAllChange,
  onionGarlicFree = false,
  onOnionGarlicFreeChange,
}: FilterControlsProps) => {
  const categories = [
    { id: 'all', label: 'All' },
    { id: 'starters', label: 'Starters' },
    { id: 'mains', label: 'Mains' },
    { id: 'desserts', label: 'Desserts' },
    { id: 'drinks', label: 'Drinks' },
    { id: 'breakfast', label: 'Breakfast' },
    { id: 'weekend_brunch', label: 'Weekend Brunch' },
    { id: 'market_menu_lunch', label: 'Market Menu (Lunch)' },
    { id: 'market_menu_dinner', label: 'Market Menu (Dinner)' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          {/* Search Input */}
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              placeholder="Search dishes by name or ingredient..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Show All / Safe Only Toggle */}
          <div className="flex items-center space-x-2">
            <Button
              variant={showAllDishes ? "outline" : "default"}
              onClick={() => onShowAllChange(false)}
              className={!showAllDishes ? "bg-mallow-green text-gray-800" : ""}
            >
              Safe Dishes Only
            </Button>
            <Button
              variant={!showAllDishes ? "outline" : "default"}
              onClick={() => onShowAllChange(true)}
              className={showAllDishes ? "bg-mallow-gold text-gray-800" : ""}
            >
              Show All Dishes
            </Button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-2">
          <Filter size={16} className="text-gray-500" />
          <span className="text-gray-500 font-medium">Filter:</span>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant="outline"
                size="sm"
                onClick={() => onCategoryChange(category.id)}
                className={
                  selectedCategory === category.id
                    ? "bg-mallow-green-light text-gray-800 border-mallow-green"
                    : "border-gray-200"
                }
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
        
        {/* Onion & Garlic Free Filter */}
        {onOnionGarlicFreeChange && (
          <div className="flex items-center space-x-3 pt-2 border-t border-gray-100">
            <Ban size={16} className="text-gray-500" />
            <span className="text-gray-700">Onion & Garlic Free</span>
            <Switch 
              checked={onionGarlicFree} 
              onCheckedChange={onOnionGarlicFreeChange}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterControls;
