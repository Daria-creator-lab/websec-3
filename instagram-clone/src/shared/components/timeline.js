import usePhotos from '../hooks/use-photos';
import Post from './post';
import UserContext from '../context/user';
import { useContext } from 'react';
import React from 'react'

export default function Timeline() {
  const { user } = useContext(UserContext);

  console.log("AAVVuser", user);

  const { photos } = usePhotos(user);
 
  return (
    <div className="container col-span-2">
      {!photos ?(
        <p className='font-bold'>loading...</p>
      ) : photos?.length > 0 ? (
        photos.map((content) => <Post key={content.docId} content={content} />)          
      ) : (
        <p className="text-center text-2xl">Follow people to see Photos</p>          
      )}
    </div>
  );
}

