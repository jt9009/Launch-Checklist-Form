


window.addEventListener("load", function() {

   
      let missionTarget = document.querySelector("#missionTarget");

      fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
        response.json().then(function(json) {
            let randomNumber = Math.floor(Math.random() * (json.length));
            let planet = json[randomNumber];
            missionTarget.innerHTML = `<h2>Mission Destination</h2>
            <li>Name: ${planet.name}</li>
            <li>Diameter: ${planet.diameter}</li>
            <li>Star: ${planet.star}</li>
            <li>Distance from Earth: ${planet.distance}</li>
            <li>Number of Moons: ${planet.moons}</li>
            <img src="${planet.image}">`
         });
        });
      document.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");

      
      let launchStatus = document.querySelector("#launchStatus");
      let faultyItems  = document.querySelector("#faultyItems");
      let pilotStatus = document.querySelector("#pilotStatus");
      let copilotStatus = document.querySelector("#copilotStatus");
      let fuelStatus = document.querySelector("#fuelStatus");
      let cargoStatus = document.querySelector("#cargoStatus");


      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("All fields are required!");
         
        }
     else if (!isNaN(pilotNameInput.value) || !isNaN(copilotNameInput.value) || isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value))  {
         alert("Make sure to enter valid information for each field!");
        
       } else {

         pilotStatus.innerHTML = `Pilot ${pilotNameInput.value}, Ready`;
         copilotStatus.innerHTML = `Co-pilot ${copilotNameInput.value}, Ready`;
   
         if (fuelLevelInput.value >= 10000 && cargoMassInput.value <= 10000) {
            faultyItems.style.visibility = "hidden";
            launchStatus.style.color = "green";
            launchStatus.innerHTML = "Shuttle is ready for launch";
         } else {
            faultyItems.style.visibility = "visible";
            launchStatus.style.color = "red";
            launchStatus.innerHTML = "Shuttle not ready for launch";
         }
   
         if (fuelLevelInput.value < 10000) {
            fuelStatus.innerHTML = "Not enough fuel for the journey";
         }
   
         if (cargoMassInput.value > 10000) {
            cargoStatus.innerHTML = "There is too much mass for the shuttle to take off";
         }
       }
      });
     
   });

