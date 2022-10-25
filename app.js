"use strict";

// window.addEventListener("DOMContentLoaded", function () {

function time() {
  let today = new Date();
  let hour = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  let days = ["Вc", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
  let wDay = days[today.getDay()];

  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  if (day < 10) {
    day = `0${day}`;
  }

  if (month < 10) {
    month = `0${month}`;
  }

  document.querySelector(".clock").innerHTML = `${hour}:${minutes}:${seconds}`;
  document.querySelector(".date").innerHTML = `${wDay} ${day}.${month} `;
}
setInterval(time, 1000);

/* function createRow(obj) {
  document.querySelector(".files").insertAdjacentHTML(
    "beforeend",
    `
<div class="row">
  <div>${obj["nCard"]}</div>
  <div>${obj["poly"]}</div>
  <div>${obj["fio"]}</div>
  <div>${obj["sex"]}</div>
  <div>${obj["birth"]}</div>
  <div>${obj["city"]}</div>

  <div class="row-adress">
    <div>${obj["adress"][0]}</div>
    <div>дом ${obj["adress"][1]},</div>
    <div>кв. ${obj["adress"][2]}</div>
  </div>

  <div>${obj["diagnosis"]}</div>
  <div class="phone">${obj["phone"]}</div>
  <div>${obj["comment"]}</div>
<div>
  `
  );
}
createRow(patient1);
 */

function createRow(arr) {
  document.querySelector(".files").insertAdjacentHTML(
    "beforeend",
    `
<div class="row">
<div>${arr[0]["nCard"]}</div>
  <div>${arr[0]["poly"]}</div>
  <div>${arr[0]["data"]["f"]} ${arr[0]["data"]["i"]} ${arr[0]["data"]["o"]}</div>
  <div>${arr[0]["sex"]}</div>
  <div>${arr[0]["birth"]["d"]}.${arr[0]["birth"]["m"]}.${arr[0]["birth"]["y"]} </div>
  <div>${arr[0]["city"]}</div>
 
  
  <div class="row-adress">
    <div>${arr[0]["adress"]["street"]}, </div>
    <div>дом ${arr[0]["adress"]["home"]} </div>
    <div>кв. ${arr[0]["adress"]["flat"]} </div>
    

  </div>
  <div>F ${arr[0]["diagnosis"]} </div>
  <div>${arr[0]["phone"].join(', ')} </div>
  <div>${arr[0]["comment"]} </div>
  <div> 
  `

  );
}

console.log(createRow(patiens));

function tabMenu(block) {
  let tab = document.getElementsByClassName(`${block}-nav-button`);
  let tabContent = document.getElementsByClassName(`${block}-nav-tab`);
  let menu = document.getElementsByClassName(`${block}-nav-menu`)[0];

  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.add("hide");
    }
  }
  hideTabContent(2);

  function showTabContent(b) {
    if (tabContent[b].classList.contains("hide")) {
      hideTabContent(0);
      tabContent[b].classList.remove("hide");
    }
  }

  menu.addEventListener("click", function (event) {
    let target = event.target;
    if (target.classList.contains(`${block}-nav-button`)) {
      for (let i = 0; i < tab.length; i++)
        if (target == tab[i]) {
          showTabContent(i);
          break;
        }
    }
  });
}

console.log(tabMenu("header"));
console.log(tabMenu("reports"));
