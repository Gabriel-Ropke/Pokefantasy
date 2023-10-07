import { ref, db } from "./firebase.js";
export const userRef = ref(
  db,
  "users/" + parseInt(localStorage.getItem("activeUser"))
);
