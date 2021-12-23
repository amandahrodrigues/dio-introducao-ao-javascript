var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

if(){
    
}

/*document.getElementById("increment").addEventListener("click", function() {
    if(currentNumber < 10){
        currentNumber = currentNumber + 1;
        document.getElementById("currentNumber").innerHTML = currentNumber;
    }else{
        document.getElementById("increment").disabled = true;
        document.getElementById("decrement").disabled = false;
    }
});

document.getElementById("decrement").addEventListener("click", function() {
    if(currentNumber > 0){
        currentNumber = currentNumber - 1;
        document.getElementById("currentNumber").innerHTML = currentNumber;
    }else{
        document.getElementById("decrement").disabled = true;
        document.getElementById("increment").disabled = false;
    }
});*/