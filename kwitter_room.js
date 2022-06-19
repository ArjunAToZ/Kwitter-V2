// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBD8pB61xTu17gwMSOnz_QQeMjk1T7JJhg",
  authDomain: "kwitt-44504.firebaseapp.com",
  projectId: "kwitt-44504",
  storageBucket: "kwitt-44504.appspot.com",
  messagingSenderId: "407898694572",
  appId: "1:407898694572:web:ab2d83b032ee2959f45009"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function addRoom()
{
    room_name = document.getElementById("room_name").Value
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code

//End code
});});}
getData();
function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
    

function getData()
 {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML;
Room_names = childKey;
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +'</div><hr>';
document.getElementById("output").innerHTML += row;

});});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
    
}
function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}

