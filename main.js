
let firstInput = document.getElementById("firstInput")
let secondInput = document.getElementById("secondInput")
function getAnswer(){       
  let firstInputValue = parseFloat(firstInput.value);
  let secondInputValue = parseFloat(secondInput.value);
  if(firstInputValue && secondInputValue){
    let answer = (firstInputValue/secondInputValue * 100).toFixed(2);
    document.getElementById("placeholder").style.display = 'none'
    document.getElementById("res").innerHTML = "Answer : " + firstInputValue + " is the " + answer + "% of " + secondInputValue;
  }
  else{
    alert("Fill the Fields")
  }
  firstInput.value = ""
  secondInput.value = ""
}            
