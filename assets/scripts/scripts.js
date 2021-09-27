var breweryContainerEl = document.querySelector("brewery-container");

var api='c8a844d6b509f8578e3b82809031ec29';

var weather=currentWeather();
function currentWeather() {
fetch('https://api.openweathermap.org/data/2.5/weather?q=Charlotte,nc,us&units=imperial&appid='+ api)
.then(function(response) {return response.json()})
.then(function(data) {
	console.log(data);
	var feelsLike = document.getElementById("feelsLike").innerHTML = `Feels Like: ${data.main.feels_like}`
	var humidity = document.getElementById("humidity").innerHTML = `Humidity: ${data.main.humidity}`
	var temp = document.getElementById("temp").innerHTML = `Temperature: ${data.main.temp}`
	var tempMax = document.getElementsById ("temp_max").innerHTML = `Temperature Max: ${data.main.temp_max}`
	var tempMin = document.getElementsById ("temp_min").innerHTML = `Temperature Min: ${data.main.temp_min}`
	var pressure = document.getElementsById("pressure").innerHTML = `Pressure: ${data.main.pressure}`



})
}


function breweries(){
    fetch('https://api.openbrewerydb.org/breweries?by_city=charlotte&sort=name:asc')
        .then(function(response) {return response.json()})
        .then(function(data) {
            breweryList(data);
            console.log(data);

        })
    }

var localBreweries = breweries(); 

function breweryList(data){
var breweryContainerEl = document.getElementById("brewery-container")
for (var i = 1; i < data.length; i++){
    var ul = document.createElement("ul");
ul.innerHTML = data[i].name;
breweryContainerEl.appendChild(ul);
};
}