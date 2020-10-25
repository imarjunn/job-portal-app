import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBpLzk3nQo7-Rmb1UafR3TtSr8qKj8cMqU",
    authDomain: "job-posting-portal.firebaseapp.com",
    databaseURL: "https://job-posting-portal.firebaseio.com",
    projectId: "job-posting-portal",
    storageBucket: "job-posting-portal.appspot.com",
    messagingSenderId: "1013136614757",
    appId: "1:1013136614757:web:c94feb9ae8250f33936d8c",
    measurementId: "G-SKXZLQ4QFV"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {storage, firebase as default};