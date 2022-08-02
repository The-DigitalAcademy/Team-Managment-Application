var inputTeam = [];
var inputName = [];
	
var screenData = document.getElementById('screenData')

function addTeam() {
	var inputteam = document.getElementById('inputteam').value

	inputTeam.push(inputteam)
	document.getElementById('inputteam').value = ''

	displayTeam();
}

function displayTeam() {
	selectData.innerHTML = `<option value="">Select team</option>`

	for (let g = 0; g < inputTeam.length; g++) {
		
		selectData.innerHTML += `<option value="${inputTeam[g]}">${inputTeam[g]}</option>`
		
	}
}

function addName() {
	var inputname = document.getElementById('inputname').value

	inputName.push({team: inputTeam, name: selectdata.value})

	displayName()
	
}

function displayName() {
	var screenTeam = document.getElementById('screenTeam')

	screenTeam.innerHTML = ''

	for (let g = 0; g < inputTeam.length; g++) {
		screenTeam.innerHTML += `<h3>${inputTeam[g]}: </h3>`
		
	for (let h = 0; h < array.length; h++) {
		if (inputTeam[h] == inputName[g].team)
		screenTeam.innerHTML += inputName[g].name + ','
		
	}
	screenTeam.innerHTML += `<br>`
	}
}