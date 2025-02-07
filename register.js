import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBzo4QhicibrsT1V7K8UYA0aWMQz3gIRWU",
    authDomain: "kaiyin-kalaigal.firebaseapp.com",
    projectId: "kaiyin-kalaigal",
    storageBucket: "kaiyin-kalaigal.firebasestorage.app",
    messagingSenderId: "567247645323",
    appId: "1:567247645323:web:1950c6b54fee6d1ce4828e",
    measurementId: "G-B25MHWH7MP"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

document.addEventListener('DOMContentLoaded', function() {
    const submit = document.getElementById("asub");

    submit.addEventListener("click", function(event) {
        const email = document.getElementById("aemail").value;
        const password = document.getElementById("apassword").value;

        alert("Email: " + email + "\nPassword: " + password);
    });
});