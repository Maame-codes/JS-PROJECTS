// This displays the value
function display(val) {
  document.getElementById('result').value += val
  return val
}

//solving the function

function solve(){
  let x = document.getElementById('result').value

  let y = eval(x);

  document.getElementById('result').value = y

  return y
}

//the solve method is called when the user clicks on the = operator

//clear screen of calculator

function clearScreen() {
  document.getElementById('result').value = ''
}