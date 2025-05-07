import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import Constants from 'expo-constants';
//import { getAnalytics } from "firebase/analytics"; // optional

const firebaseConfig = Constants.expoConfig?.extra;

if (!firebaseConfig) {
  throw new Error("Firebase config is not available.");
}

const app = initializeApp({
  apiKey: firebaseConfig.firebaseApiKey,
  authDomain: firebaseConfig.firebaseAuthDomain,
  projectId: firebaseConfig.firebaseProjectId,
  storageBucket: firebaseConfig.firebaseStorageBucket,
  messagingSenderId: firebaseConfig.firebaseSenderId,
  appId: firebaseConfig.firebaseAppId,
  measurementId: firebaseConfig.firebaseMeasurementId,
});

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };