/* 2 - Criar e executar uma segunda função para obter uma conversão de valores de temperatura - medidas 
em graus.Converter de Fahrenheit para Celsius e uma outra que faz a conversão de Celsius para Fahrenheit. */

function conversorFahrenheit() {
    let temperatureF = prompt("Digite uma temperatura em ºF para ser conbertida em ºC:");

    let c = (temperatureF - 32) * (5 / 9);

    alert(`${temperatureF}ºF equivalem a ${c.toFixed(1)}ºC!`);
}

function conversorCelcius() {
    let temperatureC = prompt("Digite uma temperatura em ºC para ser conbertida em ºF:");

    let f = (temperatureC * 1.8) + 32;

    alert(`${temperatureC}ºC equivalem a ${f.toFixed(1)}ºF!`);
}

conversorFahrenheit();
conversorCelcius();
