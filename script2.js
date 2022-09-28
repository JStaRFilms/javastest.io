// var database = [
//     {
//         username: "john",
//         password: "superyam"
//     },
//     {
//         username: "blessing",
//         password: "123"
//     },
//     {
//         username: "ibrahim",
//         password: "tunji"
//     }
// ];

// var newsfeed = [
//     {
//         username: "Bobby",
//         timeline: "So tired from all that learning!"
//     },
//     {
//         username: "Sally",
//         timeline: "Javascript is soooo cool!"
//     },
//     {
//         username: "Mitchael",
//         timeline: "Javascript is kinda fun!"
//     }
// ];

// function isUserValid(username, password) {
//     for (var i=0; i < database.length; i++) {
//         if (database[i].username === username && database[i].password === password) {return true;
//         }
//     }
//     return false;
// }

// function signIn(username, password) {
//     if (isUserValid(username, password)) {
//     console.log(newsfeed);
//     } else {
//         alert("sorry, wrong username and password");
//     }
// }



// var userNamePrompt = prompt("What\'s your username?");
// var passwordPrompt = prompt("What\'s your password");

// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("click", function() {
//     console.log("CLICK!!!!");
// })

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

button.addEventListener("click", function() {
    if (input.value.lenght = > 0) {
        var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    } 
})