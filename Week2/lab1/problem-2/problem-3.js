let id = 0; // variable to create unique id
document.getElementById("Add").addEventListener("click", addNote);

function addNote() {
  const text = document.getElementById("title").value;
  const desc = document.getElementById("description").value;
  const colour = document.getElementById("colour");
  let notediv = document.createElement("div");
  let noteh = document.createElement("h2");
  let notep = document.createElement("p");

  let delBtn = document.createElement("button");
  // creating buttons and setting variables

  let newcolour = colour.options[colour.selectedIndex].value;

  notediv.id = "note_div" + id;
  notediv.style.padding = "20px";
  notediv.style.margin = "10px";
  notediv.style.width = "250px";
  notediv.style.float = "left";

  noteh.id = "note_h" + id;
  notep.id = "note_p" + id;
  noteh.style.textAlign = "center";
  notep.style.textAlign = "center";

  // setting the id for the div,header and paragraph

  delBtn.id = "delBtn" + id;
  //setting the id for the buttons

  noteh.innerHTML = text;
  notep.innerHTML = desc;
  delBtn.innerHTML = "Delete";
  //applying the test to the buttons and header/paragaraph

  //   appending the div inside the note area div
  document.getElementById("notesArea").appendChild(notediv);

  //setting the colour for the div
  document.getElementById("note_div" + id).style.backgroundColor = newcolour;

  // appending the header and paragraph into the created not div
  document.getElementById("note_div" + id).appendChild(noteh);
  document.getElementById("note_div" + id).appendChild(notep);
  noteh.contentEditable = true;
  notep.contentEditable = true; //setting the paragraph and title to editable

  //appending the buttons to the created note div

  document.getElementById("note_div" + id).appendChild(delBtn);
  document.getElementById("delBtn" + id).addEventListener("click", deleteNote);
  //delete function
  function deleteNote() {
    document.getElementById("notesArea").removeChild(notediv);
  }
  id++; //increasing the variable that sets the id for earch div,header,buttons and paragraph
}
