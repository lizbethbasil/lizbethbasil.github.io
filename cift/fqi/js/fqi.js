function CalculateFQI(){
    var s1  =  parseFloat(document.getElementById('select1').value);
    var s2  =  parseFloat(document.getElementById('select2').value);
    var s3  =  parseFloat(document.getElementById('select3').value);
    var s4  =  parseFloat(document.getElementById('select4').value);
    var s5  =  parseFloat(document.getElementById('select5').value);
    var s6  =  parseFloat(document.getElementById('select6').value);
    var s7  =  parseFloat(document.getElementById('select7').value);
    var s8  =  parseFloat(document.getElementById('select8').value);
    var s9  =  parseFloat(document.getElementById('select9').value);
    var s10 =  parseFloat(document.getElementById('select10').value);
    var s11 =  parseFloat(document.getElementById('select11').value);
    var s12 =  parseFloat(document.getElementById('select12').value);
    var s13 =  parseFloat(document.getElementById('select13').value);
    var s14 =  parseFloat(document.getElementById('select14').value);
    var s15 =  parseFloat(document.getElementById('select15').value);
    var s16 =  parseFloat(document.getElementById('select16').value);

    var l11 = parseFloat(s1)  /  parseFloat(3) * 0.30;
    var l12 = parseFloat(s2)  /  parseFloat(1) * 0.22;
    var l13 = parseFloat(s3)  /  parseFloat(2) * 0.13;
    var l14 = parseFloat(s4)  /  parseFloat(3) * 0.12;
    var l15 = parseFloat(s5)  /  parseFloat(2) * 0.23;
               
    var l21 = parseFloat(s6)  /  parseFloat(2) * 0.34;
    var l22 = parseFloat(s7)  /  parseFloat(2) * 0.26;
    var l23 = parseFloat(s8)  /  parseFloat(1) * 0.15;
    var l24 = parseFloat(s9)  /  parseFloat(2) * 0.25;
               
    var l31 = parseFloat(s10) /  parseFloat(2) * 0.47;
    var l32 = parseFloat(s11) /  parseFloat(2) * 0.30;
    var l33 = parseFloat(s12) /  parseFloat(3) * 0.23;
               
    var l41 = parseFloat(s13) /  parseFloat(3) * 0.42;
    var l42 = parseFloat(s14) /  parseFloat(2) * 0.58;
               
    var l51 = parseFloat(s15) /  parseFloat(2) * 0.60;
    var l52 = parseFloat(s16) /  parseFloat(3) * 0.40;
                              
    var y1 = (l11 + l12 + l13 + l14 + l15) * 0.25;
    var y2 = (l21 + l22 + l23 + l24) * 0.28;
    var y3 = (l31 + l32 + l33)  * 0.24;
    var y4 = (l41 + l42) * 0.13;
    var y5 = (l51 + l52) * 0.10;
               
    var fqi = (y1 + y2 + y3 + y4 + y5).toFixed(2);
               
    document.getElementById('result2').innerHTML = fqi;
                          
    if(fqi == 0){
        document.getElementById('result1').innerHTML="Result : &nbsp;";
        document.getElementById('info1').innerHTML="Fish Quality is &nbsp;";
        document.getElementById('info2').innerHTML="Excellent";
                   
        document.getElementById('info2').style.color='#449d44';
        document.getElementById('result2').style.color='#449d44';      
    }
    else if((fqi>0) &(fqi<=0.1)){
        document.getElementById('result1').innerHTML="Result : &nbsp;";
        document.getElementById('info1').innerHTML="Fish Quality is &nbsp;";
        document.getElementById('info2').innerHTML="Very Good";
                   
        document.getElementById('info2').style.color='#d58512';
        document.getElementById('result2').style.color='#d58512';      
    }
    else if((fqi>0.1) &(fqi<=0.40)){
        document.getElementById('result1').innerHTML="Result : &nbsp;";
        document.getElementById('info1').innerHTML="Fish Quality is &nbsp;";
        document.getElementById('info2').innerHTML="Good";
                   
        document.getElementById('info2').style.color='black';
        document.getElementById('result2').style.color='black';      
    }
    else if((fqi>0.40) &(fqi<=0.52)){
        document.getElementById('result1').innerHTML="Result : &nbsp;";
        document.getElementById('info1').innerHTML="Fish Quality is &nbsp;";
        document.getElementById('info2').innerHTML="Moderate";
                   
        document.getElementById('info2').style.color='#269abc';
        document.getElementById('result2').style.color='#269abc';      
    }
    else if((fqi>0.52) &(fqi<=0.70)){
        document.getElementById('result1').innerHTML="Result : &nbsp;";
        document.getElementById('info1').innerHTML="Fish Quality is &nbsp;";
        document.getElementById('info2').innerHTML="Moderate to Bad";
                   
        document.getElementById('info2').style.color='darkorange';
        document.getElementById('result2').style.color='darkorange';      
    }
    else if((fqi>0.70) &(fqi<=1)){
        document.getElementById('result1').innerHTML="Result : &nbsp;";
        document.getElementById('info1').innerHTML="Fish Quality is &nbsp;";
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
 
