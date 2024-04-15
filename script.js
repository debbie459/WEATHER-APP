
const apiKey = "b347d04b1843c1e7bca28604d6faf9b3";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const inputBox = document.getElementById("input-box");
const searchButton = document.querySelector("button");
const weatherImage = document.querySelector(".weather-icon");


async function checkWeather(city){
    const response = await fetch (apiUrl + city +`&appid=${apiKey}`);// allows us to fetch the data for the specific location with the url and awaits till it gets it. It then stores it in the variable called response.

    if (response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".humidity").style.display = "none";
        document.querySelector(".wind").style.display = "none";
        document.querySelector(".weather-icon").style.display = "none";
        document.querySelector(".temp").style.display = "none";
        document.querySelector(".city").style.display = "none";

    // if there is an issue with the input the user enters and it cannot be fetched, show the error message already specified in the html file. Also, don't show the other attributes
    }

    else{
        var data = await response.json(); // this gets the response of the query, ehich is basiclly the weather details from the api and stores it in json format in the variable called data. 
    //json files are used to transmit data between a server and a web application. it stores them as key-value pairs or as objects. So this code line extracts the data from response which was transmitted by the json file. It then stores it in the data variable.

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;//innerHTML allows you to get or set the content of an html element. This line of code allows us to retreive all content of the class named city in the html file. querySelector allows us to access any form of html elements whether class, id, div, p, etc
   
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c"; // rounds it to an integer 
    document.getElementById("humidityp").innerHTML = data.main.humidity + "%";  //getElementById only allows us to get retreive an id. 
    document.getElementById("windp").innerHTML = data.wind.speed + " km/hr";

    if (data.weather[0].main == "Clear"){
        weatherImage.src = "images/clear.png";
    }
   
    else if (data.weather[0].main == "Clouds"){
        weatherImage.src = "images/clouds.png";
    } 
   
    else if (data.weather[0].main == "Drizzle"){
        weatherImage.src = "images/drizzle.png";
    } 
   
    else if (data.weather[0].main == "Mist"){
        weatherImage.src = "images/mist.png";
    } 

    else if (data.weather[0].main == "Rain"){
        weatherImage.src = "images/rain.png";
        
    } 
   
    else if(data.weather[0].main == "Snow"){
        weatherImage.src = "images/snow.png";
    } 

    document.querySelector(".error").style.display = "none";
    document.querySelector(".humidity").style.display = "block";
    document.querySelector(".wind").style.display = "block";

    // if there is no issue with the input the user entered, do not show an error message.
    }

}


searchButton.addEventListener("click", () =>{
    if (inputBox.value == "") {
        alert("Please enter a location");
    } 

    else {
    checkWeather(inputBox.value);
    }
})

