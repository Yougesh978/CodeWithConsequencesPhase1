const root = document.querySelector("html");

let isRadian = false;
let isLog10 = false;
let radian_degree_multiple = (Math.PI)/180;

const cursor = document.createElement("div");
cursor.classList.add("cursor");
root.appendChild(cursor);

const follower = document.createElement("div");
follower.classList.add("cursor", "cursor__follower");
root.appendChild(follower);

root.addEventListener("mousemove", (e) => {
  setPosition(follower, e);
  setPosition(cursor, e);
});

function setPosition(element, e) {
  element.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
}

function addChar(input, character) {
  if (input.value == null || input.value == "0") input.value = character;
  else input.value += character;
}

function cos(form) {
  if (isRadian)
    form.display.value = Math.cos(form.display.value);
  else{
    form.display.value = Math.cos((form.display.value)*radian_degree_multiple);
  }
}

function sin(form) {
  if (isRadian)
    form.display.value = Math.sin(form.display.value);
  else{
    form.display.value = Math.sin((form.display.value)*radian_degree_multiple);
  }
}

function tan(form) {
  if (isRadian)
    form.display.value = Math.tan(form.display.value);
  else{
    form.display.value = Math.tan((form.display.value)*radian_degree_multiple);
  }
}

function sqrt(form) {
  form.display.value = Math.sqrt(form.display.value);
}

function ln(form) {
  if (isLog10) {
    form.display.value = Math.log10(form.display.value);
  } else {
    form.display.value = Math.log(form.display.value);
  }
}

function exp(form) {
  form.display.value = Math.exp(form.display.value);
}

function deleteChar(input) {
  input.value = input.value.substring(0, input.value.length - 1);
}
var val = 0.0;
function percent(input) {
  val = input.value;
  input.value = input.value + "%";
}

function changeSign(input) {
  if (input.value.substring(0, 1) == "-")
    input.value = input.value.substring(1, input.value.length);
  else input.value = "-" + input.value;
}

function compute(form) {
  form.display.value = eval(form.display.value);
}

function square(form) {
  form.display.value = eval(form.display.value) * eval(form.display.value);
}

function checkNum(str) {
  for (var i = 0; i < str.length; i++) {
    var ch = str.charAt(i);
    if (ch < "0" || ch > "9") {
      if (
        ch != "/" &&
        ch != "*" &&
        ch != "+" &&
        ch != "-" &&
        ch != "." &&
        ch != "(" &&
        ch != ")" &&
        ch != "%"
      ) {
        alert("invalid entry!");
        return false;
      }
    }
  }
  return true;
}

function switchTheme() {
  var element = document.getElementById("display");
  if (element.style.backgroundColor == "black"){
    element.style.backgroundColor = "white";
    element.style.color = "black";
    element.style.borderColor = "black";
    document.getElementById("theme").value = "Switch to Dark Theme";
  }
  else{
    element.style.backgroundColor = "black";
    element.style.color = "white";
    element.style.borderColor = "white";
    document.getElementById("theme").value = "Switch to Light Theme";
  }
}

function toggleRad() {
  if (isRadian){
    isRadian = false;
    document.getElementById("RadDeg").value = "Toogle to Radian";
  }
  else{
    isRadian = true;
    document.getElementById("RadDeg").value = "Toogle to Degree";
  }
}

function toggleLog() {
  if (isLog10){
    isLog10 = false;
    document.getElementById("LogBase").value = "Toogle to Log base 10";
  }
  else{
    isLog10 = true;
    document.getElementById("LogBase").value = "Toogle to Log base e";
  }
}
