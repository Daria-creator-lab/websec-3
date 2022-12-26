import { useState, useEffect } from 'react';
import { getUserByUsername } from '../services/firebase';
import Header from '../components/header';
import UserProfile from '../components/profile';
import React from 'react'

export default function Profile(props) {
  const username = props.data.location.pathname.split('/').pop();
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function checkUserExists() {
      const [user] = await getUserByUsername(username);
      if (user?.userId) {
        setUser(user);
      }
    }

    checkUserExists();
  }, [username]);

  return user?.username ? (
    <div className="bg-gray-background">
      <Header />
      <div className="mx-auto max-w-screen-lg">
        <UserProfile user={user} />
      </div>
    </div>
  ) : null;
}
