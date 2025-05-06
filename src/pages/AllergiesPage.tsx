
import React, { useState, useMemo } from 'react';
import AllergenSelector from '../components/AllergenSelector';
import FilterControls from '../components/FilterControls';
import DishCard from '../components/DishCard';
import DishModal from '../components/DishModal';
import { dishes, Dish } from '../data/dishesData';
import { useToast } from '../components/ui/use-toast';

const AllergiesPage = () => {
  const { toast } = useToast();
  const [selectedAllergens, setSelectedAllergens] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showAllDishes, setShowAllDishes] = useState(true);
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle allergen selection
  const handleAllergenChange = (selected: string[]) => {
    setSelectedAllergens(selected);
    if (selected.length > 0) {
      toast({
        title: "Allergies Updated",
        description: `Filtering dishes based on ${selected.length} selected allergen${selected.length === 1 ? '' : 's'}.`,
        duration: 3000,
      });
    }
  };

  // Show dish details
  const showDishDetails = (dish: Dish) => {
    setSelectedDish(dish);
    setIsModalOpen(true);
  };

  // Close dish modal
  const closeDishModal = () => {
    setIsModalOpen(false);
  };

  // Filter dishes based on search, category, and allergens
  const filteredDishes = useMemo(() => {
    return dishes.filter((dish) => {
      // Filter by search term
      const matchesSearch = 
        searchTerm === '' || 
        dish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dish.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dish.ingredients.some(ingredient => 
          ingredient.toLowerCase().includes(searchTerm.toLowerCase())
        );
      
      // Filter by category
      const matchesCategory = 
        selectedCategory === 'all' || 
        dish.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Allergy Checker</h1>
          <p className="text-lg text-gray-700">
            Select your allergies below to find suitable dishes from our menu.
            We'll help you identify safe options for your dietary needs.
          </p>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {/* Allergen Selection */}
          <AllergenSelector 
            selectedAllergens={selectedAllergens}
            onChange={handleAllergenChange}
          />

          {/* Filter Controls */}
          <FilterControls 
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            showAllDishes={showAllDishes}
            onShowAllChange={setShowAllDishes}
          />

          {/* Results Status */}
          <div className="bg-white rounded-lg shadow-md p-6 flex justify-between items-center">
            <h2 className="text-xl font-playfair font-semibold">
              {filteredDishes.length} {filteredDishes.length === 1 ? 'Dish' : 'Dishes'} Available
            </h2>
            {selectedAllergens.length > 0 && (
              <div className="text-sm text-gray-600">
                {showAllDishes ? 'Showing all dishes' : 'Showing only safe dishes'}
                {' • '}
                {selectedAllergens.length} {selectedAllergens.length === 1 ? 'allergen' : 'allergens'} selected
              </div>
            )}
          </div>

          {/* Dishes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDishes.map((dish) => (
              <DishCard 
                key={dish.id}
                dish={dish}
                selectedAllergens={selectedAllergens}
                showDetails={showDishDetails}
                showAllDishes={showAllDishes}
              />
            ))}
          </div>

          {/* Empty state */}
          {filteredDishes.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No dishes found</h3>
              <p className="text-gray-600">
                Try adjusting your search or filters to find more dishes.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Dish Detail Modal */}
      <DishModal 
        dish={selectedDish}
        isOpen={isModalOpen}
        onClose={closeDishModal}
        selectedAllergens={selectedAllergens}
      />
    </div>
  );
};

export default AllergiesPage;
