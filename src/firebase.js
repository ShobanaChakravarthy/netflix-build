import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDIk5ZmCj3cuxfOktDeLFhmyJH0chhtemc",
    authDomain: "netflix-build-67943.firebaseapp.com",
    projectId: "netflix-build-67943",
    storageBucket: "netflix-build-67943.appspot.com",
    messagingSenderId: "237758306117",
    appId: "1:237758306117:web:7a65da98ead1538a59102c",
    measurementId: "G-RKJQH3V04W"
});
// the firebaseApp which we initialized above, using that we can use it get firestore which will have all the data
// we are storing it in a variable called db and we are exporting it

const db=firebaseApp.firestore();
const auth=firebaseApp.auth();
export {auth};
export default db;