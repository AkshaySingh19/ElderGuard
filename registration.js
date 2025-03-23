const firebaseConfig = {
    apiKey: "AIzaSyC_KYub-19ri6TJi3jK8abnTn0Qkc4GvTc",
    authDomain: "elderguard-21369.firebaseapp.com",
    databaseURL: "https://elderguard-21369-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "elderguard-21369",
    storageBucket: "elderguard-21369.firebasestorage.app",
    messagingSenderId: "201757709021",
    appId: "1:201757709021:web:576a8f9aead45cb16c4134",
    measurementId: "G-Z4E77KYKTL"
  };
// this is js code for register button
const button1=document.getElementById('btn');
button1.addEventListener("click", openDashboard);

function openDashboard(){
    window.location.href="dashboard.html";
}

// document.getElementById('loginbtn').addEventListener("click", function(event) {
//     event.preventDefault(); // Prevent the default link behavior
//     window.location.href = "login.htm"; // Redirect to login page in the same tab
// });

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginbtn").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default anchor link behavior
        window.location.href = "login.htm"; // Redirect to login page in the same tab
    });
});
