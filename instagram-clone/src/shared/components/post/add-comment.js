import { useState, useContext } from 'react';
import FirebaseContext from '../../context/firebase';
import useUser from '../../hooks/use-user';
import React from 'react'

export default function AddComment({ docId, comments, setComments, commentInput }) {
  const [comment, setComment] = useState('');
  const { firebase, FieldValue } = useContext(FirebaseContext);
  const { 
      user: { fullName, username, userId, following} 
  } = useUser();

  // console.log("username", username)

  const handleSubmitComment = (event) => {
    event.preventDefault();

    console.log("handleSubmitComment", username)
    setComments([...comments, { username, comment }]);
    setComment('');

    return firebase
      .firestore()
      .collection('photos')
      .doc(docId)
      .update({
        comments: FieldValue.arrayUnion({ username, comment })
      });
  };

  return (
    <div className="border-t border-gray-primary">
      <form
        className="flex"
        onSubmit={(event) =>
          comment.length >= 1 ? handleSubmitComment(event) : event.preventDefault()
        }
      >
        <input
          className="w-full"
          type="text"
          value={comment}
          onChange={({ target }) => setComment(target.value)}
          ref={commentInput}
        />
        <button
          type="button"
          onClick={handleSubmitComment}
        >
          Post
        </button>
      </form>
    </div>
  );
}