let instText = document.querySelector("#instText");
let quantityInput = document.querySelector("#quantity");
let goalInput = document.querySelector("#goal");
let progress = document.querySelector("#progress");
let progressBar = document.querySelector("#bar")
let devInfo = document.querySelector("#developerInfo");

let updateProgressBar = () => {
  let newGoal = goalInput.value;
  let newQuantity = quantityInput.value;
  let newWidth = (1 / (newGoal / newQuantity) * 100);

  console.log(newWidth);

  if (newWidth > 100) {
    progressBar.style.width = `100%`;
  } else if (newWidth < 0) {
    progressBar.style.width = `0%`;
  } else if (!newWidth) {
    progressBar.style.width = `0%`;
  } else {
    progressBar.style.width = `${newWidth}%`;
    progressBar.innerHTML = `${Math.round(newWidth)}%`;
  }
}

quantityInput.addEventListener("change", updateProgressBar);
goalInput.addEventListener("change", updateProgressBar);

document.querySelector("#hideInstructions").addEventListener("click", () => {
  instText.toggleAttribute("hidden");
});

document.querySelector("#hideBar").addEventListener("click", () => {
  progress.toggleAttribute("hidden");
});

document.querySelector("#hideDeveloper").addEventListener("click", () => {
  devInfo.toggleAttribute("hidden");
});
