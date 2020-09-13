import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyCNqiWnZkWXT6X5-scOmuosl_Ib6z5GWds",
  authDomain: "website-react-5774f.firebaseapp.com",
  databaseURL: "https://website-react-5774f.firebaseio.com",
  projectId: "website-react-5774f",
  storageBucket: "website-react-5774f.appspot.com",
  messagingSenderId: "553539960664",
  appId: "1:553539960664:web:37ed08891e9c4946c22f2d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };