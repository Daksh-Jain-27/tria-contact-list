import { useState } from 'react';
import { useContacts } from './hooks/useContacts';
import { SearchBar } from './components/SearchBar';
import { ContactList } from './components/ContactList';
import { Button } from './components/common/Button';
import { Loader } from './components/common/Loader';
import { Modal } from './components/common/Modal';
import { AddContactForm } from './components/AddContactForm';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const { 
    status, 
    filteredContacts, 
    searchQuery, 
    setSearchQuery, 
    addContact 
  } = useContacts();

  const renderContent = () => {
    switch (status) {
      case 'loading':
        return <Loader />;
      case 'error':
        return <p className="py-12 text-center text-red-600">Failed to load contacts. Please try again later.</p>;
      case 'success':
        return <ContactList contacts={filteredContacts} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <nav className="container max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Contact List</h1>
          <Button onClick={() => setIsModalOpen(true)}>
            Add New Contact 
          </Button>
        </nav>
      </header>

      <main className="container max-w-4xl mx-auto px-4 py-8">
        <div className="mb-6">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>
        
        {renderContent()}
      </main>

      <Modal 
        title="Add New Contact"
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
      >
        <AddContactForm 
          onAddContact={addContact}
          onDone={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  );
}

export default App;