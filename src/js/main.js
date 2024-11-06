import { getParkData } from "./parkService.mjs";

document.addEventListener("DOMContentLoaded", () => {
  const parkData = getParkData();

  const disclaimer = document.querySelector(".disclaimer a");
  disclaimer.href = parkData.url;
  disclaimer.innerHTML = parkData.fullName;

  document.title = parkData.fullName;

  const heroImage = document.querySelector(".hero-image");
  heroImage.src = parkData.images[0].url;

  function parkInfoTemplate(info) {
    return `
      <a href="/" class="hero-banner__title">${info.fullName}</a>
      <p class="hero-banner__subtitle">
        <span>${info.designation}</span>
        <span>${info.states.join(", ")}</span>
      </p>`;
  }

  document.querySelector(".hero-info").innerHTML = parkInfoTemplate(parkData);
});
