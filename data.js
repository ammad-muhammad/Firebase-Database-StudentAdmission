// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

import { getFirestore, addDoc, collection, getDocs } from 'https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js'
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


async function showData() {
    const querySnapshot = await getDocs(collection(db, "StudentData"));
    console.log(querySnapshot);
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
    });
    const tbody = document.querySelector("tbody");
    querySnapshot.forEach((doc) => {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${doc.data().fullName}</td>
        <td>${doc.data().fatherName}</td>
        <td>${doc.data().motherName}</td>
        <td>${doc.data().dateOfBirth}</td>
        <td>${doc.data().nic}</td>
        <td>${doc.data().phoneNumber}</td>
        <td>${doc.data().email}</td>
        <td>${doc.data().gender}</td>
        <td>${doc.data().address}</td>
        <td>${doc.data().city}</td>
        <td>${doc.data().province}</td>
        `;
        tbody.appendChild(row);
    });
}

showData();