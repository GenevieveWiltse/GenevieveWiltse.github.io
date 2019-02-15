var day1 = new Date();
var weekdayArray = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.getElementById("dayoftheweek").innerHTML = weekdayArray[day1.getDay()];

var day2 = new Date();
document.getElementById("month").innerHTML = day2.getDate();

var month1 = new Date();
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
document.getElementById("monthword").innerHTML = months[month1.getMonth()];

var year1 = new Date();
document.getElementById("year").innerHTML = year1.getFullYear();

var myDate = day1 .concat(day2, month1, year1);

document.getElementById("displaydate").innerHTML = myDate;