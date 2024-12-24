const apiKey = "cfa0dd02872f520eb5c17a6f19bef76e"

const weatherDataEl = document.getElementById("weather-data")

const cityInputElement = document.getElementById("city-input")

const formElement = document.querySelector("form")

//adding event listener to the form 
formElement.addEventListener("submit", (event)=> {

    event.preventDefault();
    const cityValue = cityInputElement.value;
    getWeatherData(cityValue)


}
)
async function getWeatherData (cityValue){
    try{
        const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`)

        if(!response.ok){
            throw new Error("cannot Ftech Data" + error)
        }
        const data = await response.json()
        
        console.log(data)
      const temperature = Math.round(data.main.temp)
      const description = data.weather[0].description
      const icon = data.weather[0].icon
      const details = [ 
        `Feels like: ${Math.round(data.main.feels_like)} °C`,
        `Humidity:  ${data.main.humidity} % `,
        `Wind Speed ${ Math.round(data.wind.speed)} m/s`
      ]

      weatherDataEl.querySelector(".icon").innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}.png" alt="weather icon">`;
      weatherDataEl.querySelector(".temperature").textContent= `${temperature}°C`;
      weatherDataEl.querySelector(".description").textContent= `${description}`;

      weatherDataEl.querySelector(".details").innerHTML = details.map((details) => 
        `<div>${details }</div>`
      ).join("");

    }catch (error){
        console.log ("cannot get data "  + error)

    }
}