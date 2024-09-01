let display = document.getElementById('display')
let result = document.getElementById('result')
let string = "";
// Adding number
function addNum(input){
  string += input;
  display.value = string;
}
// Deleting the number from last
function del() {
  string = display.value.substring(0, display.value.length - 1);
  display.value = string;
}
// Clearing display
function clearDisplay() {
  string = '';
  display.value = string;
  result.value = string;
}
// Calculate
function calculate() {
  if (display.value == ""){
    result.value = "fyj msL¨v"
  }else {
    try {
    string = eval(display.value);
    result.value = string;
  } catch (e) {
    result.value = 'fyj msL¨v';
  }
  }
}
// Change theme
function add(){
  const classValue = 'dark';
  if(document.body.classList.contains(classValue)) {
    document.body.classList.remove(classValue);
    localStorage.removeItem('bodyClass');
  } else {
    document.body.classList.add(classValue);
    localStorage.setItem('bodyClass', classValue);
  }
}

function applySavedClass(){
  const className = localStorage.getItem('bodyClass');
  if (className){
    document.body.classList.add(className);
  }
}


applySavedClass();