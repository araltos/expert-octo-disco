import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

const disclaimer = document.querySelector(".disclaimer");
disclaimer.href = parkData.url;
disclaimer.innerHTML = parkData.fullName;

document.title = parkData.fullName;

const heroImage = document.querySelector(".hero-image");
heroImage.src = parkData.images[0].url;

function parkInfoTemplate(info) {
  const statesArray = info.states.split(",");
  const statesText = statesArray.join(", ");
  
  return `
    <a href="/" class="hero-banner__title">${info.fullName}</a>
    <p class="hero-banner__subtitle">
      <span>${info.designation}</span>
      <span>${statesText}</span>
    </p>`;
}

document.querySelector(".hero-info").innerHTML = parkInfoTemplate(parkData);
