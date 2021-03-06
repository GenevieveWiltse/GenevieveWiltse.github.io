let weatherObj = new XMLHttpRequest();
weatherObj.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=57b42636f4c174e9e0cd856232fd0ea3', true);

weatherObj.send();

weatherObj.onload = function () {

    let jsonRespObj = JSON.parse(weatherObj.responseText);

    console.log(jsonRespObj);

    document.getElementById('currentWea').innerHTML = jsonRespObj.list[0].weather[0].description;

    let t = document.getElementById('air-average').innerHTML = jsonRespObj.list[0].main.temp_max;

    document.getElementById('humidity').innerHTML = jsonRespObj.list[0].main.humidity;

    let x = document.getElementById('air-speed').innerHTML = jsonRespObj.list[0].wind.speed;

    let s = Math.pow(x,0.16);
 
    let chillfactor = 35.74 + (0.6215 * t) - (35.75 * s) + (0.4275 * t * s);
 
    let result = chillfactor.toFixed(1);
 
    document.getElementById("chill-factor").innerHTML = result;

}


