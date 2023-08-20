import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Sidebar from './Sidebar';
import ContactsPage from '../pages/ContactsPage';
import DashboardPage from '../pages/DashboardPage';
import { Provider } from 'react-redux';
import store from '../redux/store';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
      <Router>
        <div className="flex">
          <Sidebar />
          <div className="flex-grow p-4">
            <Routes>
              <Route path="/" element={<ContactsPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              
            </Routes>
          </div>
        </div>
      </Router>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;


