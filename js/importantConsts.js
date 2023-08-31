import { allWeakness } from "./database/database.js";

export const principalColor = `rgba(var(--${localStorage.getItem(
  "principalColor"
)}))`;
export const RandomTypeColor = allWeakness[Math.floor(Math.random() * 18)].name;
export const selectedPage = new URL(window.location);
