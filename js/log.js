<<<<<<< HEAD
firebase.auth().onAuthStateChanged(function(user) {
	var user = firebase.auth().currentUser;

	if (user != null) {
		var userEmail = user.email;
		var email_verified = user.emailVerified;
		document.getElementById('user_para').innerHTML = "Your Email is : " + userEmail 
		+"Verified :" + email_verified;  
	}
})

function logout() {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.

            window.location="../index.html";
    }).catch(function(error) {
        // An error happened.
    });
=======
firebase.auth().onAuthStateChanged(function(user) {
	var user = firebase.auth().currentUser;

	if (user != null) {
		var userEmail = user.email;
		var email_verified = user.emailVerified;
		document.getElementById('user_para').innerHTML = "Your Email is : " + userEmail 
		+"Verified :" + email_verified;  
	}
})

function logout() {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.

            window.location="../index.html";
    }).catch(function(error) {
        // An error happened.
    });
>>>>>>> 0b2111c8b258cdbbb71bc392527948aae913a30f
}