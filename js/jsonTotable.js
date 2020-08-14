function json2table(json, classes) {
  // CREATE TABLE BODY .
  var tBody = document.createElement("tbody");	
			
  // ADD COLUMN HEADER TO ROW OF TABLE HEAD.
  for (var i = 0; i < noOfContacts; i++) {
  
      var bRow = document.createElement("tr"); // CREATE ROW FOR EACH RECORD .
      
      
      for (var j = 0; j < col.length; j++) {
        var td = document.createElement("td");
        td.innerHTML = myContacts[i][col[j]];
        bRow.appendChild(td);
      }
      tBody.appendChild(bRow)

  }
  table.appendChild(tBody);	
}