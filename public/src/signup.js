//In this js file, swal is a keyword in sweetalert.js used instead of alert keyword.

//reseting the browser storage value
let proceedFromHomeButtonOnly = false;
sessionStorage.setItem('proceedFromHomeButtonOnly', proceedFromHomeButtonOnly);

let faceVerified = false;
sessionStorage.setItem('faceVerified', faceVerified);

let payFromFacePageOnly = false;
sessionStorage.setItem('payFromFacePageOnly', payFromFacePageOnly);

// if already logged in avoid signup
let currentUser = null;
let keepLoggedIn = localStorage.getItem("keepLoggedIn"); 
function getUserName() {
    if (keepLoggedIn == "yes") {
        currentUser = JSON.parse(localStorage.getItem('user'));
    } else {
        currentUser = JSON.parse(sessionStorage.getItem('user'));
    }
}
getUserName();
if (currentUser) {
    swal("Already Logged In!", "Log Out first to continue.", "warning").then(function() {
        window.location.replace('../index.html');
    });
}


//-----------------------------------------Firebase--------------------------------------------//
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-analytics.js";

// const firebaseConfig = {
//     apiKey: "AIzaSyC_xmkI67ZokC5S3bs_I4Wn1ZHL9qbsy6E",
//     authDomain: "facepay-b93d2.firebaseapp.com",
//     projectId: "facepay-b93d2",
//     storageBucket: "facepay-b93d2.appspot.com",
//     messagingSenderId: "894989632635",
//     appId: "1:894989632635:web:a14b1f884f00e60bd20ede",
//     measurementId: "G-GPV0QHPX2T"
// };

const firebaseConfig = {
    apiKey: "AIzaSyDK9m40BJhgtW_8X2Zh9-ZRCf6I28lXOMY",
    authDomain: "snapay-user.firebaseapp.com",
    databaseURL: "https://snapay-user-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "snapay-user",
    storageBucket: "snapay-user.appspot.com",
    messagingSenderId: "880786596429",
    appId: "1:880786596429:web:8a6bed05934b4e06af7204",
    measurementId: "G-CGC5M954GX"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getDatabase, ref, get, child, set } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";

const db = getDatabase();

//-----------------------------------------The References--------------------------------------------//
const name = document.getElementById('nameInp');
const email = document.getElementById('emailInp');
const aadhar = document.getElementById('aadharInp');
const username = document.getElementById('userInp');
const phone = document.getElementById('phoneInp');
const pass = document.getElementById('passInp');
const submit = document.getElementById('sub_btn');

//-----------------------------------------VALIDATION-----------------------------------------------//
function isEmptyOrSpaces(str) {
    return str == null || str.match(/^ *$/) != null;
}

function Validation() {
    let nameregex = /^[a-zA-Z\s]+$/;
    let emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let userregex = /^[a-zA-Z0-9]{3,}$/;
    let phoneregex = /^(\+\d{1,3}[- ]?)?[0]?\d{10}$/;
    
    if (isEmptyOrSpaces(name.value) || isEmptyOrSpaces(email.value) || isEmptyOrSpaces(username.value) || isEmptyOrSpaces(phone.value) || isEmptyOrSpaces(pass.value)) {
        swal("", "Fill in all the fields!", "error");
        return false;
    }

    if (!nameregex.test(name.value)) {
        swal("", "Name must only contain alphabets!", "error");
        return false;
    }

    if (!emailregex.test(email.value)) {
        swal("", "Enter a valid email!", "error");
        return false;
    } 

    if (!userregex.test(username.value)) {
        swal("", "Username must be alphanumeric.\n-Username must be atleast of 3 characters.\n-Username must not contain spaces.", "error");
        return false;
    }

    if (!phoneregex.test(phone.value)) {
        swal("", "Enter a valid phone number!", "error");
        return false;
    }

    return true; 
}

//----------------------------------REGISTER USER TO FIREBASE--------------------------------------//

function RegisterUser() {
    if (!Validation()) {
        return;
    };

    const dbRef = ref(db);

    // replacing dot(.) from the email to avoid error,
    // Uncaught Error: child failed: path argument was an invalid path = "UsersList/user@email.com". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]".
    let emailString = email.value;
    emailString = emailString.replaceAll('.', '');
    emailString = emailString.replaceAll('#', '');
    emailString = emailString.replaceAll('$', '');
    emailString = emailString.replaceAll('[', '');
    emailString = emailString.replaceAll(']', '');

    get(child(dbRef, "UsersList/" + emailString)).then((user) => {
        if (user.exists()) swal("", "Account already exists!", "warning");
        else {
            set(ref(db, "UsersList/" + emailString), {
                fullname: name.value,
                username: username.value,
                email: email.value,
                aadhar:aadhar.value,
                phone: phone.value,
                profileImgURL: "null",
                password: encPass(),
            })
            .then(() => {
                swal("User added successfully!", "Please Log In to proceed.", "success").then(function() {
                    window.location.replace("./login.html");
                });
            })
            .catch((error) => {
                swal("Error!", `${error}`, "error");
            })
        }
    });
}

//------------------------------------ENCRYPTION-----------------------------------------------//
function encPass() {
    let pass12 = CryptoJS.AES.encrypt(pass.value, pass.value); 
    return pass12.toString();
}            

//------------------------------------ASSIGN THE EVENTS-----------------------------------------//
submit.addEventListener('click', RegisterUser);
