function searchTable(n) {
  var input, filter, table, tr, td, i, txtValue;
    if(n!=3){
        id = document.getElementById("myInput1");
    }else{
        id=document.getElementById("myInput");
    }
   

  for (filter = (input = id).value.toUpperCase(),
      tr = (table = document.getElementById("myTable")).getElementsByTagName("tr"),
      i = 0;
    i < tr.length;

    i++
  )

    (td = tr[i].getElementsByTagName("td")[n]) &&
      ((txtValue = td.textContent || td.innerText)
        .toUpperCase()
        .indexOf(filter) > -1
        ? (tr[i].style.display = "")
        : (tr[i].style.display = "none"));
}


const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;

const comparer = (idx, asc) => (a, b) => ((v1, v2) => 
    v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2)
    )(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));

// do the work...
document.querySelectorAll('th').forEach(th => th.addEventListener('click', (() => {
    const table = th.closest('table');
    
    const tbody = table.querySelector('tbody');
    Array.from(tbody.querySelectorAll('tr'))
      .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
      .forEach(tr => tbody.appendChild(tr) );
})));

var countDownDate = new Date("Oct 25, 2020 00:01:00").getTime(),
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
function downloadCsv(){

    var html = document.querySelector("table").outerHTML;
	export_table_to_csv(html, "candidaturas.csv");
}



//Reset Display

function resetDisplay(){
    Array.prototype.forEach.call(document.getElementById('ttbody').getElementsByTagName('tr'), function (element) {
        element.style = 'display: ';
    });
}

//Contagem de candidaturas

    document.getElementById("candidaturas").innerHTML = "Total Candidaturas: "+ tabela.length; 
 
//ServiceWorker

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }