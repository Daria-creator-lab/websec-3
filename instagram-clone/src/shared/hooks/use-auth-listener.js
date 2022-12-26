import { useState, useEffect, useContext } from 'react';
import FirebaseContext from '../context/firebase';
import React from 'react'
import WindowContext from '../context/window';

export default function useAuthListener() {
  const window = useContext(WindowContext);
  if(!window) return {};
  const [user, setUser] = useState(JSON.parse(window.localStorage.getItem('authUser')));
  const firebase = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        window.localStorage.setItem('authUser', JSON.stringify(authUser));
        setUser(authUser);
      } else {
        window.localStorage.removeItem('authUser');
        setUser(null);
      }
    });

    return () => listener();
  }, [firebase]);

  return { user };
}
