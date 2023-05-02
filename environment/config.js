import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCvPyMc61A46R3tmoodRyMRwkdHigZPCEM',
  authDomain: 'enaaj-a2cbd.firebaseapp.com',
  projectId: 'enaaj-a2cbd',
  storageBucket: 'enaaj-a2cbd.appspot.com',
  messagingSenderId: '80610730215',
  appId: '1:80610730215:web:86c460aa33a520bc838242',
  measurementId: 'G-4VCTR1195W',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseAuth = firebaseApp.auth();
export const db = firebaseApp.database();
