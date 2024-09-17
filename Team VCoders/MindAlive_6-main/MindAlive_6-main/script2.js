var condition1 = document.getElementById("condition-1");
var condition2 = document.getElementById("condition-2");
var condition3 = document.getElementById("condition-3");

const condition = localStorage.getItem("condition");
if (condition == "Normal") {
    condition1.style.display = "flex";
    condition2.style.display = "none";
    condition3.style.display = "none";
  } else if (condition == "Moderate") {
    condition1.style.display = "none";
    condition2.style.display = "flex";
    condition3.style.display = "none";
  } else if (condition == "Critical") {
    condition1.style.display = "none";
    condition2.style.display = "none";
    condition3.style.display = "flex";
  }