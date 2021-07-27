function ticketPage(){
    var user = document.getElementById("userName").value;
    var password = document.getElementById("password").value;
    if(user=="admin" && password=="test") 
    {
        alert("Welcome Back " + user);
        window.open("ticket.html", "_self")
        return false;
    } 
    else{
        swal("Login gagal", "username atau password salah", "warning")
    }
}