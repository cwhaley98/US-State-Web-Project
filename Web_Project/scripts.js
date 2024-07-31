/* Place your JavaScript in this file */
function confirmemail() {
    var email = document.getElementById("email").value
    var confemail = document.getElementById("confemail").value
    if(email != confemail) {
        alert('Emails do not match!');
    }
    else {
        alert('Emails match!');
    }
}