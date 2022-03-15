import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import { firebaseConfig } from "../config/firebaseApp.config.js";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export { firebase };
