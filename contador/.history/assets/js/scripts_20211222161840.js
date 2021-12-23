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

if(currentNumber < 10 && currentNumber < 10){
    document.getElementById("increment").disabled = false;
    document.getElementById("decrement").disabled = false;
}else{
    document.getElementById("increment").disabled = true;
}

document.getElementById("increment").addEventListener("click", function() {
    if(currentNumber < 10){
        currentNumber = currentNumber + 1;
        document.getElementById("increment").disabled = false;
        document.getElementById("currentNumber").innerHTML = currentNumber;
    }else{
        document.getElementById("increment").disabled = true;
    }

});

document.getElementById("decrement").addEventListener("click", function() {
    currentNumber = currentNumber - 1;
    document.getElementById("currentNumber").innerHTML = currentNumber;
});