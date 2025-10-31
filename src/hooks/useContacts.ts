// src/hooks/useContacts.ts
import { useState, useEffect, useMemo } from 'react';
import type { Contact } from '../types';
import { fetchContacts, addContactApi } from '../api/contactsApi';

// This defines the possible states your data fetching can be in
type Status = 'idle' | 'loading' | 'success' | 'error';

export const useContacts = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [status, setStatus] = useState<Status>('idle');
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch contacts when the hook is first used
  useEffect(() => {
    setStatus('loading');
    fetchContacts()
      .then((data) => {
        setContacts(data);
        setStatus('success');
      })
      .catch(() => {
        setStatus('error');
      });
  }, []);

  // Memoize the filtered list so it only recalculates when needed
  const filteredContacts = useMemo(() => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [contacts, searchQuery]);

  // Function to add a new contact
  const addContact = async (newContactData: Omit<Contact, 'id' | 'avatarUrl'>) => {
    // We don't need a full loading state here, but you could add one
    const newContact = await addContactApi(newContactData);
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  return {
    // Data
    status,
    filteredContacts,
    
    // Actions
    searchQuery,
    setSearchQuery,
    addContact,
  };
};