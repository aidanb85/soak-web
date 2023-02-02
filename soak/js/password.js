function password() {
    var confirmPassword = "gangshit";
    var password = document.getElementById("pw").value;
    if (password == confirmPassword) {
        window.location="index.html";
    }
    else{
        alert("Passwords do not match.");
    }
}