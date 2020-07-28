<<<<<<< HEAD
function log() {
	firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.write("You will be redirected to user.");
              setTimeout('Redirect()', 500);

    window.location="account/user.html";

  } else {
    // No user is signed in.

    window.location="login.html";

  }
});
=======
function log() {
	firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.write("You will be redirected to user.");
              setTimeout('Redirect()', 500);

    window.location="account/user.html";

  } else {
    // No user is signed in.

    window.location="login.html";

  }
});
>>>>>>> 0b2111c8b258cdbbb71bc392527948aae913a30f
}