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

//Allows the user to press the enter key to login
var btn = document.getElementById("password");
    btn.addEventListener("keypress", function enterKey(e) {
    if (e.keyCode == 13) {
        logMeIn();
    }
},false);

//Allows the user to press the enter key to register as a new user
var btn = document.getElementById("registerPassword");
    btn.addEventListener("keypress", function enterKey(e) {
    if (e.keyCode == 13) {
        registerMe();
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

// HTML line #45 is the onclick that registers new users
function registerMe() {
  //stores variable for new users names
  var registerUser = document.getElementById('registerUser').value
  //stores variable for new users passwords
  var registerPassword = document.getElementById('registerPassword').value
  //stores variable so that registerUser and registerPassword can be used as an object for userLogin
  var newUser = {
    user: registerUser,
    pass: registerPassword
  };
//Loop for searching if users names already exsist. Also, wont let users create a password with less than 8 characters
  for (var i = 0; i < userLogin.length; i++) {
        if (registerUser == userLogin[i].user) {
          alert ("That username is already in use, please choose another login!")
          return;
        } else if (registerPassword.length < 8) {
          alert ("Password must be longer than 8 characters")
          return;
        };
  };
//Adds new user to the object userLogin
  userLogin.push(newUser)
  console.log(userLogin);
};
