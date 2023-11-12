function validation(){
    if(document.Formfill.Username.value=="")
    {
        document.getElementById("result").innerHTML="Enter Username*";
        return false;
    }
    else if(document.Formfill.Username.value.length<6)
    {
        document.getElementById("result").innerHTML="Atleast 6 characters!*";
        return false;
    }
    else if(document.Formfill.email.value=="")
    {
        document.getElementById("result").innerHTML="Enter your email!*";
        return false;
    }
    else if(document.Formfill.password.value=="")
    {
        document.getElementById("result").innerHTML="Enter your password!*";
        return false;
    }
    else if(document.Formfill.cpassword.value=="")
    {
        document.getElementById("result").innerHTML="confirm your password!*";
        return false;
    }
    else if(document.Formfill.password.value!==document.Formfill.cpassword.value)
    {
        document.getElementById("result").innerHTML="password is not matched!*";
        return false;
    }
    else if(document.Formfill.password.value==document.Formfill.cpassword.value)
    {
        popup.classList.add("open-slide")
        return false;
    }
}
var popup=document.getElementById("Popup");
function CloseSlide(){
    popup.classList.remove("open-slide");
}