import { useState, useEffect, useMemo } from 'react';
import type { Contact } from '../types';
import { fetchContacts, addContactApi } from '../api/contactsApi';

type Status = 'idle' | 'loading' | 'success' | 'error';

export const useContacts = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [status, setStatus] = useState<Status>('idle');
  const [searchQuery, setSearchQuery] = useState('');

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

  const filteredContacts = useMemo(() => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [contacts, searchQuery]);

  const addContact = async (newContactData: Omit<Contact, 'id' | 'avatarUrl'>) => {
    const newContact = await addContactApi(newContactData);
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  return {
    status,
    filteredContacts,
    
    searchQuery,
    setSearchQuery,
    addContact,
  };
};