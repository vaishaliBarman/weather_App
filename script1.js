let cityInput = document.getElementById('city_input'),
    searchBtn = document.getElementById('searchBtn'),
    locationBtn = document.getElementById('locationBtn'),
    api_key = '3406e46404466438320be318dc0777d6',
    currentWeatherCard = document.querySelectorAll('.weather-left .card')[0],
    fiveDaysForecastCard = document.querySelector('.day-forecast'),
    aqiCard = document.querySelectorAll('.highlights .card')[0],
    sunriseCard = document.querySelectorAll('.highlights .card')[1],
    humidityVal = document.getElementById('HumidityVal'),
    pressureVal = document.getElementById('pressureVal'),
    visibilityVal = document.getElementById('visibilityVal'),
    WindSpeedVal = document.getElementById('WindSpeedVal'),
    FeelsVal = document.getElementById('FeelsVal'),
    hourlyForecastCard = document.querySelector('.hourly-forecast'),
    aqiList = ['Good', 'Fair', 'Moderate', 'Poor', 'Very Poor'];

// Define weather backgrounds
const weatherBackgrounds = {
    'fog': 'url(https://img1.picmix.com/output/pic/normal/9/4/2/8/5488249_c770d.gif)',
    'drizzle': 'url(https://www.icegif.com/wp-content/uploads/2021/11/icegif-695.gif)',
    'light rain': 'url(https://i.pinimg.com/originals/38/e3/11/38e3115f1d06ba0b443a75ff0c7cf2ee.gif)',
    'clear sky': 'url(https://i.gifer.com/Lx0q.gif)',
    'few clouds': 'url(https://i.makeagif.com/media/3-29-2016/_3nGic.gif)',
    'scattered clouds': 'url(https://i.makeagif.com/media/3-29-2016/_3nGic.gif)',
    'broken clouds': 'url(https://i.makeagif.com/media/3-29-2016/_3nGic.gif)',
    'shower rain': 'url(https://i.pinimg.com/originals/0d/65/87/0d65871fbae4469f4bd521e3497e04a6.gif)',
    'moderate rain': 'url(https://media0.giphy.com/media/JjrDsvilNKgw0/giphy.gif)',
    'rain': 'url(https://i.pinimg.com/originals/3a/b3/e3/3ab3e3bb80df0bfb1c9c312bac9b46e8.gif)',
    'thunderstorm': 'url(https://cdn.pixabay.com/animation/2024/04/03/23/48/23-48-16-122_512.gif)',
    'snow': 'url(https://i.pinimg.com/originals/d5/39/9d/d5399da17d9792aa3a066720b547a3f8.gif)',
    'mist': 'url(https://c4.wallpaperflare.com/wallpaper/1017/398/480/mist-wallpaper-preview.jpg)',
    'overcast clouds': 'url(https://www.adventurebikerider.com/wp-content/uploads/2017/10/tumblr_o27c7fByaO1tchrkco1_500.gif)',
    'haze': 'url(https://64.media.tumblr.com/fd163b68f798321847925cfbf3793168/65ff7c05f97690ea-b4/s400x600/9ceddaa26f8c1c7166a6ea354613a31b0261e28e.gif)',
    // Default background
    'default': 'url(https://t3.ftcdn.net/jpg/05/79/86/10/360_F_579861052_KjeAAbyaXOBY6JjxMEPBVJypp2KSb59v.jpg)'
};

// Function to update the page background based on weather description
function updateBackground(description) {
    let background = weatherBackgrounds[description] || weatherBackgrounds['default'];
    document.body.style.backgroundImage = background;
    document.body.style.backgroundSize = 'cover'; // Optional: Ensures the background covers the entire page
}



function getWeatherDetails(name, lat, lon, country, state) {
    let FORECAST_API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api_key}`,
        WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`,
        AIR_POLLUTION_API_URL = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${api_key}`,
        days = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
        ],
        months = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ];

    fetch(AIR_POLLUTION_API_URL).then(res => res.json()).then(data => {
        let { co, no, no2, o3, so2, pm2_5, pm10, nh3 } = data.list[0].components;
        aqiCard.innerHTML = `
                <div class="card-head">
                    <p style="color:white;">Air Quality Index</p>
                    <p class="air-index aqi-${data.list[0].main.aqi}">${aqiList[data.list[0].main.aqi - 1]}</p>
                </div>
                <div class="air-quality-bar">
                    <div class="score-bar">
                        <div class="score-bar-fill" id="aqiScore" style="width: 0;"></div>
                    </div>
                </div>
                <div class="air-indices">
                    <i class="fa-solid fa-wind fa-3x"></i>
                    <div class="item">
                        <p style="font-size:1.2rem;color:white;">PM2.5</p>
                        <h2>${pm2_5}</h2>
                    </div>
                    <div class="item">
                        <p style="font-size:1.2rem;color:white;">PM10</p>
                        <h2>${pm10}</h2>
                    </div>
                    <div class="item">
                        <p style="font-size:1.2rem;color:white;">SO2</p>
                        <h2>${so2}</h2>
                    </div>
                    <div class="item">
                        <p style="font-size:1.2rem;color:white;">CO</p>
                        <h2>${co}</h2>
                    </div>
                    <div class="item">
                        <p style="font-size:1.2rem;color:white;">NO</p>
                        <h2>${no}</h2>
                    </div>
                    <div class="item">
                        <p style="font-size:1.2rem;color:white;">NO2</p>
                        <h2>${no2}</h2>
                    </div>
                    <div class="item">
                        <p style="font-size:1.2rem;color:white;">NH3</p>
                        <h2>${nh3}</h2>
                    </div>
                    <div class="item">
                        <p style="font-size:1.2rem;color:white;">O3</p>
                        <h2>${o3}</h2>
                    </div>
                </div>
            `;

        // Update the AQI score bar based on the AQI value
        const aqiValue = data.list[0].main.aqi * 20; // Assuming the AQI value ranges from 1 to 5
        const aqiScore = document.getElementById('aqiScore');

        // Update the width of the score bar based on AQI value
        aqiScore.style.width = `${aqiValue}%`;

        // Optionally, change the color based on AQI range
        if (aqiValue <= 50) {
            aqiScore.style.backgroundColor = '#44f205'; // Good
        } else if (aqiValue <= 100) {
            aqiScore.style.backgroundColor = '#f4e04d'; // Moderate
        } else if (aqiValue <= 150) {
            aqiScore.style.backgroundColor = '#f2cf05'; // Unhealthy for Sensitive Groups
        } else if (aqiValue <= 200) {
            aqiScore.style.backgroundColor = '#f28b05'; // Unhealthy
        } else if (aqiValue <= 300) {
            aqiScore.style.backgroundColor = '#f26805'; // Very Unhealthy
        } else {
            aqiScore.style.backgroundColor = '#f20505'; // Hazardous
        }
    }).catch(() => {
        alert('Failed to fetch Air Quality Index');
    });


    fetch(WEATHER_API_URL).then(res => res.json()).then(data => {
        let date = new Date();
        currentWeatherCard.innerHTML = `
            <div class="current-weather">
                    <div class="details">
                        <p style="font-size:1rem;color:white; font-weight:bold;">Now</p>
                        <h1 style="font-size:2rem;color:white;font-weight:bold">${(data.main.temp - 273.15).toFixed(2)}&deg;C</h1>
                        <p style="font-size:1.2rem;color:white;">${data.weather[0].description}</p>
                    </div>
                    <div class="weather-icon">
                        <img style="width:120px" src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="">
                    </div>
                </div>
                <hr>
                <div class="card-footer">
                    <p style="font-size:1rem;color:white; font-weight:bold;"><i class="fa fa-calendar"></i> ${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()}</p>
                    <p style="font-size:1rem;color:white; font-weight:bold;"><i class="fa fa-map-marker-alt" style="padding-right: 10px; "></i><a href="https://www.google.com/maps/search/?api=1&query=${lat},${lon}" target="_blank" style="color:white;">${name}, ${country}</a></p>
                </div>
        `;
    
        // Update background based on weather description
        updateBackground(data.weather[0].description);
        
        let { sunrise, sunset } = data.sys,
            { timezone, visibility } = data,
            { humidity, pressure, feels_like } = data.main,
            { speed } = data.wind,
            sRiseTime = moment.utc(sunrise * 1000).utcOffset(timezone / 60).format('hh:mm A'),
            sSetTime = moment.utc(sunset * 1000).utcOffset(timezone / 60).format('hh:mm A');
        sunriseCard.innerHTML = `
            <div class="card-head">
                <p style="color:white;">Sunrise & Sunset</p>
            </div>
            <div class="sunrise-sunset">
                <div class="item">
                    <div class="icon">
                        <i class="fas fa-sun fa-4x"></i>
                    </div>
                    <div>
                        <p style="font-size:1.2rem; color:white;">Sunrise</p>
                        <h2>${sRiseTime}</h2>
                    </div>
                </div>
                <div class="item">
                    <div class="icon">
                        <i class="fas fa-sun fa-4x"></i>
                    </div>
                    <div>
                        <p style="font-size:1.2rem; color:white;">Sunset</p>
                        <h2>${sSetTime}</h2>
                    </div>
                </div>
            </div>
        `;
        humidityVal.innerHTML = `${humidity}%`;
        pressureVal.innerHTML = `${pressure}hPa`;
        visibilityVal.innerHTML = `${visibility / 1000}km`;
        WindSpeedVal.innerHTML = `${speed}m/s`;
        FeelsVal.innerHTML = `${(feels_like - 273.15).toFixed(2)}&deg;C`;
    }).catch(error => {
        console.error('Error fetching weather data:', error);
    });

    fetch(FORECAST_API_URL).then(res => res.json()).then(data => {
        let hourlyForecast = data.list;
        hourlyForecastCard.innerHTML = '';
        for (i = 0; i <= 7; i++) {
            let hrForecastDate = new Date(hourlyForecast[i].dt_txt);
            let hr = hrForecastDate.getHours();
            let a = 'PM';
            if (hr < 12) a = 'AM';
            if (hr == 0) hr = 12;
            if (hr > 12) hr = hr - 12;
            hourlyForecastCard.innerHTML += `
                <div class="card">
                    <p style="color:white;">${hr} ${a}</p>
                    <img style="width:70%;" src="https://openweathermap.org/img/wn/${hourlyForecast[i].weather[0].icon}.png" alt="">
                    <p style="color:white;">${(hourlyForecast[i].main.temp - 273.15).toFixed(2)}&deg;C</p>
                </div>
            `;
        }
        let uniqueForecastDay = [];
        let fiveDaysForecast = data.list.filter(forecast => {
            let forecastDate = new Date(forecast.dt_txt).getDate();
            if (!uniqueForecastDay.includes(forecastDate)) {
                return uniqueForecastDay.push(forecastDate);
            }
        });

        fiveDaysForecastCard.innerHTML = '';

        for (let i = 0; i < fiveDaysForecast.length; i++) {
            let date = new Date(fiveDaysForecast[i].dt_txt);

            // Variables to store the closest day and night temperatures
            let dayTemp = null;
            let nightTemp = null;
            let closestDayDiff = Infinity;
            let closestNightDiff = Infinity;

            data.list.forEach(item => {
                let itemDate = new Date(item.dt_txt).getDate();
                if (itemDate === date.getDate()) {
                    let itemTime = new Date(item.dt_txt).getHours();
                    let timeDiff = Math.abs(itemTime - 12); // Difference from noon for daytime
                    if (timeDiff < closestDayDiff) {
                        closestDayDiff = timeDiff;
                        dayTemp = item.main.temp;
                    }
                    timeDiff = Math.abs(itemTime - 0); // Difference from midnight for nighttime
                    if (timeDiff < closestNightDiff) {
                        closestNightDiff = timeDiff;
                        nightTemp = item.main.temp;
                    }
                }
            });

            // Convert Kelvin to Celsius
            dayTemp = Math.round((dayTemp - 273.15).toFixed(2));
            nightTemp = Math.round((nightTemp - 273.15).toFixed(2));

            fiveDaysForecastCard.innerHTML += `
        <div class="forecast-item">
            <div class="icon-wrapper">
                <img src="https://openweathermap.org/img/wn/${fiveDaysForecast[i].weather[0].icon}.png" alt="cloud img">
                <span>Day: ${dayTemp}&deg;C</span>
                <span>Night: ${nightTemp}&deg;C</span>
            </div>
            <p  style="font-size:1.2rem;color:white;">${date.getDate()} ${months[date.getMonth()]}</p>
            <p  style="font-size:1.2rem;color:white;">${days[date.getDay()]}</p>
        </div>
    `;
        }
    }).catch(() => {
        alert('Failed to fetch weather forecast');
    })
}
// Update the displayed city name when the search button is clicked
searchBtn.addEventListener('click', function () {
    const cityName = cityInput.value.trim();
    if (cityName) {
        document.getElementById('cityNameDisplay').textContent = cityName; // Update with input value
        getCityCoordinates(); // Fetch coordinates and update weather data
    } else {
        alert('Please enter a city name.');
    }
});

// Update the displayed city name when the location button is clicked
locationBtn.addEventListener('click', function () {
    // Fetch and update city name display based on current location
    getUserCoordinates(); // Fetch current location and update weather data
});

function getCityCoordinates() {
    let cityName = cityInput.value.trim();
    cityInput.value = ''; // Clear input field
    if (!cityName) return;
    let GEOCODING_API_URL = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${api_key}`;
    fetch(GEOCODING_API_URL).then(res => res.json()).then(data => {
        if (data && data.length > 0) {
            let { name, lat, lon, country, state } = data[0];
            document.getElementById('cityNameDisplay').textContent = name; // Update with correct city name from API
            getWeatherDetails(name, lat, lon, country, state); // Fetch and display weather details
        } else {
            alert(`No results found for ${cityName}`);
        }
    }).catch(() => {
        alert(`Failed to fetch coordinates of ${cityName}`);
    });
}

function getUserCoordinates() {
    navigator.geolocation.getCurrentPosition(position => {
        let { latitude, longitude } = position.coords;
        let REVERSE_GEOCODING_URL = `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${api_key}`;

        fetch(REVERSE_GEOCODING_URL).then(res => res.json()).then(data => {
            let { name, country, state } = data[0];
            document.getElementById('cityNameDisplay').textContent = name; // Update with the city name from location
            getWeatherDetails(name, latitude, longitude, country, state); // Fetch and display weather details
        }).catch(() => {
            alert('Failed to fetch user coordinates');
        });
    }, error => {
        if (error.code === error.PERMISSION_DENIED) {
            alert('Geolocation permission denied. Please reset location permission to grant access again.');
        }
    });
}

searchBtn.addEventListener('click', getCityCoordinates);
locationBtn.addEventListener('click', getUserCoordinates);
cityInput.addEventListener('keyup', e => e.key === 'Enter' && getCityCoordinates());
window.addEventListener('load', getUserCoordinates);

