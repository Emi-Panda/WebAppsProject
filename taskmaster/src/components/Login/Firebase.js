import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjCNXeTtdaNJcD4SH710q3TLqZpHU2r1g",
  authDomain: "taskmaster-74a5a.firebaseapp.com",
  projectId: "taskmaster-74a5a",
  storageBucket: "taskmaster-74a5a.appspot.com",
  messagingSenderId: "750749389145",
  appId: "1:750749389145:web:2193a4c41305933281bc48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;