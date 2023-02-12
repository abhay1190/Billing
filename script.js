
//to get the tip%
var tip=0;
function Tipper(per){
   if(per==='tip5'){
    tip=5;
    document.getElementById('tip5').style.backgroundColor='blueviolet';
   }else if(per==='tip10'){
    tip= 10 ;
    document.getElementById('tip10').style.backgroundColor='blueviolet';
   }else if(per==='tip15'){
    tip= 15 ;
    document.getElementById('tip15').style.backgroundColor='blueviolet';
   }else if(per==='tip25'){
    tip= 25 ;
    document.getElementById('tip25').style.backgroundColor='blueviolet';
   }else if(per==='tip50'){
    tip= 50 ;
    document.getElementById('tip50').style.backgroundColor='blueviolet';
   }else if(per==='tip75'){
    tip= 75 ;
    document.getElementById('tip75').style.backgroundColor='blueviolet';
   }
}


function calc(){
    //to get the Amount
 const bill=document.getElementById("Amount").value;
 const pep=document.getElementById('person').value;
 const Tperpson=bill/pep;
 tip_price=(bill*tip)/100;
 const tipperperson=tip_price/pep;
 const totalperpson=Tperpson+tipperperson;
 document.getElementById('tr').innerHTML=tipperperson;
 document.getElementById('mr').innerHTML=totalperpson;
}

//To Reset the value
function reset(){
    location.reload();
}