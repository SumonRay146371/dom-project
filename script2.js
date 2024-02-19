
// let clickedButtonsCount = 0;
// const seatNo = document.getElementById("seat-serial-section");
// let selectedSeats = [];

// // Seat-BUtton-Function

// seatNo.addEventListener("click", function (e) {
//   if (e.target.tagName === "BUTTON") {
//     const buttonText = e.target.innerText;

//     if (selectedSeats.includes(buttonText)) {
//       alert("This seat is already selected.");
//       return;
//     }

//     if (clickedButtonsCount < 4) {
//       setBackground(buttonText);
//       clickedButtonsCount++;

//       setTableData(buttonText);
//       let value = getValue("seatPurchase");
//       let total = value + 1;
//       setValue("seatPurchase", total);

//       let totalAvailable = getValue("available-seat");
//       let seatAvailable = totalAvailable - 1;
//       setValue("available-seat", seatAvailable);

//       let totalPriceAmount = total * 550;
//       setValue("totalPrice", totalPriceAmount);
//       setValue('grandTotal', totalPriceAmount)
 
//       selectedSeats.push(buttonText);

//       if (clickedButtonsCount === 4) {
//         const couponBtn = document.getElementById("couponBtn");
//         couponBtn.removeAttribute("disabled");
//       }
//     } else {
//       alert("You can only select up to 4 seats.");
//     }
//   }
// });


// let seats=document.querySelectorAll('btn')
// let count=0;
// for(let seat of seats){
//  seat.addEventListener('click',function(event){
//     console.log(event.target);
// //     document.getElementById("seatPurchase").innerHTML = count;
// // count=count+1

//  })
// }




let seats=document.querySelectorAll('.btn')
let sum=0;
 
for(let seat of seats){
   seat.addEventListener('click',function(event){
    document.getElementById("seatPurchase").innerHTML = sum; 
   sum=sum+1
    
   // show message 
   let seatNo=(event.target.parentNode.childNodes[1].innerText);

   let tableData=document.getElementById('ticketTable')
    
   let insertRow=document.createElement('tr')
     
   let firstSell=document.createElement('td')
   firstSell.textContent=seatNo
   let secondSell=document.createElement('td')
   secondSell.textContent='Economy'
   let thirdSell=document.createElement('td')
   thirdSell.textContent='550'
   insertRow.appendChild(firstSell)
   insertRow.appendChild(secondSell)
   insertRow.appendChild(thirdSell)

   tableData.appendChild(insertRow)
   // show total
   
   })
}



  function setInnerText(id,value){
    document.getElementById(id).innerText=value

  }


  function totalCost(id, value) {
    let tcost = document.getElementById(id).innerText;
    let convertedCost = parseInt(tcost);
    let sum1 = convertedCost + parseInt(value);
 
    setInnerText("totalPrice", sum1);
    console.log(sum1);
}
  function setInnerText(id,value){
    document.getElementById(id).innerText=value.toString()

  }