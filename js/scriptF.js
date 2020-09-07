//------------------Search Table-------------//

function searchTable(e) {
  var t, n, o, r;
  for (
    id =
      3 != e
        ? document.getElementById("myInput1")
        : document.getElementById("myInput"),
      t = id.value.toUpperCase(),
      n = document.getElementById("myTable").getElementsByTagName("tr"),
      r = 0;
    r < n.length;
    r++
  )
    (o = n[r].getElementsByTagName("td")[e]) &&
      ((o.textContent || o.innerText).toUpperCase().indexOf(t) > -1
        ? (n[r].style.display = "")
        : (n[r].style.display = "none"));
}
const getCellValue = (e, t) =>
    e.children[t].innerText || e.children[t].textContent,
  comparer = (e, t) => (n, o) => {
    return (
      (r = getCellValue(t ? n : o, e)),
      (a = getCellValue(t ? o : n, e)),
      "" === r || "" === a || isNaN(r) || isNaN(a)
        ? r.toString().localeCompare(a)
        : r - a
    );
    var r, a;
  };

//------------------------------------------------//

  //Sortable Columns
document.querySelectorAll("th").forEach((e) =>
  e.addEventListener("click", () => {
    const t = e.closest("table").querySelector("tbody");
    var n, o;
    Array.from(t.querySelectorAll("tr"))
      .sort(
        ((n = Array.from(e.parentNode.children).indexOf(e)),
        (o = this.asc = !this.asc),
        (e, t) => {
          return (
            (r = getCellValue(o ? e : t, n)),
            (a = getCellValue(o ? t : e, n)),
            "" === r || "" === a || isNaN(r) || isNaN(a)
              ? r.toString().localeCompare(a)
              : r - a
          );
          var r, a;
        })
      )
      .forEach((e) => t.appendChild(e));
  })
);

// -----------COuntdown TImer--------------////
var countDownDate = new Date("Oct 25, 2020 00:01:00").getTime(),
  x = setInterval(function () {
    var e = new Date().getTime(),
      t = countDownDate - e,
      n = Math.floor(t / 864e5),
      o = Math.floor((t % 864e5) / 36e5),
      r = Math.floor((t % 36e5) / 6e4),
      a = Math.floor((t % 6e4) / 1e3);
    (document.getElementById("countdown").innerHTML =
      n + "d " + o + "h " + r + "m " + a + "s "),
      t < 0 &&
        (clearInterval(x),
        (document.getElementById("countdown").innerHTML = "EXPIRED"));
  }, 1e3);
//-----------------------------------------------///


//----------Download CSV------//
function download_csv(e, t) {
  var n, o;
  (n = new Blob([e], { type: "text/csv" })),
    ((o = document.createElement("a")).download = t),
    (o.href = window.URL.createObjectURL(n)),
    (o.style.display = "none"),
    document.body.appendChild(o),
    o.click();
}


function export_table_to_csv(e, t) {
  for (
    var n = [], o = document.querySelectorAll("table tr"), r = 0;
    r < o.length;
    r++
  ) {
    for (
      var a = [], l = o[r].querySelectorAll("td, th"), c = 0;
      c < l.length;
      c++
    )
      a.push(l[c].innerText);
    n.push(a.join(","));
  }
  download_csv(n.join("\n"), t);
}


function downloadCsv() {
  export_table_to_csv(
    document.querySelector("table").outerHTML,
    "candidaturas.csv"
  );
}
//-------------------------------///
//Reset Display
function resetDisplay() {
  Array.prototype.forEach.call(
    document.getElementById("ttbody").getElementsByTagName("tr"),
    function (e) {
      e.style = "display: ";
    }
  );
}

//Service Worker
"serviceWorker" in navigator &&
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then((e) => {})
      .catch((e) => {});
  });
