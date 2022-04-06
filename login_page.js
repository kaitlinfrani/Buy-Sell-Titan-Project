const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

// When the login button is clicked, the following code is executed
loginButton.addEventListener("click", (e) => {
    // Prevent the default submission of the form
    e.preventDefault();
    // Get the values input by the user in the form fields
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    user_email = "@csu.fullerton.edu";

    if (username.includes(user_email)) {
        // If the credentials are valid, show an alert box and reload the page
        alert("You have successfully logged in.");
        location.reload();
        
        // Next step: Lead user to shop
        //window.location = "https://google.com";

    } 
    else {
        // Otherwise, make the login error message show (change its oppacity)
        loginErrorMsg.style.opacity = 1;
    }
})

function form2(){
    
    var signup_username=document.forms["signupform"]["signup_username"].value;
	var signup_useremail=document.forms["signupform"]["signup_useremail"].value;
	var signup_pwd=document.forms["signupform"]["signup_pwd"].value;
	var repwd=document.forms["signupform"]["repwd"].value;
	 
	if(signup_username==null || signup_username=="" ){
                  document.getElementById("errorbox").innerHTML = "Enter the User Name";
                 return false;
        }

        if(signup_useremail==null || signup_useremail==""){
                  document.getElementById("errorbox").innerHTML =
                   "Enter the E-mail";
                 return false;
        }

        if(signup_pwd==null || signup_pwd==""){
                  document.getElementById("errorbox").innerHTML =
                   "Enter the Password";
                 return false;
        }

        if(repwd==null || repwd==""){
                  document.getElementById("errorbox").innerHTML =
                   "Enter the Retype Password";
                 return false;
             }

 		if(signup_pwd != repwd){
                  document.getElementById("errorbox").innerHTML = "Password Don't Match";
                 return false;
             }

        if(signup_useremail.includes(user_email)) {
            alert("Good!");
        }
        

        if (signup_username != '' && signup_useremail != '' && signup_pwd != '' && repwd != '' && signup_pwd == repwd)


          alert("Register/Signup Successfull");
                         

}