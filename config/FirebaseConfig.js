import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'ADD_YOUR_API_KEY_HERE',
  authDomain: 'YOUR_AUTH_DOMAIN_HERE',
  projectId: 'ADD_YOUR_PROJECT_ID_HERE',
  storageBucket: 'ADD_YOUR_STORAGE_BUCKET_HERE',
  messagingSenderId: 'ADD_YOUR_MSG_ID_HERE',
  appId: 'ADD_YOUR_APP_ID',
  measurementId: 'ADD_YOUR_MEASUREMENT_ID_HERE',
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);