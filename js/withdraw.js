//add Event handaler
const withdrawButton = document.getElementById('withdraw-btn').addEventListener('click', function(){
    //get vlaue from input fild
     const withdrawInputFild = document.getElementById('withdraw-fild');
     const withdrawInputValueString = withdrawInputFild.value;
     const withdrawInputValue = parseFloat(withdrawInputValueString);
     
     if()
  
     //clear input fild
     withdrawInputFild.value = '';

     //get priveous withdraw value
     const priveousWihdrawAmount = document.getElementById('previous-withdraw');
     const priveousWihdrawValueString = priveousWihdrawAmount.innerText;
     const priveousWihdrawValue = parseFloat(priveousWihdrawValueString);
   
     //get priveous total blance  
     const previousBlanceTotal = document.getElementById('balance-total');
     const previousBlanceTotalValuestring = previousBlanceTotal.innerText;
     const previousBlanceTotalValue = parseFloat(previousBlanceTotalValuestring);
     
       if(withdrawInputValue > previousBlanceTotalValue){
          alert('insapisent');
          return;
       }
     
    
    
      //sum and get new value 
      const newWithdrawAmount = withdrawInputValue + priveousWihdrawValue;
      priveousWihdrawAmount.innerText = newWithdrawAmount;

     //add and update priveous total blance
     const newTotalAmount = previousBlanceTotalValue - newWithdrawAmount;
     previousBlanceTotal.innerText = newTotalAmount;
  

})