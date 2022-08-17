//add event handler
const dipositButton = document.getElementById('diposite-btn').addEventListener('click',function(){
    //get diposit input value
     const userInputFild = document.getElementById('diposit-input');
     const dipositInputValueString = userInputFild.value;
     const dipositInputValue = parseFloat(dipositInputValueString );

     //get priveous diposite value
     const previosDipoAmount = document.getElementById('diposit-total');
     const privousAmountString = previosDipoAmount.innerText;
     const privousAmount = parseFloat(privousAmountString);

     // sum value total amount user input and priveous
     const newValue = dipositInputValue + privousAmount;

     //add update value priveous
     previosDipoAmount.innerText = newValue;

     //get balence section and update total balence
     const totalBlance = document.getElementById('balance-total');
     const newBlanceTotalString = totalBlance.innerText;
     const newBlanceTotal = parseFloat(newBlanceTotalString);
     
     //sum priveous and total balence
     const updateTotal = newBlanceTotal + newValue;

     //add and update total blance
     totalBlance.innerText = updateTotal;

     //clear input section 
     userInputFild.value= '';
     
})