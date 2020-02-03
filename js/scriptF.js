function searchTable() { var input, filter, table, tr, td, i, txtValue; for (filter = (input = document.getElementById("myInput")).value.toUpperCase(), tr = (table = document.getElementById("myTable")).getElementsByTagName("tr"), i = 0; i < tr.length; i++)(td = tr[i].getElementsByTagName("td")[2]) && ((txtValue = td.textContent || td.innerText).toUpperCase().indexOf(filter) > -1 ? tr[i].style.display = "" : tr[i].style.display = "none") };
// const countDown = function () { const daysLeft = function (toDate) { return dt1 = new Date, dt2 = new Date(toDate), Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / 864e5) }, createDigits = function (toDate) { let countHTML = ""; const daysLeftInt = daysLeft(toDate), digitsArr = (daysLeftInt + "").split(""); digitsArr.forEach((function (digit, index) { countHTML += `<div class="countdown__digit"></div>` })); const countdownEl = document.querySelector(".countdown"); countdownEl.innerHTML = countHTML }; return { init: function (date) { createDigits(date) } } }(); countDown.init("10/10/2020");
function countD(){

   // Set the date we're counting down to
    var countDownDate = new Date("Oct 10, 2020 15:37:25").getTime();
    
    // Update the count down every 1 second
    var x = setInterval(function() {
    
      // Get today's date and time
      var now = new Date().getTime();
    
      // Find the distance between now and the count down date
      var distance = countDownDate - now;
    
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
      // Display the result in the element with id="countdown"
      document.getElementsByClassName("countdown").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";
    
      // If the count down is finished, write some text 
      if (distance < 0) {
        clearInterval(x);
        document.getElementsByClassName("countdown").innerHTML = "EXPIRED";
      }
    }, 1000);
}
