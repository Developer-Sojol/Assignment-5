const allSeat = document.getElementsByClassName('all-seat');
let count = 0;
let leftSeat = 40;

for (const seat of allSeat) {
   seat.addEventListener("click", function(e){
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

   });
}

function totalCost() {
   
}

     