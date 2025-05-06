
import React, { useState, useMemo, useEffect } from 'react';
import AllergenSelector from '../components/AllergenSelector';
import FilterControls from '../components/FilterControls';
import DishCard from '../components/DishCard';
import DishModal from '../components/DishModal';
import { Dish, Allergen } from '../types/types';
import { useToast } from '../components/ui/use-toast';
import { getAllergens, getDishes } from '../services/supabaseService';

const AllergiesPage = () => {
  const { toast } = useToast();
  const [selectedAllergens, setSelectedAllergens] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showAllDishes, setShowAllDishes] = useState(true);
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [onionGarlicFree, setOnionGarlicFree] = useState(false);
  
  // State for data from Supabase
  const [allergens, setAllergens] = useState<Allergen[]>([]);
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from Supabase
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [allergensData, dishesData] = await Promise.all([
          getAllergens(),
          getDishes(),
        ]);
        setAllergens(allergensData);
        setDishes(dishesData);
      } catch (error) {
        console.error("Error fetching data:", error);
        toast({
          title: "Error",
          description: "Failed to load allergens and dishes. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [toast]);

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

  // Filter dishes based on search, category, allergens, and onion/garlic free
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
      
      // Filter by onion & garlic free
      const matchesOnionGarlicFree = 
        !onionGarlicFree || 
        dish.onion_garlic_free === true;
      
      return matchesSearch && matchesCategory && matchesOnionGarlicFree;
    });
  }, [searchTerm, selectedCategory, dishes, onionGarlicFree]);

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

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-pulse flex space-x-4 justify-center items-center">
              <div className="rounded-full bg-slate-200 h-10 w-10"></div>
              <div className="flex-1 max-w-md space-y-6 py-1">
                <div className="h-2 bg-slate-200 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-200 rounded"></div>
                </div>
              </div>
            </div>
            <p className="mt-4 text-gray-600">Loading allergens and dishes...</p>
          </div>
        ) : (
          <div className="space-y-8 max-w-5xl mx-auto">
            {/* Allergen Selection */}
            <AllergenSelector 
              allergens={allergens}
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
              onionGarlicFree={onionGarlicFree}
              onOnionGarlicFreeChange={setOnionGarlicFree}
            />

            {/* Results Status */}
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-wrap justify-between items-center gap-4">
              <h2 className="text-xl font-playfair font-semibold">
                {filteredDishes.length} {filteredDishes.length === 1 ? 'Dish' : 'Dishes'} Available
              </h2>
              <div className="text-sm text-gray-600 flex flex-wrap gap-2">
                {selectedAllergens.length > 0 && (
                  <span>
                    {showAllDishes ? 'Showing all dishes' : 'Showing only safe dishes'}
                    {' • '}
                    {selectedAllergens.length} {selectedAllergens.length === 1 ? 'allergen' : 'allergens'} selected
                  </span>
                )}
                {onionGarlicFree && (
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                    Onion & Garlic Free
                  </span>
                )}
              </div>
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
                  allergenList={allergens}
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
        )}
      </div>

      {/* Dish Detail Modal */}
      <DishModal 
        dish={selectedDish}
        isOpen={isModalOpen}
        onClose={closeDishModal}
        selectedAllergens={selectedAllergens}
        allergenList={allergens}
      />
    </div>
  );
};

export default AllergiesPage;
