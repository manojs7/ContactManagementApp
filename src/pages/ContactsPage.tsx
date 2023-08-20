import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, editContact, deleteContact } from '../redux/contactsSlice';
import ContactList from '../components/ContactList';
import ContactForm from '../components/ContactForm';

const ContactsPage: React.FC = () => {
  const contacts = useSelector((state:any) => state.contacts.contacts);
  const dispatch = useDispatch();

  const [isCreatingContact, setIsCreatingContact] = useState(false);
  const [editingContactId, setEditingContactId] = useState<number | null>(null);

  const handleDeleteContact = (id: number) => {
    dispatch(deleteContact(id));
    if (editingContactId === id) {
      setEditingContactId(null);
    }
  };

  const handleAddContact = (contact: { name: string; email: string }) => {
    dispatch(addContact({ id: contacts.length + 1, ...contact }));
    setIsCreatingContact(false);
  };

  const handleEditContact = (id: number) => {
    setEditingContactId(id);
  };
  

  const handleSaveEdit = (editedContact: { name: string; email: string }) => {
    if (editingContactId !== null) {
      dispatch(editContact({ id: editingContactId, ...editedContact }));
      setEditingContactId(null);
    }
  };

  return (
    <div className="p-6 bg-gradient-to-br from-pink-400 to-purple-500">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-semibold mb-4">Contacts</h1>
        <ContactForm
          onSubmit={handleAddContact}
          isCreating={isCreatingContact}
          toggleCreating={() => setIsCreatingContact(prevState => !prevState)}
          initialContact={
            editingContactId !== null
              ? contacts.find((contact:any) => contact.id === editingContactId)
              : undefined
          }
          onSaveEdit={handleSaveEdit} // Pass onSaveEdit function
        />
        {contacts.length > 0 && (
          <ContactList contacts={contacts} onDelete={handleDeleteContact} onEdit={handleEditContact} />

        )}
      </div>
    </div>
  );
};

export default ContactsPage;
