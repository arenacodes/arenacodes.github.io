var database = firebase.database();



user.sendEmailVerification().then(function() {
  // Email sent.
}).catch(function(error) {
  // An error happened.
});

function createUser() {
    var database = firebase.database();

    var user = firebase.auth().currentUser;


    var userName=document.getElementById("userName").value;
    var email=document.getElementById("userEmail").value;
    var password=document.getElementById("userPassword").value;
    var confirmPassword=document.getElementById("confirmPassword").value;

    console.log(password);
    console.log(confirmPassword);
    //validate that both passwords are same
    if(password==confirmPassword)
    {
        
        //Here we will write create Account code
        //firebase has its own built in create account method
        //lets start
        //it takes two param first one email and second is password
        firebase.auth().createUserWithEmailAndPassword(email,password).then(
            function () {

            	firebase.database().ref('user/'+name).set({
                     userName: userName,
                     userPassword: userPassword,
                     userEmail: userEmail
                     });
                //this function executes when account is successfully created
                window.location="index.html";

        }).catch(function (error) {
           //this function handles errors
            var errorMessage=error.message;
            alert(errorMessage);
        });

    }
    else
    {
        //alert when password did not matches
        alert("password does not matches");

    }

}