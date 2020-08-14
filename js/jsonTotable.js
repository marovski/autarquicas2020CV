function json2table(json, classes) {
  let data = JSON.parse(json);
  console.log(data)
  let table = document.getElementById(classes);
  let row, cell;
  
  for (let i = 0; i < data.length; i++) {
    row = table.insertRow();
    cell = row.insertCell();
    cell.textContent = data[i].name;
    cell = row.insertCell();
    cell.textContent = data[i].isbn;
    cell = row.insertCell();
    cell.textContent = data[i].availableCopies;
  }

}

json2table("./data.json","ttbody")