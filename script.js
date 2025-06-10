
const apikey = "006c2b960da0eb56e080c496fc2ffb75";
const unsplashkey = "IEHw8ZORArLDEH4zfrn_Ft_dq5hsflbyDmrRBNBZLao";


async function getWeather(){

  const input = document.getElementById("cityInput");
  const city = input.value.trim();
  if (!city){
    alert("por favor escribir nombre de la ciudad");
    return;
  }


const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
const imageUrl = `https://source.unsplash.com/600x400/?${city},landmark`;


try{

  const response = await fetch(weatherUrl);
  if(!response.ok) throw new Error ("Ciudad no encontrada");

  const data = await response.json();
  const {name, main, weather} = data;

  
  const resultDiv = document.getElementById("weatherResult");
  resultDiv.innerHTML = `
      <h2>${name} </h2>
      <p>🌡️ Temperatura: ${main.temp} °C</p>
            <p>💧 Humedad: ${main.humidity}%</p>
                  <p>🌤️ Condición: ${weather[0].description}</p>
 
        <h3>${name}</h3>
          <img src="${imageUrl}" alt="Imagen turística de ${name}" style="width:100%; max-width:600px; border-radius:10px; margin-top:10px;" />

                <h3 style="margin-top:20px;">📍 Ubicación en el mapa</h3>
      <iframe
        width="100%"
        height="300"
        style="border:0; border-radius:10px;"
        loading="lazy"
        allowfullscreen
        src="https://www.google.com/maps?q=${encodeURIComponent(name)}&output=embed">
      </iframe>



  `;

} catch (error){
    document.getElementById("weatherResult").innerHTML =
    "<p>No se puede obtener información. Intenta otra ciudad.</p>";
    
  }

  
};
