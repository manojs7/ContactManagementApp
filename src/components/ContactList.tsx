// ContactList.tsx

import React from "react";

interface Contact {
  id: number;
  name: string;
  email: string;
}

interface ContactListProps {
  contacts: Contact[];
  onDelete: (id: number) => void;
  onEdit: (id: number) => void; // Add this line
}

const ContactList: React.FC<ContactListProps> = ({
  contacts,
  onDelete,
  onEdit,
}) => {
  return (
    <ul className="space-y-4">
      <h4>Contacts List</h4>
      {contacts.map((contact) => (
        <li key={contact.id} className="flex items-center justify-between">
          <div>
            <p className="font-semibold">{contact.name}</p>
            <p className="text-gray-500">{contact.email}</p>
          </div>
          <div>
            <button
              onClick={() => onEdit(contact.id)} // Make sure it's calling onEdit with contact id
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mr-2"
            >
              Edit
            </button>

            <button
              onClick={() => onDelete(contact.id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
