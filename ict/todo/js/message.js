function displayMessage(){  
    var promise = new Promise(function(resolve){
        var loadData = document.getElementById("load-data")
        var checkBox = loadData.getElementsByTagName("input");
        count = 0
    
        for (var i = 0; i < checkBox.length; i++){
            if (checkBox[i].checked) 
                count++;
        }
        if (count == 5){
            resolve("Congrats!! 5 Tasks have been Successfully Completed!")
        }            
    })

    promise.then(function(s){
        alert(s)
    })
};