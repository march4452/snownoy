// URL parameter
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const Ruser = urlParams.get('username')
const Rpass = urlParams.get('password1')

window.onload = pageLoad;
function pageLoad(){
	var loginform = document.getElementById("myLogin");
    loginform.onsubmit = ChekLogin;
}

function ChekLogin() {
    var User = document.forms["myLogin"]["username"].value;
    var Pass = document.forms["myLogin"]["password"].value;

    if (User != Ruser) {
        alert("ชื่อผู้ใช้ไม่ถูกต้อง");
        return false;
    }
    else if (Pass != Rpass) {
        alert("รหัสไม่ถูกต้อง");
        return false;
    }
    else if (User == Ruser && Pass == Rpass) {
        alert("สำเร็จ");
    }
}