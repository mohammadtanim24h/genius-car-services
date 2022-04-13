import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAveugL2e1BFVm_IIyvFmVHWC9Fe7oqPDQ",
  authDomain: "genius-car-services-99fc4.firebaseapp.com",
  projectId: "genius-car-services-99fc4",
  storageBucket: "genius-car-services-99fc4.appspot.com",
  messagingSenderId: "553560908435",
  appId: "1:553560908435:web:463a01db37a9253f27e366"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;