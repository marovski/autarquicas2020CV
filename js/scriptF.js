function searchTable() {
    var input, filter, table, tr, td, i, txtValue;
    for (filter = (input = document.getElementById("myInput")).value.toUpperCase(), tr = (table = document.getElementById("myTable")).getElementsByTagName("tr"), i = 0; i < tr.length; i++)
    (td = tr[i].getElementsByTagName("td")[3]) && ((txtValue = td.textContent || td.innerText).toUpperCase().indexOf(filter) > -1 ? tr[i].style.display = "" : tr[i].style.display = "none")
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



    function download_csv(csv, filename) {
    var csvFile;
    var downloadLink;

    // CSV FILE
    csvFile = new Blob([csv], {type: "text/csv"});

    // Download link
    downloadLink = document.createElement("a");

    // File name
    downloadLink.download = filename;

    // We have to create a link to the file
    downloadLink.href = window.URL.createObjectURL(csvFile);

    // Make sure that the link is not displayed
    downloadLink.style.display = "none";

    // Add the link to your DOM
    document.body.appendChild(downloadLink);

    // Lanzamos
    downloadLink.click();
}

function export_table_to_csv(html, filename) {
	var csv = [];
	var rows = document.querySelectorAll("table tr");
	
    for (var i = 0; i < rows.length; i++) {
		var row = [], cols = rows[i].querySelectorAll("td, th");
		
        for (var j = 0; j < cols.length; j++) 
            row.push(cols[j].innerText);
        
		csv.push(row.join(","));		
	}

    // Download CSV
    download_csv(csv.join("\n"), filename);
}

document.querySelector("button").addEventListener("click", function () {
    var html = document.querySelector("table").outerHTML;
	export_table_to_csv(html, "table.csv");
});
