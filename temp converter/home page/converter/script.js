const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const myInput = document.getElementById("myInput");
const myResult = document.getElementById("myResult");
let temp;
function submit(){
    if(toFahrenheit.checked){
        temp = Number(myInput.value);
        temp = temp + 273;
        myResult.textContent = temp + "K";
    }
    else if(toCelsius.checked){
        temp = Number(myInput.value);
        temp = temp - 273;
        myResult.textContent = temp + "C";
    }
    else{
        myResult.textContent = "Select an option"
    }
}