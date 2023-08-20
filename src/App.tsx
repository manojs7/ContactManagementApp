import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import store from './redux/store';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
      <Provider store={store}>
      <App />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
