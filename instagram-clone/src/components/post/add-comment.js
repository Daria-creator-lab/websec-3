import { useState, useContext } from 'react';
import FirebaseContext from '../../context/firebase';
import UserContext from '../../context/user';

export default function AddComment({ docId, comments, setComments, commentInput }) {
  const [comment, setComment] = useState('');
  const { firebase, FieldValue } = useContext(FirebaseContext);
  const {
    user: { displayName }
  } = useContext(UserContext);

  const handleSubmitComment = (event) => {
    event.preventDefault();

    setComments([...comments, { displayName, comment }]);
    setComment('');

    return firebase
      .firestore()
      .collection('photos')
      .doc(docId)
      .update({
        comments: FieldValue.arrayUnion({ displayName, comment })
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