function formatDate(date) {
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
  
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    let dayIndex = date.getDay();
  
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let days = days[dayIndex];
    return `${days[dayIndex]} ${hours}:${minutes}`; 
  }
  //se puede poner dateElement.innerHTML = formatDate(currentTime)
  
  //function convertToFarenheit(event) {
  //event.preventDefault();
  //let tempertatureElement = document.querySelector("#temperature");
  //let tempertature = tempertatureElement.innerHTML;
  //tempertature = Number(tempertature);
  //tempertatureElement.innerHTML = Math.round(tempertature * 9) / 5 + 32;
  
  //let farenheit = document.querySelector ("#farenheit");
  //farenheit.addEventListener ("click", convertToFarenheit);
  //}
  //function convertToCelcius(event) {
  //event.preventDefault();
  //let tempertatureElement = document.querySelector("#temperature");
  //tempertatureElement.innerHTML = 19;
  //let celcius = document.querySelector("#celcius");
  //celcius.addEventListener("click", convertToCelcius);
  
  //}
  function search(event) {
    event.preventDefault();
    let h1 = document.querySelector("h1");
  
    let cityInput = document.querySelector("#city-input");
    searchCity(cityInput.value);
  }
  
  function searchCity(city) {
    let apiKey = "eb508ef6233a171a1bdb79ec0ccb8c7a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(`${apiUrl}`).then(showTemperature);
  }
  
  function showTemperature(response) {
    console.log(response);
  
    let cityElement = document.querySelector("#city");
    let temperature = Math.round(response.data.main.temp);
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = `${temperature}ºC`;
    cityElement.innerHTML = response.data.name;
  }
  
  let form = document.querySelector("#search-form");
  form.addEventListener("submit", search);
  
  //AXIOS current temp