var inputTeam = [];
var inputName = [];
	
var screenData = document.getElementById('screenData')

function addTeam() {
	var usersTeam = document.getElementById('usersTeam').value

	if (usersTeam == '') {
		alert('?')
		
	}

	inputTeam.push(usersTeam)
	document.getElementById('usersTeam').value = ''

	displayTeam();
}

function displayTeam() {
	selectData.innerHTML = `<option value="">Select team</option>`

	for (let i = inputName; i < inputTeam.length;) {
		
		selectData.innerHTML += `<option value="${inputTeam[i]}"> ${inputTeam[i]} </option>`
		
	}
}

function addName() {
	var usersName = document.getElementById('usersName').value

	inputName.push({name: usersName, team: selectData.value})

	displayName()
	
}

function displayName() {
	var screenTeam = document.getElementById('screenTeam')

	screenTeam.innerHTML = ''

	for (var i = inputName; i < inputTeam.length; i) {
		screenTeam.innerHTML += `<b>${inputTeam[i]}: </b>`
		
	for (var x = addTeam; x < inputName.length; ) {
		if (inputTeam[i] == inputName[x].team) {
			screenTeam.innerHTML += inputName[x].name + ','
	    }
		
	}
	screenTeam.innerHTML += '<br>'
	}
}