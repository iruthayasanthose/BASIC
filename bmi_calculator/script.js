//Variable Declaration and value assigned
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const output = document.getElementById("output");
const output2 = document.getElementById("output2");
const btn = document.getElementById("btn");

//Function to find and display the BMI & it's codniton name.
function bmi() {
  let m = height.value / 100;
  let kg = weight.value;
  let bmi = parseInt(kg / m / m);
  let bmiOutput = function () {
    if (bmi > 0) {
      output.textContent = bmi;
    } else {
      output.textContent = "Wrong Inputs";
    }
  };
  bmiOutput();

  if (bmi < 18.5) {
    output2.textContent = "You are underweight";
  } else if (bmi < 25) {
    output2.textContent = "You have a normal weight";
  } else if (bmi < 30) {
    output2.textContent = "You are overweight";
  } else if (bmi >= 30) {
    output2.textContent = "You are obese";
  } else {
    output2.textContent = "Please check your Height and Weight";
  }
}

//Click function Assignment
btn.addEventListener("click", bmi);
