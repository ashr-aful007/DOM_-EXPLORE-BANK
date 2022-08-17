const submitButton = document.getElementById('submit-btn').addEventListener('click',function(){
  //get input Email value
     const emailInputFild = document.getElementById('user-email');
   const inputEmail = emailInputFild.value;
   
   //get input password
   const inputPasswordFild = document.getElementById('user-password');
   const inputpasswordValue = inputPasswordFild.value;
   

   //validation for requare email and password 
   //REMEMBER it's note a valid step for real project
   if((inputEmail === 'bap@bata.com') && (inputpasswordValue === 'bank')){
      window.location.href = 'bank.html';
   }
   else{
    alert('please give valid information')
   }

})