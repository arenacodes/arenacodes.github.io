<<<<<<< HEAD
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("nn").style.display = "none";
    document.getElementById("sec").style.display = "none";

    document.write("You will be redirected to user.");
              setTimeout('Redirect()', 500);

    window.location="account/user.html";

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

        window.location="account/user.html";
    }).catch(function (error) {
       //this will handle error
        var errorMessage=error.message;
        alert(errorMessage);
    });
}
=======
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("nn").style.display = "none";
    document.getElementById("sec").style.display = "none";

    document.write("You will be redirected to user.");
              setTimeout('Redirect()', 500);

    window.location="account/user.html";

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

        window.location="account/user.html";
    }).catch(function (error) {
       //this will handle error
        var errorMessage=error.message;
        alert(errorMessage);
    });
}
>>>>>>> 0b2111c8b258cdbbb71bc392527948aae913a30f
