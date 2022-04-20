function validateLogin(redirect){    
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value

    if((username=="admin") && (password=="12345"))
      redirect("index.html")
    else{
      document.getElementById("status").innerHTML = "Please enter a valid username and password"
      document.getElementById("status").style.color = "red"
    }
}

function redirect(url){
    location.replace(url)
}