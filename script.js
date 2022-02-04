"use strict";

let elForm = document.querySelector(".form");
let elWeather = document.querySelector(".wrapper");
let elInput = document.querySelector(".form__input");

const renderWeather = function (data) {
  let inputValue = elInput.value;
  let today = new Date();
  let monthDate = today.getMonth();
  let month;
  switch (monthDate) {
    case 1:
      month = "January";
      break;
    case 2:
      month = "February";
      break;
    case 3:
      month = "Mach";
      break;
    case 4:
      month = "April";
      break;
    case 5:
      month = "May";
      break;
    case 6:
      month = "June";
      break;
    case 7:
      month = "July";
      break;
    case 8:
      month = "August";
      break;
    case 9:
      month = "September";
      break;
    case 10:
      month = "October";
      break;
    case 11:
      month = "November";
      break;
    case 12:
      month = "December";
      break;
  }

  const html = `
  <div class="weather">
  <div class="weather__day">
    <span class="day">Today : </span>
    <span class="month">${today.getDate()} - ${month}</span>
    <span class="year">${today.getFullYear()}</span>
  </div>
  <h3 class="weather__city">${inputValue.slice(0).toUpperCase()}</h3>
  <div class="weather__num">
    <img class="weather__num-img" src="./img/weather__img1.svg" alt="">
    <p class="weather__num-desc">${data.temperature}</p>
  </div>
  <p class="weather__desc">Wind status : <span class="wind-num">${
    data.wind
  }</span></p>
  <p class="weather__desc">Weather description : <span class="desc-desc">${
    data.description
  }</span></p>
  <div class="weather__fture">
    <p class="fture-text">The Next 3 days</p>
    <div class="fture__wrapper">
      <div class="fture__data">
        <p class="fture__day">${today.getDate() + 1} - ${month}</p>
        <img class="fture__img" src="./img/weather__img2.svg" alt="">
        <p class="fture__weather">10-C</p>
        <p class="fture__wind">🌪️ : <span class="fture__wind-num">7 km/h</span></p>
      </div>

      <div class="fture__data">
        <p class="fture__day">${today.getDate() + 2} - ${month}</p>
        <img class="fture-img" src="./img/weather__img3.svg" alt="">
        <p class="fture__weather">10° C</p>
        <p class="fture__wind">🌪️ : <span class="fture__wind-num">7 km/h</span></p>
      </div>

      <div class="fture__data">
        <p class="fture__day">${today.getDate() + 3} - ${month}</p>
        <img class="fture-img" src="./img/weather__img5.svg" alt="">
        <p class="fture__weather">10° C</p>
        <p class="fture__wind">🌪️ : <span class="fture__wind-num">7 km/h</span></p>
      </div>

    </div>
  </div>
</div>
  `;

  elWeather.insertAdjacentHTML("beforeend", html);
};

const renderError = function (errMessage) {
  elWeather.insertAdjacentHTML("beforeend", html);
};

const getWeatherData = async function (city) {
  try{
    const request = await fetch(
      `https://goweather.herokuapp.com/weather/${city}`
    );

    const data = await request.json();

    renderWeather(data);
  }catch{
    renderError(err.message)
  }
};

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  let inputValue = elInput.value;

  elWeather.innerHTML = null;

  getWeatherData(inputValue);
});
