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
}