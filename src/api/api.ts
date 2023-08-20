import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080'; // Replace with your actual API base URL

export interface Contact {
  id: number;
  name: string;
  email: string;
}

// Fetch contacts
export const fetchContacts = async () => {
  const response = await axios.get<Contact[]>(`${API_BASE_URL}/contacts`);
  return response.data;
};

// Create a new contact
export const createContact = async (contact: { name: string; email: string }) => {
  const response = await axios.post<Contact>(`${API_BASE_URL}/contacts`, contact);
  return response.data;
};

// Delete a contact
export const deleteContact = async (id: number) => {
  await axios.delete(`${API_BASE_URL}/contacts/${id}`);
};

// Fetch COVID-19 data, charts, and maps data (You can add more functions as needed)
// ...

// More API functions as needed
// ...
