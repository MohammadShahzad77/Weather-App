let cityName = document.getElementById('cityName')
let cityValue = document.getElementById('cityValue')
let cuntryName = document.getElementById('cuntryName')
let temperature = document.getElementById('temperature')

let search = async () => {
    if (cityValue.value.length == 0) {
        alert('please enter a city name before search')
    } else {
        try {
            let url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityValue.value + "&units=metric&appid=1cb6532aea3c298a830a71380eace21e"
            let response = await fetch(url)
            let data = await response.json()
            // console.log(data.name)
            cityName.textContent = data.name
            countryName.textContent = data.sys.country
            temperature.textContent = data.main.temp
            if (data.main.temp > 25) {
                document.getElementById('image').src = "hot sun.png"
            }
            else if (data.main.temp > 15 && data.main.temp < 25) {
                document.getElementById('image').src = "coldcold.png"

            }
            else {
                document.getElementById('image').src = "normal sun.png"
            }
        }
        catch {
            alert("Please enter the valid city name")
        }

    }
}