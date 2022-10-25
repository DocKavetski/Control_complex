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

  document.querySelector(
    ".clock"
  ).innerHTML = `${hour} : ${minutes} : ${seconds}`;
  document.querySelector(".date").innerHTML = `${wDay} ${day}.${month} `;
}
setInterval(time, 1000);


function createRow(obj) {
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


// });

function tabMenu(block) {
  let tab = document.getElementsByClassName(`${block}-nav-button`);
  let tabContent = document.getElementsByClassName(`${block}-nav-tab`);
  let menu = document.getElementsByClassName(`${block}-nav-menu`)[0];

  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.add("hide");
    }
  }
  hideTabContent(4);

  function showTabContent(b) {
    if (tabContent[b].classList.contains("hide")) {
      hideTabContent(0);
      tabContent[b].classList.remove("hide");
    }
  }

  menu.addEventListener("click", function (event) {
    let target = event.target;
    if (target.className == `${block}-nav-button`) {
      for (let i = 0; i < tab.length; i++)
        if (target == tab[i]) {
          showTabContent(i);
          break;
        }
    }
  });
}

console.log(tabMenu('header'));
