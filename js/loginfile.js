firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.write("You will be redirected to main page in 10 sec.");
              setTimeout('Redirect()', 1);

    window.location="user.html";

  } else {
    // No user is signed in.

    window.location="#";

  }
});


function loginUser() {
    var email=document.getElementById("u_email").value;
    var password=document.getElementById("u_password").value;

    //firebase have pre built login function
    //it takes two parameters first email and second is password

    firebase.auth().signInWithEmailAndPassword(email,password).then(function () {
        //this function works when login successfully

        window.location="user.html";
    }).catch(function (error) {
       //this will handle error
        var errorMessage=error.message;
        alert(errorMessage);
    });
}
