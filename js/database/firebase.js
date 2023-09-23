import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  get,
  orderByChild,
  equalTo,
  query,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJMyG26aQPFfnfoRNbHVWIfmallWzqTo4",
  authDomain: "fantasy-fa4b9.firebaseapp.com",
  projectId: "fantasy-fa4b9",
  storageBucket: "fantasy-fa4b9.appspot.com",
  messagingSenderId: "370792112485",
  appId: "1:370792112485:web:d0923f39a1c4c9dce3418c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const LastIdRef = ref(db, "lastid");
async function generateId() {
  try {
    const snapshot = await get(LastIdRef);
    const CurrentId = snapshot.val() || 0;

    // Incremente o ID
    const NewId = parseInt(CurrentId) + 1;

    // Atualize o "lastid" com o novo valor
    await set(LastIdRef, NewId);

    // Retorne o novo ID
    return NewId;
  } catch (error) {
    throw error;
  }
}

export {
  db,
  ref,
  set,
  get,
  generateId,
  query,
  orderByChild,
  equalTo,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  app,
  getAuth,
  update,
  remove,
};
