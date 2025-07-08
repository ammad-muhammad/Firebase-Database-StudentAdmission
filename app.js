// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

import { getFirestore, addDoc, collection } from 'https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js'
const firebaseConfig = {
    apiKey: "AIzaSyAcOiO4MAP8ERhaMgyKhE8y3XwMBtaDp2I",
    authDomain: "loginsignup-authenticati-cc05b.firebaseapp.com",
    projectId: "loginsignup-authenticati-cc05b",
    storageBucket: "loginsignup-authenticati-cc05b.firebasestorage.app",
    messagingSenderId: "1065393762815",
    appId: "1:1065393762815:web:cb62e94c468d0966a577ca",
    measurementId: "G-RZKYKMSW6B"
};




// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
console.log("db conneted", db);


const form = document.getElementById("admissionForm");
const fullName = document.getElementById("fullName");
const fatherName = document.getElementById("fatherName");
const motherName = document.getElementById("motherName");
const dateOfBirth = document.getElementById("dateOfBirth");
const nic = document.getElementById("nic");
const phoneNumber = document.getElementById("phoneNumber");
const email = document.getElementById("email");
const gender = document.getElementById("gender");
const address = document.getElementById("address");
const city = document.getElementById("city");
const province = document.getElementById("province");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = {
        fullName: fullName.value,
        fatherName: fatherName.value,
        motherName: motherName.value,
        dateOfBirth: dateOfBirth.value,
        nic: nic.value,
        phoneNumber: phoneNumber.value,
        email: email.value,
        gender: gender.value,
        address: address.value,
        city: city.value,
        province: province.value,
    }
    console.log(formData);
    try {
        const docRef = await addDoc(collection(db, "StudentData"), formData);
        console.log("Document written with ID: ", docRef.id);
        form.reset();
        alert("Form submitted successfully");
    } catch (error) {
        console.error("Error adding document: ", error);
    }
})


