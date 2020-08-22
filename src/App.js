import React from 'react';
import Routes from './routes';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyles from './styles/GlobalStyles';
import store from './store';

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes />
        <GlobalStyles />
      </Provider>
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
