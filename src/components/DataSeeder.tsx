
import React, { useState } from 'react';
import { Button } from './ui/button';
import { seedSampleDishes } from '../utils/seedData';
import { useToast } from './ui/use-toast';

const DataSeeder = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSeedData = async () => {
    setIsLoading(true);
    
    try {
      const result = await seedSampleDishes();
      
      if (result.success) {
        toast({
          title: "Success",
          description: "Sample dishes have been added to the database.",
          duration: 5000,
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to seed sample dishes. Please check console for details.",
          variant: "destructive",
          duration: 5000,
        });
      }
    } catch (error) {
      console.error("Error seeding dishes:", error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-10">
      <Button 
        variant="outline" 
        onClick={handleSeedData} 
        disabled={isLoading}
        className="bg-white shadow-md"
      >
        {isLoading ? "Adding Sample Data..." : "Add Sample Dishes"}
      </Button>
    </div>
  );
};

export default DataSeeder;
