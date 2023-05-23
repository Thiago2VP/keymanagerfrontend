import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import store, { persistor } from './store';
import Router from './routes';
import Footer from './components/Footer';
import GlobalStyle from './styles/GlobalStyles';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Router />
          <Footer />
          <GlobalStyle />
          <ToastContainer autoClose={3000} className="toast-container" />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
