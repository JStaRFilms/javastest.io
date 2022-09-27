var database = [
    {
        username: "john",
        password: "superyam"
    },
    {
        username: "blessing",
        password: "123"
    },
    {
        username: "ibrahim",
        password: "tunji"
    }
];

var newsfeed = [
    {
        username: "Bobby",
        timeline: "So tired from all that learning!"
    },
    {
        username: "Sally",
        timeline: "Javascript is soooo cool!"
    },
    {
        username: "Mitchael",
        timeline: "Javascript is kinda fun!"
    }
];

function signIn(username, password) {
    if (username === database[0].username && password === database[0].password){
    console.log(newsfeed);
    } else {
        alert("sorry, wrong username and password");
    }
}

var userNamePrompt = prompt("What\'s your username?");
var passwordPrompt = prompt("What\'s your password");

signIn(userNamePrompt, passwordPrompt);