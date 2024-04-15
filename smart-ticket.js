const allSeat = document.getElementsByClassName('all-seat');
let count = 0;
let leftSeat = 40;
let total = 0;

const coupons = [
  {code: 'new15', off: 0.15},
  {code: 'couple20', off: 0.20},
];

for (const seat of allSeat) {
    seat.addEventListener("click", function(e){
      if (e.target.classList.contains("bg-lime-400"))
        return;
      if (count ==4){
        return;
      }
      e.target.classList.add("bg-lime-400");
     count+= 1;
     leftSeat -= 1;

     const seatNo =e.target.innerText;
     const className= "economics";
     const price = 550 ;
    
     const p = document.createElement('p');
     const p2= document.createElement('p');
     const p3 = document.createElement('p');

     p.innerText = seatNo;
     p2.innerText = className;
     p3.innerText = price;

     
     document.getElementById('selected-seat-details').appendChild(p);
     document.getElementById('selected-seat-details').appendChild(p2);
     document.getElementById('selected-seat-details').appendChild(p3);
     
     
     document.getElementById('seat-count').innerText = count;
     document.getElementById('left-seat').innerText = leftSeat;

     const totalCost = document.getElementById('total-price').innerText;
     const convertedTotalCost  = parseInt(totalCost);
     document.getElementById('total-price').innerText =convertedTotalCost + parseInt(price);

      

     const grandTotal= document.getElementById('grand-total').innerText;
     const convertedGrandTotal = parseInt(grandTotal);
     total = convertedGrandTotal + parseInt(price);
     document.getElementById('grand-total').innerText = total;

   });
}

function submit() {
  const fullPage = document.getElementById('full-page');
  fullPage.classList.add ('hidden');

  const successPage = document.getElementById('success-page');
  successPage.classList.remove('hidden');
}

  const buttonApply = document.getElementById('button-apply');
  const couponInput = document.getElementById('coupon-input');

  buttonApply.addEventListener(
    'click', function(e){

      const enteredCode = couponInput.value;

      let isCorrect = false;
      for(let i=0; i<coupons.length; i++){
        if(coupons[i].code !== enteredCode.toLowerCase()){
          continue;
        }
        isCorrect = true;
        document.getElementById("grand-total").innerText = (total - (total*coupons[i].off));
      }
      
      if(!isCorrect) {
        alert("Please enter valid code");
      }
    }
  )
