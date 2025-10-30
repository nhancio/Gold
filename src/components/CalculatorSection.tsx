import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Scale } from "lucide-react";
import CalculatorPopup from "./CalculatorPopup";

const CalculatorSection = () => {
  const [location, setLocation] = useState('Hyderabad');
  const [karatage, setKaratage] = useState('22K');
  const [weight, setWeight] = useState('10');
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleCalculate = () => {
    setIsPopupOpen(true);
  };

  return (
    <>
      <section id="calculator" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Calculate your gold jewels with our online gold calculator
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-yellow-100 rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                Fill the details to get the value for your gold
              </h3>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="location" className="text-sm font-medium text-gray-700">
                    Location
                  </Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="location"
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="pl-10 bg-blue-50 border-blue-200"
                      placeholder="Enter your location"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="karatage" className="text-sm font-medium text-gray-700">
                    Karatage
                  </Label>
                  <Select value={karatage} onValueChange={setKaratage}>
                    <SelectTrigger className="bg-white border-gray-300">
                      <SelectValue placeholder="Select karatage" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="18K">18K</SelectItem>
                      <SelectItem value="20K">20K</SelectItem>
                      <SelectItem value="22K">22K</SelectItem>
                      <SelectItem value="24K">24K</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="weight" className="text-sm font-medium text-gray-700">
                    Weight (grams)
                  </Label>
                  <div className="relative">
                    <Scale className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="weight"
                      type="number"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      className="pl-10 bg-white border-gray-300"
                      placeholder="Enter weight in grams"
                    />
                  </div>
                </div>

                <Button
                  onClick={handleCalculate}
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Calculate Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CalculatorPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        formData={{ location, karatage, weight }}
      />
    </>
  );
};

export default CalculatorSection;
