// Beverage select form function
function handleSelect(e) {
  e.preventDefault();
  const selection = document.getElementById("beverage").value;
  alert("hi");
}

window.addEventListener("load", function() {
  document.getElementById("select-form").addEventListener("submit", handleSelect);
});

// radio form function
function handleRadio(e) {
  e.preventDefault();
  const radioSelection = document.querySelector("input[name='flavor]:checked").value;
}

window.addEventListener("load", function() {
  document.getElementById("radio-form").addEventListener("submit", handleRadio);
});

//date form function to assign to variable
const dob = document.getElementById("born").value;

//color form variable
const favColor = document.getElementById("color").value;