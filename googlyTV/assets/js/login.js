function validateForm(){
  var x = document.forms["googlytv_form"]["email"].value;
  var atpos = x.indexof("@");
  var dotpos = x.lastindexof(".");
  if (x = "" || atpos<1 || dotpos<atpos+2 || dotpos+2>x.length) {
    alert("Nor a valid E-mail");
    return false;
  }
}
