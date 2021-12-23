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
  document.getElementById("currentNumber").innerHTML = "Hello World";
});