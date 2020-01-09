"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Review Assignment

   Event Timer
   Author: Jazzmyne Nixon
   Date: 1/9/2020   

*/
showClock();

window.setInterval({
   showClock()
 }, 1000)

function showClock() {
   var thisDay = new Date("May 19, 2018 9:31:27");
   var localDate = thisDay.getDate();
   var localTime = thisDay.getTime();
   document.getElementById("currentTime").innerHTML = "<span>" +localDate+"</span><span>"+localTime+"</span>"
}
function nextJuly4(currentDate) {
   var cYear = currentDate.getFullYear();
   var jDate = new Date("July 4, 2018");
   jDate.setFullYear(cYear);
   if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
   return jDate;
}
var j4Date = nextJuly4(thisDay);

j4Date.setHours(21);

var days = 356 - jDate.getDay() - 1;
var hrs = 24 - jDate.getHours() - 1;
var mins = 60 - jDate.getMinutes() - 1;
var secs = 60 - jDate.getSeconds();

document.getElementById("dLeft").textContent = Math.floor(days);
document.getElementById("hLeft").textContent = Math.floor(hrs);
document.getElementById("mLeft").textContent = Math.floor(mins);
document.getElementById("sLeft").textContent = Math.floor(secs);