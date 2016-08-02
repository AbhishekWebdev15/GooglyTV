function validateForm() {
  var x = document.forms["regForm"]["email"].value;
  var atpos = x.indexOf("@");
  var dotpos = x.lastIndexOf(".");
  if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
    $("#email_invalid").css('display', 'block');
    return false;
  }

  var pass = document.forms["regForm"]["password"].value;
  var rePass = document.forms["regForm"]["retype"].value;

  if (pass !== rePass) {
    $("#password_invalid").css('display', 'block');
    return false;
  }

  re = /[0-9]/;
  if(!re.test(regForm.password.value)) {
    alert("Error: password must contain at least one number (0-9)!");
    regForm.password.focus();
    return false;
  }
  re = /[a-z]/;
  if(!re.test(regForm.password.value)) {
    alert("Error: password must contain at least one lowercase letter (a-z)!");
    regForm.password.focus();
    return false;
  }
  re = /[A-Z]/;
  if(!re.test(regForm.password.value)) {
    alert("Error: password must contain at least one uppercase letter (A-Z)!");
    regForm.password.focus();
    return false;
  }
}