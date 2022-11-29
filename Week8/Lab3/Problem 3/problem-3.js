let id = 0; // variable to create unique id
let id_2 = 0; // variable to create unique id
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
    let newChildBtn = document.createElement("button");
    // creating buttons and setting variables

    let newcolour = colour.options[colour.selectedIndex].value;

    notediv.id = "note_div" + id;
    notediv.style.padding = "20px";
    notediv.style.margin = "10px";
    notediv.style.width = "250px";
    notediv.style.float = "left"; // Styling the div

    noteh.id = "note_h" + id;
    notep.id = "note_p" + id;
    noteh.style.textAlign = "center";
    notep.style.textAlign = "center";

    // setting the id for the div,header and paragraph
    newChildBtn.id = "newChildBtn" + id;
    delBtn.id = "delBtn" + id;
    //setting the id for the buttons

    noteh.innerHTML = text;
    notep.innerHTML = desc;
    delBtn.innerHTML = "Delete";
    newChildBtn.innerHTML = "Add Child";
    //applying the test to the buttons and header/paragaraph

    //   appending the div inside the note area div
    document.getElementById("notesArea").appendChild(notediv);

    //setting the colour for the div
    document.getElementById(notediv.id).style.backgroundColor = newcolour;

    // appending the header and paragraph into the created not div
    document.getElementById(notediv.id).appendChild(noteh);
    document.getElementById(notediv.id).appendChild(notep);
    noteh.contentEditable = true;
    notep.contentEditable = true; //setting the paragraph and title to editable

    //appending the buttons to the created note div

    document.getElementById(notediv.id).appendChild(delBtn);
    document.getElementById(notediv.id).appendChild(newChildBtn);

    const delNote = {
      next: function () {
        document.getElementById("notesArea").removeChild(notediv);
        delObservable.unsubscribe;
      },
    }; // deletes the note from the note area

    var delObservable = Rx.Observable.fromEvent(delBtn, "click");
    delObservable.subscribe(delNote); // subscribes the function

    const newChildNote = {
      next: function () {
        let newChild = document.createElement("div");
        let delChildBtn = document.createElement("button");
        let newChildP = document.createElement("p");
        newChild.id = "newChild" + id_2;

        delChildBtn.innerHTML = "delete child";

        newChildP.innerHTML = "This is a New Child";
        newChildP.contentEditable = true;

        document.getElementById(notediv.id).appendChild(newChild);
        document.getElementById(newChild.id).appendChild(newChildP);
        document.getElementById(newChild.id).appendChild(delChildBtn);

        const delChild = {
          next: function () {
            document.getElementById(notediv.id).removeChild(newChild);
            delnewChildObservable.unsubscribe;
          },
        }; // deletes the child from the note

        const delnewChildObservable = Rx.Observable.fromEvent(
          delChildBtn,
          "click"
        );
        delnewChildObservable.subscribe(delChild); // subscribes the function

        id_2++;
      },
    }; //create a new child in the note div

    var newChildObservable = Rx.Observable.fromEvent(newChildBtn, "click");
    newChildObservable.subscribe(newChildNote); // subscribes the function

    id++; //increasing the variable that sets the id for earch div,header,buttons and paragraph
  },
};

var addObservable = Rx.Observable.fromEvent(add, "click");
addObservable.subscribe(addNote);
