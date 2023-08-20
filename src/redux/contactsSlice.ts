import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state:any, action) => {
      state.contacts.push(action.payload);
    },
    editContact: (state:any, action) => {
      const { id, name, email } = action.payload;
      const contactToEdit = state.contacts.find((contact:any) => contact.id === id);
      if (contactToEdit) {
        contactToEdit.name = name;
        contactToEdit.email = email;
      }
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(contact => contact['id'] !== action.payload);
    },
  },
});

export const { addContact, editContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
