document.addEventListener("DOMContentLoaded", () => {
    const destinations = [
      { 
        name: "Paris", 
        description: "City of Love", 
        brochure: "https://irp.cdn-website.com/3959ca2f/files/uploaded/PARIS-%20FRANCE%20Travel%20Guide.pdf" 
      },
      { 
        name: "Tokyo", 
        description: "Land of the Rising Sun", 
        brochure: "https://res.klook.com/image/upload/v1550570987/Itinerary/Tokyo_7D6N_PDF_Itinerary_MY_reduce.pdf" 
      },
      { 
        name: "New York", 
        description: "The Big Apple", 
        brochure: "http://pages.ctrip.com/tour/pdf7/31.pdf" 
      },
    ];
  
    const destinationList = document.getElementById("destination-list");
  
    // Dynamically populate destinations with brochure links
    destinations.forEach(dest => {
      const div = document.createElement("div");
      div.innerHTML = `
        <h3>${dest.name}</h3>
        <p>${dest.description}</p>
        <a href="${dest.brochure}" target="_blank" view>${dest.name} Brochure</a>
      `;
      destinationList.appendChild(div);
    });
  });
  