import * as React from 'react';
import ReactDOM from 'react-dom';
import App from '../shared/App';
import FirebaseContext from '../shared/context/firebase';
import { firebase, FieldValue } from '../shared/lib/firebase';
import { BrowserRouter } from 'react-router-dom';
import WindowContext from '../shared/context/window';

ReactDOM.hydrate(
  <FirebaseContext.Provider value={{ firebase, FieldValue }}>
    <WindowContext.Provider value={window}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </WindowContext.Provider>
  </FirebaseContext.Provider>,
  document.getElementById('app')
);