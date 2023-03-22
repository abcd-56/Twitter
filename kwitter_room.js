const firebaseConfig = {
    apiKey: "AIzaSyA5lSqLXxyNC40n7ltmKwO2YcEdp25YMFY",
    authDomain: "twitter-b323f.firebaseapp.com",
    databaseURL: "https://twitter-b323f-default-rtdb.firebaseio.com",
    projectId: "twitter-b323f",
    storageBucket: "twitter-b323f.appspot.com",
    messagingSenderId: "246241347744",
    appId: "1:246241347744:web:24d12a5510d0db9978e1c5"
  };

firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       //start code
       console.log("Room Name -" + Room_names);
       row = "<div class = 'room_name' id =" +Room_names+ "onclick = 'redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML += row; 
       //end code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
  
    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}

