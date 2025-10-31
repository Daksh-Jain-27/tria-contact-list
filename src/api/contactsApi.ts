// src/api/contactsApi.ts
import type {Contact}  from '../types';

const mockContacts: Contact[] = [
  { id: '1', name: 'Alice Smith', email: 'alice@example.com', phone: '123-456-7890', avatarUrl: 'https://api.dicebear.com/8.x/avataaars/svg?seed=Alice' },
  { id: '2', name: 'Bob Johnson', email: 'bob@example.com', phone: '234-567-8901', avatarUrl: 'https://api.dicebear.com/8.x/avataaars/svg?seed=Bob' },
  { id: '3', name: 'Charlie Brown', email: 'charlie@example.com', phone: '345-678-9012', avatarUrl: 'https://api.dicebear.com/8.x/avataaars/svg?seed=Charlie' },
  { id: '4', name: 'David Lee', email: 'david@example.com', phone: '456-789-0123', avatarUrl: 'https://api.dicebear.com/8.x/avataaars/svg?seed=David' },
  { id: '5', name: 'Eve Davis', email: 'eve@example.com', phone: '567-890-1234', avatarUrl: 'https://api.dicebear.com/8.x/avataaars/svg?seed=Eve' },
];

// This simulates a network request
export const fetchContacts = (): Promise<Contact[]> => {
  return new Promise((resolve) => {
    // We add a 1-second delay to show the loading state
    setTimeout(() => {
      resolve(mockContacts);
    }, 1000);
  });
};

// This simulates adding a contact
export const addContactApi = (contact: Omit<Contact, 'id' | 'avatarUrl'>): Promise<Contact> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newContact: Contact = {
        ...contact,
        id: (Math.random() * 10000).toString(),
        avatarUrl: `https://api.dicebear.com/8.x/avataaars/svg?seed=${contact.name}`
      };
      // In a real app, you'd add this to your state/db
      console.log("Simulating adding contact:", newContact);
      resolve(newContact);
    }, 500);
  });
};