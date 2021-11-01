var button = document.querySelector(".btn");
var seaechInput = document.querySelector(".seaechBar");
var city = document.querySelector(".city");
var temp = document.querySelector(".temp");
var desc = document.querySelector(".desc");
var humidity = document.querySelector(".humidity");
var wind = document.querySelector(".wind");

button.addEventListener('click', function (){
    fetch('api.openweathermap.org/data/2.5/weather?q='+seaechInput.value+'&appid=8c79d34472050cd15b497ef00d4b3b48')

    .then(response => response.json())
    .then(data => {
        var nameValue = data ['name'];
        var tempValue = data ['main', 'temp'];
        var descValue = data ['weather'][0]['description'];
    })

    .catch(arr => alert("wromg city name"))
})














// const weather = {
//     "apikey": "8c79d34472050cd15b497ef00d4b3b48";
//     fetchWeather: function () {
//         fetch("https://api.openweathermap.org/data/2.5/weather?q= + city + units=metric&appid= + this.apikey")
//         .then((response) => response.json())
//         .then((data) => console.log(data));
//     },
//     displayWeather: function (data) {
        
//     }
// }
//"8c79d34472050cd15b497ef00d4b3b48"

