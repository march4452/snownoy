window.onload = pageLoad;
function pageLoad(){
	var form = document.getElementById("myForm");
 	form.onsubmit = validateForm;
}

function validateForm() {
    var pass = document.forms["myForm"]["password1"].value;
    var repass = document.forms["myForm"]["password2"].value;
    var error = document.getElementById("errormsg");
    if (pass != repass) {
        error.innerHTML = "ใส่อะไรผิดรึป่าววว";
        return false;
    }
}
