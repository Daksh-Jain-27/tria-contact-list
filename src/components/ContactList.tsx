// src/components/ContactList.tsx
import type { Contact } from '../types';
import { ContactCard } from './ContactCard';

interface ContactListProps {
  contacts: Contact[]; 
}

export const ContactList = ({ contacts }: ContactListProps) => {
  if (contacts.length === 0) {
    return (
      <div className="py-12 text-center text-gray-500">
        <p>No contacts found.</p>
        <p>Try a different search or add a new contact!</p>
      </div>
    );
  }

  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {contacts.map((contact) => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};