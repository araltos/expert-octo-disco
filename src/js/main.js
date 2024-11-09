import { getParkData, parkInfoLinks } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import { parkInfoTemplate, parkIntroTemplate, mediaCardTemplate } from "./templates.mjs";

document.addEventListener("DOMContentLoaded", function() {
    const parkData = getParkData();

    const disclaimer = document.querySelector(".disclaimer a");
    disclaimer.href = parkData.url;
    disclaimer.innerHTML = parkData.fullName;

    document.title = parkData.fullName;

    const heroImage = document.querySelector(".hero-image");
    heroImage.src = parkData.images[0].url;

    function setParkIntro(data) {
      document.querySelector(".intro").innerHTML = parkIntroTemplate(data);
    }

    function setParkInfo() {
      document.querySelector(".info").innerHTML = parkInfoLinks.map(mediaCardTemplate).join("");
    }

    function initializeParkPage(data) {
      document.querySelector(".hero-banner__content").innerHTML = parkInfoTemplate(data);
      setParkIntro(data);
      setParkInfo();
      setHeaderFooter(data);
    }

    initializeParkPage(parkData);
});
