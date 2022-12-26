import { useState, useEffect, useContext } from 'react';
import { getPhotos, getUserByUserId } from '../services/firebase';
import UserContext from '../context/user';
import React from 'react'

export default function usePhotos(user) {
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    async function getTimelinePhotos() {
        const[{ following }] = await getUserByUserId(user.uid);
        let followedUserPhotos = [];

        if (following.length > 0) {
            followedUserPhotos = await getPhotos(user.uid, following);
        }

        followedUserPhotos.sort((a, b) => b.dateCreated - a.dateCreated);
        setPhotos(followedUserPhotos);
    }

    console.log("YYYYYYYYYYYYYYAAAA", user)
    if(user){
      getTimelinePhotos();
    }
  }, []);

  return { photos };
}
