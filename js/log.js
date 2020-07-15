

function logout() {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        sessionStorage.clear()
        window.location="index.html";
    }).catch(function(error) {
        // An error happened.
    });
}