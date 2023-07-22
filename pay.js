function a(){
    var card=document.getElementById('card').value;
    if(card.length==4 || card.length==9 || card.length==14){
        document.getElementById('card').value=card+" ";

    }
}
function pay(){
    var p=document.getElementById('p').value;
    var card=document.getElementById('card').value;
    var d=document.getElementById('d').value;
    var cvv=document.getElementById('cvv').value;
    if(p.length>=1 && card.length==19 && d.length==5 && cvv.length==3){
        location.assign("paymentsuc.html");
    }
    else{
        if(p.length<1 && card.length!=19 && d.length!=5 && cvv.length!=3){
            alert("Enter Correct Details!All details are incorrect");
        }
        else if(p.length<1 && card.length==19 && d.length==5 && cvv.length==3){
            alert("Enter card Holder Name");
        }
        else if(p.length>=1 && card.length!=19 && d.length==5 && cvv.length==3){
            alert("Enter valid card Number");
        }
        else if(p.length>=1 && card.length==19 && d.length!=5 && cvv.length==3){
            alert("Enter valid THRU");
        }
        else if(p.length>=1 && card.length==19 && d.length==5 && cvv.length!=3){
            alert("Enter Vlaid CVV");
        }

    }
}