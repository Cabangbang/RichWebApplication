var id = 0;
document.getElementById("Add").addEventListener("click", addNote);

function addNote() {
  const text = document.getElementById("title").value;
  const desc = document.getElementById("description").value;
  var notediv = document.createElement("div");
  var notep = document.createElement("p");
  let editBtn = document.createElement("button");
  let delBtn = document.createElement("button");

  notediv.id = "note_div" + id;
  notep.id = "note_p" + id;

  editBtn.id = "editBtn" + id;
  delBtn.id = "delBtn" + id;
  id++;

  notediv.innerHTML = text;
  notep.innerHTML = desc;
  editBtn.innerHTML = "Edit";
  delBtn.innerHTML = "Delete";

  document.getElementById("notesArea").appendChild(notediv);
  notediv.contentEditable = true;
  document.getElementById("notesArea").appendChild(notep);
  document.getElementById("notesArea").appendChild(editBtn);
  document.getElementById("notesArea").appendChild(delBtn);
}
document.getElementById("delBtn").addEventListener("click", deleteNote);

function deleteNote() {
  const parent = document.getElementById("notesArea");
  parent.removeChild(parent.firstElementChild);
}
