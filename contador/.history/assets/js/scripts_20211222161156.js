var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

/*function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}*/

document.getElementById("increment").addEventListener("click", function() {
    currentNumber = currentNumber + 1;
    document.getElementById("currentNumber").innerHTML = currentNumber;
});

document.getElementById("decrement").addEventListener("click", function() {
    currentNumber = currentNumber + 1;
    document.getElementById("currentNumber").innerHTML = currentNumber;
});