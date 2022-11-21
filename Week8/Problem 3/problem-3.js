let id = 0; // variable to create unique id
const add = document.getElementById("Add");
const addNote = {
  next: function () {
    const text = document.getElementById("title").value;
    const desc = document.getElementById("description").value;
    const colour = document.getElementById("colour");
    let notediv = document.createElement("div");
    let noteh = document.createElement("h2");
    let notep = document.createElement("p");
    let tempp = document.createElement("p");
    tempp.innerHTML = "New Child";
    tempp.contentEditable = true;

    let delBtn = document.createElement("button");
    let extraBtn = document.createElement("button");
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
    extraBtn.id = "extraBtn" + id;
    delBtn.id = "delBtn" + id;
    //setting the id for the buttons

    noteh.innerHTML = text;
    notep.innerHTML = desc;
    delBtn.innerHTML = "Delete";
    extraBtn.innerHTML = "Add Child";
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
    document.getElementById("note_div" + id).appendChild(extraBtn);

    const delNote = {
      next: function () {
        document.getElementById("notesArea").removeChild(notediv);
      },
    }; // deletes the note from the note area

    var Observable = Rx.Observable.fromEvent(delBtn, "click");
    Observable.subscribe(delNote); // subscribes the function

    const extraNote = {
      next: function () {
        let tempp = document.createElement("p");
        tempp.innerHTML = "New Child";
        tempp.contentEditable = true;
        document.getElementById("note_div" + (id - 1)).appendChild(tempp);
      },
    }; //create a new child in the note div

    var Observable = Rx.Observable.fromEvent(extraBtn, "click");
    Observable.subscribe(extraNote); // subscribes the function

    id++; //increasing the variable that sets the id for earch div,header,buttons and paragraph
  },
};

var Observable = Rx.Observable.fromEvent(add, "click");
Observable.subscribe(addNote);
