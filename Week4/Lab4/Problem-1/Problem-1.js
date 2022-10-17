function addRow() {
  var table = document.getElementById("table");
  var row = document.createElement("tr");
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");

  td1.innerHTML = document.getElementById("contact_name").value;
  td2.innerHTML = document.getElementById("mobile_no").value;
  td3.innerHTML = document.getElementById("email").value;

  row.appendChild(td1);
  row.appendChild(td2);
  row.appendChild(td3);

  table.children[0].appendChild(row);
}
