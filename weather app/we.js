const apiKey = "fe9f4aac1ee51339b035c730cf9c88ef";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIicon = document.querySelector(" .weather-icon")

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();


   document.querySelector(".city").innerHTML = data.name;
   document.querySelector(".temp").innerHTML = Math.round( data.main.temp)  + "°C";
   document.querySelector(".humidity").innerHTML = data.main.humidity + "%" ;
   document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

   if (data.weather[0] .main == "Clouds"){
            weatherIicon.src = "clouds.png";
   }
   else if(data.weather[0] .main == "clear"){
            weatherIicon.src = "clear.png";
}
else if(data.weather[0] .main == "Rain"){
            weatherIicon.src = "rain.png";

}   

else if (data.weather[0] .main == "Drizzle"){
            weatherIicon.src = "drizzle.png";

}  

else if (data.weather[0] .main == "Mist"){
            weatherIicon.src = "mist.png";

}

}

searchBtn.addEventListener("click", ()=> {

    checkWeather(searchBox.value);

})

