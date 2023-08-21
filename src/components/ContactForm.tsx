import React, { useState, useEffect } from 'react';

interface ContactFormProps {
  onSubmit: (contact: { name: string; email: string }) => void;
  isCreating: boolean;
  toggleCreating: () => void;
  initialContact?: { name: string; email: string };
  onSaveEdit?: (contact: { name: string; email: string }) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({
  onSubmit,
  isCreating,
  toggleCreating,
  initialContact,
  onSaveEdit,
}) => {
  const [name, setName] = useState(initialContact?.name || '');
  const [email, setEmail] = useState(initialContact?.email || '');

  useEffect(() => {
    setName(initialContact?.name || '');
    setEmail(initialContact?.email || '');
  }, [initialContact]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = { name, email };
    if (isCreating) {
      onSubmit(formData);
    } else if (onSaveEdit) {
      onSaveEdit(formData);
    }
    setName('');
    setEmail('');
  };

  if (!isCreating) {
    return (
      <button
        onClick={toggleCreating}
        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
      >
        Create Contact
      </button>
    );
  }

  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold mb-2">{initialContact ? 'Edit Contact' : 'Add Contact'}</h2>
      <form onSubmit={handleSubmit} className="flex space-x-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border px-2 py-1 w-1/3"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border px-2 py-1 w-1/3"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          {initialContact ? 'Save Edit' : 'Add Contact'}
        </button>
        {initialContact && (
          <button
            type="button"
            onClick={toggleCreating}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            Cancel
          </button>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
