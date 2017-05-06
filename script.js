// data to display in browser
var table_data = [
	{first_name: 'Rose', last_name: 'Tyler', home: 'Earth'},
	{first_name: 'Zoe', last_name: 'Heriot', home: 'Space Station W3'},
	{first_name: 'Jo', last_name: 'Grant', home: 'Earth'},
	{first_name: 'Leela', last_name: null, home: 'Unspecified'},
	{first_name: 'Romana', last_name: null, home: 'Gallifrey'},
	{first_name: 'Clara', last_name: 'Oswald', home: 'Earth'},
	{first_name: 'Adric', last_name: null, home: 'Alzarius'},
	{first_name: 'Susan', last_name: 'Foreman', home: 'Gallifrey'}
];

// get the element to hold the data
var table = document.getElementById("table");

// make table draggable
table.draggable = true;

// append the drag event listener
table.addEventListener("dragstart", dragTable);

// iterate over the table_data array
for(var i = 0; i < table_data.length; i++) {
	var div = document.createElement("div");

	var fname = document.createElement("span");
	var lname = document.createElement("span");
	var home = document.createElement("span");

	fname.innerHTML = table_data[i].first_name;
	lname.innerHTML = table_data[i].last_name;
	home.innerHTML = table_data[i].home;

	div.appendChild(fname);
	div.appendChild(lname);
	div.appendChild(home);

	table.appendChild(div);
}

// get all the div elements that table can be dragged into
var divBoxes = document.querySelectorAll(".box");

// make boxes accept table
for(var box of divBoxes) {
	box.addEventListener("dragover", acceptTable);
	box.addEventListener("drop", dropTable);
}

/*** drag and drop feature for the data table ***/

// prevent default browser action to allow drag and drop
function acceptTable(e) {
	e.preventDefault();
	console.log("Accepting Table.");
}

// when drag and drop operation is initiated for table data
function dragTable(e) {
	e.dataTransfer.setData("table_id", e.target.id);
}

// when drop is initiated
function dropTable(e) {
	e.preventDefault();
	console.log("Dropping...");
	var tableID = e.dataTransfer.getData("table_id");
	e.target.appendChild(document.getElementById(tableID));
}
