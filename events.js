//Variables
let employeeID;
let fullName;
let extension;
let email;
let department;
let submit;
let employeeInfo;

const form = document.getElementById("form");
function showInfo(employeeID, fullName, extension, email, department) {
  console.log(employeeID);
}

form.addEventListener("submit", () => {
  employeeInfo = showInfo(
    employeeID.value,
    fullName.value,
    extension.value,
    email.value,
    department.value
  );
});
