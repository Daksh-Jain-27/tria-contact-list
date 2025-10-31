// src/components/ContactCard.tsx
import type { Contact } from '../types';

interface ContactCardProps {
  contact: Contact;
}

export const ContactCard = ({ contact }: ContactCardProps) => {
  return (
    <li className="flex items-center p-4 space-x-4 bg-white border border-gray-200 rounded-lg shadow-sm">
      <img 
        src={contact.avatarUrl} 
        alt={contact.name} 
        className="w-12 h-12 rounded-full bg-gray-100"
      />
      <div className="flex-1 min-w-0">
        <p className="text-base font-semibold text-gray-900 truncate">{contact.name}</p>
        <p className="text-sm text-gray-500 truncate">{contact.email}</p>
        <p className="text-sm text-gray-500 truncate">{contact.phone}</p>
      </div>
    </li>
  );
};