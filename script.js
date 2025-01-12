document.getElementById("input-value").value = "";
document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (
    (e.key >= 0 && e.key <= 9) ||
    e.key == "+" ||
    e.key == "-" ||
    e.key == "*" ||
    e.key == "/" ||
    e.key == "."
  ) {
    handleButtonValue(e.key);
  }
  if (e.key == "Enter") {
    handleCalculate();
  }
  if (e.key == "Backspace" || e.key == "Delete") {
    handleClear();
  }
});
function handleButtonValue(val) {
  document.getElementById("input-value").value += val;
  document.getElementById("clear").style.textDecoration = "none";
}
function handleCalculate() {
  document.getElementById("input-value").value = eval(
    document.getElementById("input-value").value
  );
  document.getElementById("clear").style.textDecoration = "none";
}
function handleClear() {
  document.getElementById("input-value").value = "";
  document.getElementById("clear").style.textDecoration = "line-through";
}
