let display = document.getElementById('display');
let result = document.getElementById('result');
let buttons = document.querySelectorAll("button");
let string = "";
let array = Array.from(buttons);
array.forEach(button => {
  button.addEventListener("click",(e) =>{
    if (e.target.innerHTML == '=') {
      string = eval(string);
      display.value = "";
      result.value = string;
    }else if(e.target.innerHTML == 'AC'){
      string = "";
      result.value = string;
      display.value = string;
    }else if(e. target.innerHTML == 'DEL'){
      string = string.substring(0, string.length-1);
      display.value = string;
    }else{
      string += e.target.innerHTML;
      display.value = string;
    }
  })
})
function changeTheme() {
  const className = 'dark';
  if (document.body.classList.contains(className)){
    document.body.classList.remove(className);
    localStorage.removeItem('class');
  }else {
    document.body.classList.add(className);
    localStorage.setItem('class', className);
  }
}
function applyTheme() {
  const saveClass = localStorage.getItem('class');
  if (saveClass) {
    document.body.classList.add(saveClass)
  }
}

applyTheme();