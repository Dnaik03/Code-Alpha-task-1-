const celciusInput = document.querySelector('#celcius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');

function roundnum(num){
    return Math.round(num*100)/100;
}

function celciusToFahrenheitAndKelvin() {
    const cTemp = parseFloat(celciusInput.value);
    const fTemp = (cTemp * (9/5)) + 32;
    const kTemp = cTemp + 273.15;
    fahrenheitInput.value = roundnum(fTemp);
    kelvinInput.value = roundnum(kTemp);
}

function fahrenheitToCelciusAndKelvin() {
    const fTemp = parseFloat(fahrenheitInput.value);
    const cTemp = (fTemp - 32) * (5/9);
    const kTemp = (fTemp + 459.67) * 5/9;
    celciusInput.value = roundnum(cTemp);
    kelvinInput.value  = roundnum(kTemp);
}

function kelvinToCelciusAndFahrenheit() {
    const kTemp = parseFloat(kelvinInput.value);
    const cTemp = kTemp - 273.15;
    const fTemp = 9/5 * (kTemp - 273) + 32;
    celciusInput.value = roundnum(cTemp);
    fahrenheitInput.value = roundnum(fTemp);
}

function main() {
    celciusInput.addEventListener('input',celciusToFahrenheitAndKelvin);
    fahrenheitInput.addEventListener('input', fahrenheitToCelciusAndKelvin);
    kelvinInput.addEventListener('input',kelvinToCelciusAndFahrenheit);
}

main();