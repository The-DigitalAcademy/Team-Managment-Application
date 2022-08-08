var inputTeam = [];
var inputName = [];
	
var screenData = document.getElementById('screenData')

function addTeam() {
	var usersTeam = document.getElementById('usersTeam').value

	if (usersTeam == '') {
		alert('?')
		return
	}

	inputTeam.push(usersTeam)
	document.getElementById('usersTeam').value = ''

	displayTeam();
}

function displayTeam() {
	selectData.innerHTML = `<option value="">Select team</option>`

	for (let i = 0; i < inputTeam.length; i++) {
		
		selectData.innerHTML += `<option value="${inputTeam[i]}"> ${inputTeam[i]} </option>`
		
	}
}

function addName() {
	var usersName = document.getElementById('usersName').value

	inputName.push({name: usersName, team: selectdata.value})

	displayName()
	
}

function displayName() {
	var screenTeam = document.getElementById('screenTeam')

	screenTeam.innerHTML = ''

	for (var i = 0; i < inputTeam.length; i++) {
		screenTeam.innerHTML += `<b>${inputTeam[i]}: </b>`
		
	for (var x = 0; x < inputName.length; x++) {
		if (inputTeam[i] == inputName[x].team) {
			screenTeam.innerHTML += inputName[x].name + ','
	    }
		
	}
	screenTeam.innerHTML += '<br>'
	}
}