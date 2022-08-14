import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { I18nextProvider } from "react-i18next";
import { Provider } from 'react-redux'
import i18n from "./localization/i18n";
//
import App from './App';

import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';
import store from "./store/store"
// ----------------------------------------------------------------------

function AppWithCallbackAfterRender() {
  useEffect(()=>{
    console.log("Hi App");
  },[]);

  return (
    <HelmetProvider>
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </I18nextProvider>
      </Provider>
    </HelmetProvider>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<AppWithCallbackAfterRender />);
// ----------------------------------------------------------------------

// If you want to enable client cache, register instead.
serviceWorker.unregister();

reportWebVitals();