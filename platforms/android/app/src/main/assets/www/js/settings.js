var toggle = false;

function showFriends() {
	if(toggle == false) {
		var table = document.getElementById('list');

		var fR1 = table.insertRow(1);
		var fR2 = table.insertRow(1);
		var fR3 = table.insertRow(1);

		var cell1 = fR1.insertCell(0);
		var cell2 = fR2.insertCell(0);
		var cell3 = fR3.insertCell(0);
		
		cell1.innerHTML = "<button type='button'>Brando rart</button>";
		cell2.innerHTML = "<button type='button'>bort Gayaay</button>";
		cell3.innerHTML = "<button type='button'>Hi my name is Alex!</button>";

		toggle = true;
	} else {
		var table = document.getElementById('list');
		table.deleteRow(1);
		table.deleteRow(1);
		table.deleteRow(1);
		toggle = false;
	}
}

function exitFromApp() {
    navigator.app.exitApp();
}

function createUserCode() {
	var code = Math.floor(Math.random() * (10 ** 6));

	alert("Here is your temporary 6-digit friend code: " + code);
}

function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}