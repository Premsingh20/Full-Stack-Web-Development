// Hello World in Nodejs

console.log(this)

// && ||

let isLoggedIn = true;
let cardDetails = false;

console.log("Allow purchase: ", isLoggedIn && cardDetails);

let githubLogin = false;
let gmailLogin = true;
let twitterLogin = false;

console.log("Allow user to login: ", githubLogin || gmailLogin || twitterLogin);

// Conditionals

// if, else, else if nested if else

let age = 20;

if (age >= 18) {
    console.log("You can vote in election");
}

let userDetails;

// userDetails = complexFunctionTogetDetailsfromserver();
console.log(userDetails);

// null and undefined

if (userDetails) {
    console.log("user is logged in");
} else {
    console.log("Please login first");
}

if(userDetails) {
    console.log("Logout");
} else {
    console.log("Login/Signup");
}

// traffic light example

let trafficLight = "green";

if (trafficLight === "red") {
    console.log("Stop! you have to wait");
} else if (trafficLight === "yellow") {
    console.log("Slow down");
} else if (trafficLight === "green") {
    console.log("You can go now");
} else {
    console.log("Signal was broken, save youself");
}

let role = "user"

switch (role) {
    case "user":
        console.log("You are a normal visitor of website");
        break;
    case "admin":
        console.log("You can do anything on website");
        break;
    case "faculty":
        console.log("You can creat/delete lectures");
        break;
    case "ta":
        console.log("You can upload lecture");
        break;
    default:
        break;
}

// Turnerry Operator

let isUserLogginIn = true;

isUserLogginIn ? console.log("when value is true") : console.log("when value is false");
