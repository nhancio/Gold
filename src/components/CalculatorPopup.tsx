import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X, User, Phone } from "lucide-react";
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG, EMAIL_TEMPLATE_PARAMS, initializeEmailJS } from '@/lib/emailjs';

interface CalculatorPopupProps {
  isOpen: boolean;
  onClose: () => void;
  formData: {
    location: string;
    karatage: string;
    weight: string;
  };
}

const CalculatorPopup = ({ isOpen, onClose, formData }: CalculatorPopupProps) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    initializeEmailJS();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Debug: Log the configuration
      console.log('EmailJS Config:', EMAILJS_CONFIG);
      console.log('Template Params:', EMAIL_TEMPLATE_PARAMS);

      const templateParams = {
        ...EMAIL_TEMPLATE_PARAMS,
        name: name,
        phone: phone,
        location: formData.location,
        karatage: formData.karatage,
        weight: formData.weight,
        message: `Gold Calculator Quote Request:
        Location: ${formData.location}
        Karatage: ${formData.karatage}
        Weight: ${formData.weight} grams
        Customer Name: ${name}
        Phone: ${phone}`
      };

      console.log('Sending email with params:', templateParams);

      const result = await emailjs.send(
        EMAILJS_CONFIG.serviceId, 
        EMAILJS_CONFIG.templateId, 
        templateParams, 
        EMAILJS_CONFIG.publicKey
      );
      
      console.log('Email sent successfully:', result);
      alert('Quote request sent successfully! We will contact you soon.');
      onClose();
      setName('');
      setPhone('');
    } catch (error) {
      console.error('Error sending email:', error);
      console.error('Error details:', {
        serviceId: EMAILJS_CONFIG.serviceId,
        templateId: EMAILJS_CONFIG.templateId,
        publicKey: EMAILJS_CONFIG.publicKey,
        error: error
      });
      alert(`Failed to send quote request. Error: ${error.message || 'Unknown error'}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-bold text-gray-800">
              Get Your Gold Quote
            </DialogTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Enter your details below to get an instant quote for your gold.
          </p>
        </DialogHeader>
        
        <div className="border-t border-gray-200 my-4"></div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-gray-700">
              Name
            </Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                id="name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
              Phone Number
            </Label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>
          
          <div className="bg-gray-50 p-3 rounded-lg">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Quote Details:</h4>
            <div className="text-sm text-gray-600 space-y-1">
              <p><span className="font-medium">Location:</span> {formData.location}</p>
              <p><span className="font-medium">Karatage:</span> {formData.karatage}</p>
              <p><span className="font-medium">Weight:</span> {formData.weight} grams</p>
            </div>
          </div>
          
          <Button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-lg transition-all duration-300"
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Get Quote'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CalculatorPopup;
