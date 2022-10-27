function addRow() {
  const table = document.getElementById("table");
  const row = document.createElement("tr");
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  const td3 = document.createElement("td");
  const name = document.getElementById("contact_name");
  const numb = document.getElementById("mobile_no");
  const mail = document.getElementById("email");
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const numbformat = new RegExp("^[0-9]+$");
  const errormsg = document.createElement("h2");
  const error = document.getElementById("error");
  errormsg.id = "errormsg";
  const delerrormsg = document.getElementById("errormsg");

  // errormsg.id.remove();
  td1.innerHTML = document.getElementById("contact_name").value;
  td2.innerHTML = document.getElementById("mobile_no").value;
  td3.innerHTML = document.getElementById("email").value;

  if (name.value.length <= 20 && name.value.length > 0) {
    if (error.contains(delerrormsg)) {
      delerrormsg.remove();
    } else {
      console.log("works");
    }

    if (numb.value.length == 10 && numb.value.match(numbformat)) {
      alert("works2");
      if (mail.value.length < 40 && mail.value.match(mailformat)) {
        alert("works3");
        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
        table.children[0].appendChild(row);
      } else {
        errormsg.innerHTML = "Error! invalid email";
        error.appendChild(errormsg);
      }
    } else {
      errormsg.innerHTML = "Error! invalid number";
      error.appendChild(errormsg);
    }
  } else {
    errormsg.innerHTML = "Error! invalid name";
    error.appendChild(errormsg);
  }
  name.value = "";
  numb.value = "";
  mail.value = "";
}

function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function sortTable(n) {
  var table,
    rows,
    switching,
    i,
    x,
    y,
    shouldSwitch,
    dir,
    switchcount = 0;
  table = document.getElementById("table");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc";
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < rows.length - 1; i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount++;
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
