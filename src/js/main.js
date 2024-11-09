import { getParkData } from "./parkService.mjs";

document.addEventListener("DOMContentLoaded", function() {
    const parkData = getParkData();

    const disclaimer = document.querySelector(".disclaimer a");
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
    
    function parkIntroTemplate(info) {
      return `
        <h2>${info.fullName}</h2>
        <p>${info.description}</p>
      `;
    }

    function mediaCardTemplate(info) {
      return `
        <div class="media-card">
          <a href="${info.link}">
            <img src="${info.image}" alt="${info.name}" />
            <h3>${info.name}</h3>
          </a>
          <p>${info.description}</p>
        </div>
      `;
    }

    function setParkIntro(data) {
      document.querySelector(".intro").innerHTML = parkIntroTemplate(data);
    }

    function setParkInfo(data) {
      const parkInfoLinks = [
        {
          name: "Current Conditions &#x203A;",
          link: "conditions.html",
          image: data.images[2].url,
          description: "See what conditions to expect in the park before leaving on your trip!"
        },
        {
          name: "Fees and Passes &#x203A;",
          link: "fees.html",
          image: data.images[3].url,
          description: "Learn about the fees and passes that are available."
        },
        {
          name: "Visitor Centers &#x203A;",
          link: "visitor_centers.html",
          image: data.images[9].url,
          description: "Learn about the visitor centers in the park."
        }
      ];

      document.querySelector(".info").innerHTML = parkInfoLinks.map(mediaCardTemplate).join("");
    }

    function getMailingAddress(addresses) {
      return addresses.find(address => address.type === "Mailing");
    }

    function getVoicePhone(phoneNumbers) {
      return phoneNumbers.find(phone => phone.type === "Voice").phoneNumber;
    }

    function footerTemplate(info) {
      const mailing = getMailingAddress(info.addresses);
      const voice = getVoicePhone(info.contacts.phoneNumbers);
      
      return `
        <section class="contact">
          <h3>Contact Info</h3>
          <h4>Mailing Address:</h4>
          <div>
            <p>${mailing.line1}</p>
            <p>${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}</p>
          </div>
          <h4>Phone:</h4>
          <p>${voice}</p>
        </section>
      `;
    }

    function setParkFooter(data) {
      document.querySelector("#park-footer").innerHTML = footerTemplate(data);
    }

    function initializeParkPage(data) {
      document.querySelector(".hero-banner__content").innerHTML = parkInfoTemplate(data);
      setParkIntro(data);
      setParkInfo(data);
      setParkFooter(data);
    }

    initializeParkPage(parkData);
});
