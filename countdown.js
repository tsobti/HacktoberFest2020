 // Set the date we're counting down to
 var countDownDate = new Date("Oct 31, 2021 00:00:00").getTime();

 // Update the count down every 1 second
 var x = setInterval(function () {
   // Get today's date and time
   var now = new Date().getTime();

   // Find the distance between now and the count down date
   var distance = countDownDate - now;

   // Time calculations for days, hours, minutes and seconds
   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
   var hours = Math.floor(
     (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
   );
   var minutes = Math.floor(
     (distance % (1000 * 60 * 60)) / (1000 * 60)
   );
   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

   // Output the result in an element with id="demo"
   document.getElementById("demo1").innerText = `${days}`;
   
   document.getElementById("demo2").innerText = `${hours}`;
    
   document.getElementById("demo3").innerText = `${minutes}`;
    
   document.getElementById("demo4").innerText = `${seconds}`;

  //  If the count down is over, write some text
   if (distance < 0) {
     clearInterval(x);
     document.querySelector(".counter").innerHTML = `<div class="expired">Ended... </div>`;
   }
 }, 1000);
