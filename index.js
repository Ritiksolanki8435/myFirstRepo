


  

   document.getElementById("myform").addEventListener('submit',(e)=>{
    e.preventDefault()
    var passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,15}$/ ;
    var MyEmail = document.getElementById("email").value;
    var MyPassword= document.getElementById("pass").value;
    var Cpass = document.getElementById("cpass").value;


    if(passwordReg.test(MyPassword)){
        document.getElementById("messages").innerHTML = ""
    }
    else{
        document.getElementById("messages").innerHTML = " Password length must be between 8 and 15 and contain atleast One Upper case ,one lower case and one Special Character"
        return false;        
    }
    if(MyPassword != Cpass)
    {
        document.getElementById("mess2").innerHTML = "Password Mismatched";
        return false;
    }
localStorage.setItem("email" , MyEmail);
localStorage.setItem("password" , MyPassword);
window.alert("Registration Successful");
window.location = "login.html"
   }
   )
  

  
