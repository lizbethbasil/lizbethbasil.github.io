function CalculateSQI(){
    var s1  =   document.getElementById('select1').value;
    var s2  =   document.getElementById('select2').value;
    var s3  =   document.getElementById('select3').value;
    var s4  =   document.getElementById('select4').value;
    var s5  =   document.getElementById('select5').value;
    var s6  =   document.getElementById('select6').value;
                                           
    var r1 = (parseFloat(s1) / parseFloat(3)) * 0.26;
    var r2 = (parseFloat(s2) / parseFloat(2)) * 0.16;
    var r3 = (parseFloat(s3) / parseFloat(2)) * 0.12;
    var r4 = (parseFloat(s4) / parseFloat(2)) * 0.12;
    var r5 = (parseFloat(s5) / parseFloat(3)) * 0.14;
    var r6 = (parseFloat(s6) / parseFloat(3)) * 0.20;                        

    var sqi = (r1+r2+r3+r4+r5+r6).toFixed(2);
    
    document.getElementById('result2').innerHTML = sqi;
               
    if (sqi == 0){
        document.getElementById('result1').innerHTML="Result : &nbsp;";
        document.getElementById('info1').innerHTML="Shrimp Quality is &nbsp;";
        document.getElementById('info2').innerHTML="Excellent";
        
        document.getElementById('info2').style.color='#449d44';
        document.getElementById('result2').style.color='#449d44';      
    }
    else if((sqi>0) &(sqi<=0.08)){
        document.getElementById('result1').innerHTML="Result : &nbsp;";
        document.getElementById('info1').innerHTML="Shrimp Quality is &nbsp;";
        document.getElementById('info2').innerHTML="Very Good";

        document.getElementById('info1').style.color='black';        
        document.getElementById('info2').style.color='#d58512';
        document.getElementById('result2').style.color='#d58512';
    }
    else if((sqi>0.08) &(sqi<=0.21)){
        document.getElementById('result1').innerHTML="Result : &nbsp;";
        document.getElementById('info1').innerHTML="Shrimp Quality is &nbsp;";
        document.getElementById('info2').innerHTML="Good";

        document.getElementById('info2').style.color='black';
        document.getElementById('result2').style.color='black';
    }
    else if((sqi>0.21) &(sqi<=0.32)){
        document.getElementById('result1').innerHTML="Result : &nbsp;";
        document.getElementById('info1').innerHTML="Shrimp Quality is &nbsp;";
        document.getElementById('info2').innerHTML="Moderate";
        
        document.getElementById('info2').style.color='#269abc';
        document.getElementById('result2').style.color='#269abc';
    }
    else if((sqi>0.32) &(sqi<=0.47)){
        document.getElementById('result1').innerHTML="Result : &nbsp;";
        document.getElementById('info1').innerHTML="Shrimp Quality is &nbsp;";
        document.getElementById('info2').innerHTML="Moderate to Bad"; 
        
        document.getElementById('info2').style.color='darkorange';
        document.getElementById('result2').style.color='darkorange';
    }
    else if((sqi>0.47) &(sqi<=1)){
        document.getElementById('result1').innerHTML="Result : &nbsp;";
        document.getElementById('info1').innerHTML="Shrimp Quality is &nbsp;";
        document.getElementById('info2').innerHTML="Bad to Worse";
        
        document.getElementById('info2').style.color='red';
        document.getElementById('result2').style.color='red';
    }
    else{
        document.getElementById('result2').innerHTML="Choose Correct Value From Field";
        document.getElementById('info2').innerHTML="Select Proper Value";
        
        document.getElementById('info2').style.color='red';
        document.getElementById('result2').style.color='red';
    }
}    