function sign(){
    var p=document.getElementById('email').value;
    var card=document.getElementById('pass').value;
    var d=document.getElementById('pass1').value;
    var p1=p.includes('@');
    if(p1==true && card.length>=8 && card==d){
        location.assign("main2.html");
    }
    else{
        if(p1==false &&(card.length<8 && d.length<8)){
            alert("Enter Correct Details!All details are incorrect");
        }
       
        else if(card.length<8 || d.length<8){
            alert("PassWord Lenght must be max 8");
        }
        else if(p1==false){
            alert("Missing '@' in Email");
        }
        else{
            alert("Password did not match");
        }
       
        }

    }


    function log(){
        var p=document.getElementById('email1').value;
        var card=document.getElementById('pass2').value;
        var p1=p.includes('@');
        if(p1==true && card.length>=8 ){
            location.assign("main2.html");
        }
        else{
            if(p1==false &&(card.length<8 )){
                alert("Enter Correct Details!All details are incorrect");
            }
            else if(p1==false){
                alert("Missing '@' in Email");
            }
            else if(card.length<8 ){
                alert("PassWord Lenght must be max 8");
            }
            
           
            }
    
        }