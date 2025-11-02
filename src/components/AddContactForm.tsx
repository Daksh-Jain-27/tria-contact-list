// src/components/AddContactForm.tsx

import { useState } from 'react';
import { Input } from './common/Input';
import { Button } from './common/Button';
import type { Contact } from '../types';

interface AddContactFormProps {
  onAddContact: (contact: Omit<Contact, 'id' | 'avatarUrl'>) => void;
  onDone: () => void;
}

// Define the initial state for the form fields
const initialFormState = {
  name: '',
  email: '',
  phone: '',
};

// Define the initial state for validation errors
const initialErrorsState = {
  name: '',
  email: '',
  phone: '',
};

export const AddContactForm = ({ onAddContact, onDone }: AddContactFormProps) => {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState(initialErrorsState);

  // Helper function to handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    // Clear error message instantly when the user starts typing
    setErrors(prev => ({ ...prev, [id]: '' }));
  };

  // 📞 Validation Logic
  const validate = () => {
    let tempErrors = initialErrorsState;
    let isValid = true;

    // 1. Name Check: Required and minimum length
    if (!formData.name.trim()) {
      tempErrors.name = 'Name is required.';
      isValid = false;
    } else if (formData.name.trim().length < 3) {
      tempErrors.name = 'Name must be at least 3 characters.';
      isValid = false;
    }

    // 2. Email Check: Required and basic format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required.';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address.';
      isValid = false;
    }

    // 3. Phone Check: Must be a number only (if provided)
    // The phone field is optional, but if entered, it must be digits.
    const phoneRegex = /^\d*$/; // Allows empty string or digits only
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      tempErrors.phone = 'Phone number must contain numbers only.';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      // If validation passes, create the new contact data
      const newContactData: Omit<Contact, 'id' | 'avatarUrl'> = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        // Pass phone, even if it's an empty string (since it's optional)
        phone: formData.phone.trim(), 
      };

      onAddContact(newContactData);

      // Reset form and close the modal
      setFormData(initialFormState);
      onDone();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <Input 
          id="name" 
          value={formData.name} 
          onChange={handleChange} 
          // Note: HTML 'required' is removed; using custom validation
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <Input 
          id="email" 
          type="email" 
          value={formData.email} 
          onChange={handleChange} 
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
      </div>

      {/* Phone Field */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone (Numbers only)</label>
        <Input 
          id="phone" 
          type="tel" // Use type="tel" for mobile friendly keyboards, but enforce number rule with regex
          value={formData.phone} 
          onChange={handleChange} 
        />
        {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
      </div>
      
      <div className="flex justify-end pt-2">
        <Button type="submit">Save Contact</Button>
      </div>
    </form>
  );
};