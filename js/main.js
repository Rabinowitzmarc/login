//users names and passwords
var userLogin = [
  {
    user : "Joe Dirt",
    pass : "password1"
  },
  {
    user : "Joe Sand",
    pass : "password2"
  },
  {
    user : "Joe Mud",
    pass : "password3"
  },
];

var btn = document.getElementById("password");
    btn.addEventListener("keypress", function enterKey(e) {
    if (e.keyCode == 13) {
        logMeIn();
    }
},false);


// HTML line #33 is the trigger that searches for correct username and password values
function logMeIn() {
//stores variable username
  var username = document.getElementById('username').value
//stores variable password
  var password = document.getElementById('password').value
//stores variable results
  var results = document.getElementById('results')


//Loop that seachres for a matching username and password. Checks to see if both equal to each other...
  for (var i = 0; i < userLogin.length; i++) {
    if (username === userLogin[i].user && password=== userLogin[i].pass) {
// if username and password match concole log users information
      console.log(userLogin[i]);
//if username and password match show up in console
      console.log("User is logged in as " + username);
//if username and password match, Display results below login button with green background
      results.className = "success"
      results.textContent = "Welcome to Codify Academy " + username + "!";
      return;
    };
  };
//if username and password do not match, Display results below login button with red background
  console.log("Incorrect Password")
  results.className = "failure"
  results.textContent = "Incorrect Username, " + username + " Please try again!";
};
