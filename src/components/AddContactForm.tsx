import { useState } from 'react';
import { Input } from './common/Input';
import { Button } from './common/Button';
import type { Contact } from '../types';

interface AddContactFormProps {
  onAddContact: (contact: Omit<Contact, 'id' | 'avatarUrl'>) => void;
  onDone: () => void; 
}

export const AddContactForm = ({ onAddContact, onDone }: AddContactFormProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      alert("Name and Email are required.");
      return;
    }
    
    onAddContact({ name, email, phone });
    onDone(); 
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <Input 
          id="name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <Input 
          id="email" 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
        <Input 
          id="phone" 
          type="tel" 
          value={phone} 
          onChange={(e) => setPhone(e.target.value)} 
        />
      </div>
      <div className="flex justify-end pt-2">
        <Button type="submit">Save Contact</Button>
      </div>
    </form>
  );
};