function submitProjectDetails() {
    var TeamName = document.getElementById("PName")
    var pAssigned = document.getElementById("projectAssigned")
    var Date = document.getElementById("SDate")
    var Date = document.getElementById("EDate")
    var Prior = document.querySelector('input[name="priority"]')
 // project name validation
    if (ProjectName.value == "") {
        alert("Project name field cannot be empty");
    } else {
        alert(ProjectName.value);
    }
    // Assigned to validation
    var person = pAssigned.options[pAssigned.selectedIndex].value;
    if (person == "" || person=="Select") {
        alert("Project Assigned to field cannot be empty");
    } else {
        alert(pAssigned.options[pAssigned.selectedIndex].value);
    }
   //priority validation
    var Prior = document.querySelector('input[name="priority"]:checked');

    if (Prior != null) {
        alert("The priority of project is:" + Prior.value);

    } else {
        alert("You did not select the priority of the project");
    }
// description validation

    if (Description.value == "") {
        alert("You did not write the project description");
    } else {
        alert(document.getElementById("description").value);
    }
}