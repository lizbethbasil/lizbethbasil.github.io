var xhttp = new XMLHttpRequest()
xhttp.onreadystatechange = function (){
    if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText)
        var output = ""
        for(i=0;i<data.length;i++){
            output += '<div class="form-check my-4"><input class="form-check-input" type="checkbox" id="checkBox" onclick="displayMessage()"><label class="form-check-label" for="flexCheckDefault">' + data[i].title + '</label></div>'
        }
        document.getElementById("load-data").innerHTML = output
    }}
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true)
    xhttp.send()