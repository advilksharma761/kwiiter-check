
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDQOqrhtpmj0jAf9f8tXk7sXXncswF6tuQ",
      authDomain: "kwitter-f2944.firebaseapp.com",
      databaseURL: "https://kwitter-f2944-default-rtdb.firebaseio.com",
      projectId: "kwitter-f2944",
      storageBucket: "kwitter-f2944.appspot.com",
      messagingSenderId: "797084161753",
      appId: "1:797084161753:web:11e22eb8bdbf89fdd250c8"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("User_name");
    document.getElementById("user_name").innerHTML="welcome "+user_name;
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("roomname- "+Room_names);
var row="<div class'room_name' id="+Room_names+"onclick='redirectToRoomNames(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();




function addRoom(){
Room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(Room_name).update({
purpose : "adding room name"
});
localStorage.setItem("room_name",Room_name);
window.location="kwitter_page.html";

}


function redirectToRoomNames(name){
console.log(name);
localStorage.setItem("room_name",name),
window.location="kwitter_page.html";
}

function logout(){
localStorage.removeItem("User_name");
localStorage.removeItem("Room_name");
window.location="index.html";
}