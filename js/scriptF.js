function searchTable() {
    var input, filter, table, tr, td, i, txtValue;
    for (filter = (input = document.getElementById("myInput")).value.toUpperCase(), tr = (table = document.getElementById("myTable")).getElementsByTagName("tr"), i = 0; i < tr.length; i++)
    (td = tr[i].getElementsByTagName("td")[4]) && ((txtValue = td.textContent || td.innerText).toUpperCase().indexOf(filter) > -1 ? tr[i].style.display = "" : tr[i].style.display = "none")
}




var countDownDate = new Date("Oct 10, 2020 15:37:25").getTime(),
    x = setInterval((function () {
        var now = (new Date).getTime(),
            distance = countDownDate - now,
            days = Math.floor(distance / 864e5),
            hours = Math.floor(distance % 864e5 / 36e5),
            minutes = Math.floor(distance % 36e5 / 6e4),
            seconds = Math.floor(distance % 6e4 / 1e3);
        document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ", distance < 0 && (clearInterval(x), document.getElementById("countdown").innerHTML = "EXPIRED")
    }), 1e3);