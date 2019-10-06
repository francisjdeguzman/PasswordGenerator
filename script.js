
function generatePass(){
    let complexity = document.getElementById("button").value;
    let values = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
    let password = "";
    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }
    document.getElementById("display").value = password;
}

document.getElementById("length").innerHTML = "Length: 25";


document.getElementById("button").oninput = function(){

    if(document.getElementById("button").value > 0){
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("button").value;
    }
    else{
        document.getElementById("length").innerHTML = "Length: 1";
    }
}

function copyToClipboard(){
    document.getElementById("display").select();
    document.execCommand("Copy");
    alert("Password copied to clipboard!");
}
