// "use strict";

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
  for (let i = 0; i < arr.length; i++) {
    let diagnosis = arr[i]["diagnosis"];
    if (Math.round(arr[i]["diagnosis"]) * 10 == arr[i]["diagnosis"] * 10) {
      diagnosis = `${arr[i]["diagnosis"]}.0`;
    }

    let days = `${arr[i]["birth"]["d"]}`;
    if (arr[i]["birth"]["d"] < 10) {
      days = `0${arr[i]["birth"]["d"]}`;
    }

    let month = `${arr[i]["birth"]["m"]}`;
    if (arr[i]["birth"]["m"] < 10) {
      month = `0${arr[i]["birth"]["m"]}`;
    }

    document.querySelector(".files").insertAdjacentHTML(
      "beforeend",
      `
<div class="row">
<div>${arr[i]["nCard"]}</div>
  <div>${arr[i]["poly"]}</div>
  <div>${arr[i]["data"]["f"]} ${arr[i]["data"]["i"]} ${
        arr[i]["data"]["o"]
      }</div>
  <div>${arr[i]["sex"]}</div>
  <div>${days}.${month}.${arr[i]["birth"]["y"]} </div>
  <div>${arr[i]["city"]}</div>
  
  <div class="row-adress">
    <div>${arr[i]["adress"]["street"]},</div>
    <div>д. ${arr[i]["adress"]["home"]},</div>
    <div>кв. ${arr[i]["adress"]["flat"]}</div>
    

  </div>
  <div>F${diagnosis}</div>
  <div>${arr[i]["phone"].join(", ")} </div>
  <div>${arr[i]["comment"]} </div>
  <div> 
  `
    );
  }
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
