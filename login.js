function login()
{
    var email = localStorage.getItem("email");
    var password = localStorage.getItem("password")

    var MyLoginEmail = document.getElementById("loginemail").value;
    var MyLoginPassword = document.getElementById("loginpassword").value;

    if(email == MyLoginEmail && password == MyLoginPassword)
    {
        alert("Login Successfully");
        // window.location("index.html")
        window.open("fetch.html")
    }
    
    else{
        alert("Invalid Login Credentials");
    }
}

