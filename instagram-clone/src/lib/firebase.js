import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCcnQy0LixFoZL7D6TjTVXyC1gVLO24K70",
  authDomain: "instagram-yt-7c886.firebaseapp.com",
  projectId: "instagram-yt-7c886",
  storageBucket: "instagram-yt-7c886.appspot.com",
  messagingSenderId: "64902171109",
  appId: "1:64902171109:web:a15bbedba22ebd709a470c"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
