function validation() {
  if (document.Formfill.Username.value == "") {
    document.getElementById("result").innerHTML = "Enter Username*";
    return false;
  } else if (document.Formfill.Username.value.length < 6) {
    document.getElementById("result").innerHTML = "Atleast 6 characters!*";
    return false;
  } else if (document.Formfill.password.value == "") {
    document.getElementById("result").innerHTML = "Enter your password!*";
    return false;
  }
}
