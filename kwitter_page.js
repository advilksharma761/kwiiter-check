//YOUR FIREBASE LINKS
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
    room_name=localStorage.getItem("room_name");


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name1=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>"+name1+"<img class='user_tick' src='tick.png'></h4>  ";

message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+"onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon gliphicon-thumbs-up'>Like : "+like+"</span></button><hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;

//End code
      } });  }); }
getData();

function logout(){
localStorage.removeItem("User_name");
localStorage.removeItem("Room_name");
window.location="index.html";
}
function send(){
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});
document.getElementById("msg").value="";
}
function updateLike(message_id){
console.log(message_id);
button_id=message_id;
likes=document.getElementById(button_id).value;
updated_Likes=Number(likes)+1;
console.log(updated_Likes);

firebase.database().ref(room_name).child(message_id).update({
like : updated_Likes

});
}





