let formPercentage = document.querySelector(".formPercentage"),
    firstInput = document.getElementById("firstInput"),
    secondInput = document.getElementById("secondInput"),
    error = document.querySelector('.error');

formPercentage.addEventListener('submit', e => {
    e.preventDefault();
    
    let firstInputValue = parseFloat(firstInput.value);
    let secondInputValue = parseFloat(secondInput.value);
    if(firstInputValue && secondInputValue){
        let answer = (firstInputValue/secondInputValue * 100).toFixed(2);
        document.querySelector(".answer").innerHTML = `Answer: <span>${firstInputValue}</span> is the <span>${answer}</span> % of <span>${secondInputValue}</span>`;
    }
    else{
        error.classList.add('mb-3', 'text-danger');
        error.textContent = "Please, fill the fields to calculate the Percentage.";        
    }
    firstInput.value = "";
    secondInput.value = "";
})    