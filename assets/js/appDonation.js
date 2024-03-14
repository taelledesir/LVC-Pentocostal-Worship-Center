let  paymentForm = document.getElementById('paymentForm');
let PayBtn = document.getElementById('PayBtn');

let creditCardBtn = document.getElementById('creditCard_Btn');

creditCardBtn.addEventListener("click", function(){
    console.log("I'm working");

  fetch('/create-checkout-session', {
    //fetch('/LVC-Donation', {
    method: 'POST',
    headers:{
        'content-Type': 'application/json'
    }
   }).then (res => {
    if(res.ok) return res.json()
   }).then(({url}) => {
    window.location = url
   }).catch( e => {
    console.error(e.error)
   })
});






// var paypalBtn = document.getElementById('paypal_Btn');
// let zelleBtn = document.getElementById('zelle_Btn');
// let cashAppBtn = document.getElementById('cashApp_Btn');
// let applePayBtn = document.getElementById('applePay_Btn');


// let creditCardSection = document.getElementById('creditCardSection');
// let ZelleSection = document.getElementById('ZelleSection');
// let paypalSection = document.getElementById('paypalSection');
// let cashAppSection = document.getElementById('cashAppSection');
// let applePaySection = document.getElementById('applePaySection');

// // paypalSection.setAttribute('hidden','');

// creditCardBtn.addEventListener("click", function(){
//     ZelleSection.setAttribute('hidden','');
//     paypalSection.setAttribute('hidden','');
//     cashAppSection.setAttribute('hidden','');
//     applePaySection.setAttribute('hidden','');
// });
// zelleBtn.addEventListener("click", function(){
//     //creditCardSection.hidden = true;
//     //paymentForm.setAttribute('hidden','');
//     ZelleSection.removeAttribute("hidden"); 
//      paypalSection.setAttribute('hidden','');
//      cashAppSection.setAttribute('hidden','');
//      applePaySection.setAttribute('hidden','');
// });
// paypalBtn.addEventListener("click", function(){
//      //creditCardSection.hidden = true;
//     paypalSection.removeAttribute("hidden"); 
//      ZelleSection.setAttribute('hidden','');
//      cashAppSection.setAttribute('hidden','');
//      applePaySection.setAttribute('hidden','');
// });
// cashAppBtn.addEventListener("click", function(){
//     //creditCardSection.hidden = true;
//     cashAppSection.removeAttribute("hidden"); 
//      ZelleSection.setAttribute('hidden','');
//      paypalSection.setAttribute('hidden','');
//      applePaySection.hidden = true;
// });
// applePayBtn.addEventListener("click", function(){
//        //creditCardSection.hidden = true;
//     applePaySection.removeAttribute("hidden"); 
//     ZelleSection.setAttribute('hidden','');
//     paypalSection.hidden = true;
//     cashAppSection.hidden = true;
// });

