alert("ให้ระบาย3พยางค์");
function postinfo() { 
    
    var text1 = document.getElementById("Text1").value
    if (topic1 == 0) {
        document.getElementById("Topic1").innerHTML = text1
        topic1 = text1
        alert("เหนื่อยก็พักไม่รักก้พอ");
    }
    else if (comment1 == 0) {
        document.getElementById("Comment1").innerHTML = text1
        comment1 = text1
       alert("เข้าใจบ่");
    }
    else if (comment2 == 0) {
        document.getElementById("Comment2").innerHTML = text1
        comment2 = text1
        alert("บะบั๋ย");
    }
}

function clearinfo() { 
    alert("Delete");
    topic1 = 0;
    comment1 = 0;
    comment2 = 0;
    document.getElementById("Topic1").innerHTML = "";
    document.getElementById("Comment1").innerHTML = "";
    document.getElementById("Comment2").innerHTML = "";
    document.getElementById("Text1").value = "";
}
var topic1   = document.getElementById("Topic1");
var comment1 = document.getElementById("Comment1");
var comment2 = document.getElementById("Comment2");
    topic1 = 0;
    comment1 = 0;
    comment2 = 0;


//*function changeImage() { 
  //  var pokeballImg = document.getElementById("img01"); 
    //pokeballImg.src = "pic/pikachu.png"; 
//}
// var link = document.getElementById("tw-link");
// link.innerHTML = "twitter";

// window.onload = twitterLink;
// function twitterLink(){
//     var link = document.getElementById("tw-link");
//     link.innerHTML = "twitter";
// }