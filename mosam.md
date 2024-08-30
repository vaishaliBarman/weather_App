```md
# Weather App

This is a weather app that displays the current weather conditions of a city provided by the user. It also includes a current location feature, 5-day forecasts, sunrise and sunset times, and hourly forecasts for the current day. The app is responsive for all devices.

## Features

* **City Search:** Enter a city name to get the weather information.
* **Current Location:** Use the geolocation API to get the weather for your current location.
* **5-Day Forecast:** View the daily forecast for the next 5 days.
* **Sunrise and Sunset Times:** Display the sunrise and sunset times for the current day.
* **Hourly Forecast:** See the hourly forecast for the current day.
* **Responsive Design:** The app adapts to different screen sizes.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/weather-app.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd weather-app
   ```

3. **Open `index.html` in your web browser.**

## Usage

1. **Enter a city name** in the input field and click the "Search" button.
2. **Click the "Current Location" button** to get the weather for your current location.

## Documentation

This document provides a basic overview of the Weather App. For more detailed information, refer to the comments within the code files.

## Technologies Used

* **HTML:** Structure of the web page.
* **CSS:** Styling and layout of the app.
* **JavaScript:** Interactivity and data fetching.
* **OpenWeatherMap API:** Weather data provider.
* **Moment.js:** JavaScript library for date and time formatting.
* **Font Awesome:** Icons used in the app.
* **Boxicons:** Icons used in the app.


## Contributing

Contributions are welcome! Please open an issue or pull request to suggest improvements or report bugs.

## License

This project is licensed under the MIT License.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather App</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet">
    <link href="style.css" rel="stylesheet">
    <style>
        input::placeholder {
            color: #999999;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="header">
            <h1>Weather</h1>
            <div class="weather-input">
                <input type="text" name="city" id="city_input" placeholder="Enter City Name">
                <button type="button" id="searchBtn">
                    <i class="fa fa-search"></i> Search
                </button>
                <button type="button" id="locationBtn">
                    <i class="bx bx-target-lock"></i> Current Location
                </button>
            </div>
        </div>
    </div>
    <div class="city-name">
        <h2 id="cityNameDisplay">City Name</h2>
    </div>

    <div class="weather-data">
        <div class="weather-left">
           
            <div class="card">
                <div class="current-weather">
                    <div class="details">
                        <p>Now</p>
                        <h1>____&deg;C</h1>
                        <p>_______</p>
                    </div>
                    <div class="weather-icon">
                        <img src="https://openweathermap.org/img/wn/04d@2x.png" alt="cloud img">
                    </div>
                </div>
                <hr>
                <div class="card-footer">
                    <p><i class="fa fa-calendar"></i> _______</p>
                    <p><i class="fa fa-map-marker-alt"></i> _______</p>
                </div>
            </div>
            <div class="card">
                <h1 style="font-weight: bold;">5 Days Forecast</h1>
                <div class="day-forecast">
                    <div class="forecast-item">
                        <div class="icon-wrapper">
                            <img src="https://openweathermap.org/img/wn/02d.png" alt="cloud img">
                            <span>Day: _&deg;C</span>
                            <span>Night: _&deg;C</span>
                        </div>
                        <p>___</p>
                        <p>___</p>
                    </div>
                    <div class="forecast-item">
                        <div class="icon-wrapper">
                            <img src="https://openweathermap.org/img/wn/02d.png" alt="cloud img">
                            <span>Day: _&deg;C</span>
                            <span>Night: _&deg;C</span>
                        </div>
                        <p>___</p>
                        <p>___</p>
                    </div>
                    <div class="forecast-item">
                        <div class="icon-wrapper">
                            <img src="https://openweathermap.org/img/wn/02d.png" alt="cloud img">
                            <span>Day: _&deg;C</span>
                            <span>Night: _&deg;C</span>
                        </div>
                        <p>___</p>
                        <p>___</p>
                    </div>
                    <div class="forecast-item">
                        <div class="icon-wrapper">
                            <img src="https://openweathermap.org/img/wn/02d.png" alt="cloud img">
                            <span>Day: _&deg;C</span>
                            <span>Night: _&deg;C</span>
                        </div>
                        <p>___</p>
                        <p>___</p>
                    </div>
                    <div class="forecast-item">
                        <div class="icon-wrapper">
                            <img src="https://openweathermap.org/img/wn/02d.png" alt="cloud img">
                            <span>Day: _&deg;C</span>
                            <span>Night: _&deg;C</span>
                        </div>
                        <p>___</p>
                        <p>___</p>
                    </div>
                </div>
            </div>
            </div>
            <div class="weather-right">
                <h1 style="font-weight: bold;">Today's Highlights</h1>
                <div class="highlights">
                    <div class="card">
                        <div class="card-head">
                            <p>Air Quality Index</p>
                            <p class="air-index aqi-1">Good</p>
                        </div>
                        <div class="air-quality-bar">
                            <div class="score-bar">
                                <div class="score-bar-fill" id="aqiScore" style="width: 0;"></div>
                            </div>
                        </div>
                        <div class="air-indices">
                            <i class="fa-solid fa-wind fa-3x"></i>
                            <div class="item">
                                <p>PM2.5</p>
                                <h2>_____</h2>
                            </div>
                            <div class="item">
                                <p>PM10</p>
                                <h2>_____</h2>
                            </div>
                            <div class="item">
                                <p>SO2</p>
                                <h2>_____</h2>
                            </div>
                            <div class="item">
                                <p>CO</p>
                                <h2>_____</h2>
                            </div>
                            <div class="item">
                                <p>NO</p>
                                <h2>_____</h2>
                            </div>
                            <div class="item">
                                <p>NO2</p>
                                <h2>_____</h2>
                            </div>
                            <div class="item">
                                <p>NH3</p>
                                <h2>_____</h2>
                            </div>
                            <div class="item">
                                <p>O3</p>
                                <h2>_____</h2>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-head">
                            <p >Sunrise & Sunset</p>
                        </div>
                        <div class="sunrise-sunset">
                            <div class="item">
                                <div class="icon">
                                   <i class="fas fa-sun fa-4x"></i>
                                </div>
                                <div>
                                    <p>Sunrise</p>
                                    <h2>______</h2>
                                </div>
                            </div>
                            <div class="item">
                                <div class="icon">
                                    <i class="fas fa-sun fa-4x"></i>
                                </div>
                                <div>
                                    <p>Sunset</p>
                                    <h2>______</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-head">
                            <p>Humidity</p>
                        </div>
                        <div class="card-item">
                            <i class="fa-solid fa-droplet" style="font-size: 2rem;"></i>
                            <h2 id="HumidityVal">____%</h2>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-head">
                            <p>pressure</p>
                        </div>
                        <div class="card-item">
                            <i class="fa-regular fa-compass" style="font-size: 2rem;"></i>
                            <h2 id="pressureVal">____hPa</h2>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-head">
                            <p>Visibility</p>
                        </div>
                        <div class="card-item">
                            <i class="fa-regular fa-eye" style="font-size: 2rem;"></i>
                            <h2 id="visibilityVal">____Km</h2>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-head">
                            <p>Wind Speed</p>
                        </div>
                        <div class="card-item">
                            <i class="fa-solid fa-location-arrow" style="font-size: 2rem;"></i>
                            <h2 id="WindSpeedVal">____m/s</h2>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-head">
                            <p>Feels Like</p>
                        </div>
                        <div class="card-item">
                            <i class="fa-solid fa-temperature-three-quarters" style="font-size: 2rem;"></i>
                            <h3 id="FeelsVal">____&deg; C</h3>
                        </div>
                    </div>
                </div>
                <h2>Today At</h2>
                <div class="hourly-forecast">
                    <div class="card">
                        <p>9 AM</p>
                        <img src="https://openweathermap.org/img/wn/04d.png" alt="">
                        <p>___&deg;C</p>
                    </div>
                    <div class="card">
                        <p>9 AM</p>
                        <img src="https://openweathermap.org/img/wn/04d.png" alt="">
                        <p>___&deg;C</p>
                    </div>
                    <div class="card">
                        <p>9 AM</p>
                        <img src="https://openweathermap.org/img/wn/04d.png" alt="">
                        <p>___&deg;C</p>
                    </div>
                    <div class="card">
                        <p>9 AM</p>
                        <img src="https://openweathermap.org/img/wn/04d.png" alt="">
                        <p>___&deg;C</p>
                    </div>
                    <div class="card">
                        <p>9 AM</p>
                        <img src="https://openweathermap.org/img/wn/04d.png" alt="">
                        <p>___&deg;C</p>
                    </div>
                    <div class="card">
                        <p>9 AM</p>
                        <img src="https://openweathermap.org/img/wn/04d.png" alt="">
                        <p>___&deg;C</p>
                    </div>
                    <div class="card">
                        <p>9 AM</p>
                        <img src="https://openweathermap.org/img/wn/04d.png" alt="">
                        <p>___&deg;C</p>
                    </div>
                    <div class="card">
                        <p>9 AM</p>
                        <img src="https://openweathermap.org/img/wn/04d.png" alt="">
                        <p>___&deg;C</p>
                    </div>
                </div>
            </div>
        
    </div>
    <footer>
        <div class="footerContainer">
          <div class="socialIcons">
            <a href="https://www.facebook.com/TheWeatherChannel/"><img src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Facebook_glyph_svg-256.png" alt="Facebook"></a>
            <a href="https://www.instagram.com/weatherindia/?hl=en"><img src="https://cdn3.iconfinder.com/data/icons/remixicon-logos/24/instagram-fill-256.png" alt="Instagram"></a>
            <a href="https://x.com/indiametdept?lang=en"><img src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Twitter_glyph_svg-256.png" alt="Twitter"></a>
            <a href="https://openweathermap.org/"><img src="https://cdn3.iconfinder.com/data/icons/font-awesome-brands/512/google-plus-256.png" alt="Google Plus"></a>
            <a href="https://www.youtube.com/@TheWeatherChannel"><img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-youtube-256.png" alt="YouTube"></a>
          </div>
          
          <div class="footerNav">
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="https://support.google.com/websearch/answer/13687874?hl=en">Help</a></li>
              <li><a href="https://www.weather.gov/cae/weatherterms.html#:~:text=Saturation%3A%20The%20condition%20in%20which,strong%20winds%20and%20large%20hail.">Term & Condition</a></li>
            </ul>
          </div>
        </div>
        <div class="footerBottom">
          <p>Copyright &copy;2024; Designed by <span class="designer">Faheem</span></p>
      </div>
      </footer>
    <script src="https://momentjs.com/downloads/moment.min.js"></script>
    <script src="script1.js"></script>
</body>

</html>
```

```css
:root{
    --bg-color1:#95b8db;
    --bg-color2:#486ebb;
    --aqi-1:#d4e157;
    --aqi-2:#ffee58;
    --aqi-3:#ffca28;
    --aqi-4:#ff7043;
    --aqi-5:#ef5350;
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    min-height: 100vh;
    background-image: url('https://images.alphacoders.com/744/thumb-1920-744574.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
    font-family: sans-serif;
    padding: 0 15px;
}
hr{
    margin-bottom: 10px;
}

/**********Navbar*********/
.header{
    position: sticky;
    top: 0;
    background-color: var(--bg-color1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding: 15px 0;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    & #city_input{
        background-color: var(--bg-color2);
        border: none;
        padding: 12px;
        font-size: 16px;
        border-radius: 25px;
        color: #fff;
        &:focus{
            outline: none;
        }
    }
    & #searchBtn{
        background-color: var(--bg-color2);
        border: none;
        padding: 12px;
        font-size: 16px;
        border-radius: 25px;
        background-color: #fff;
        cursor: pointer;
    }
    & #locationBtn{
        background-color: var(--bg-color2);
        border: none;
        padding: 12px;
        font-size: 16px;
        border-radius: 25px;
        background-color:#ea6a4b;
        cursor: pointer;
    }
}

.city-name {
    text-align: left;
    margin-bottom: 20px;
}

.city-name h2 {
    font-size: 50px;
    font-weight: 600;
    color: #fff;
    margin-left: 10px;
}
#city_input::placeholder {
    color: black;
    text-align: center;
}
/**********   CARD      ***************/
.card{
   /* background: #b1f2f3;
    background: linear-gradient(0deg, #b1f2f3 6%, #a0a2f8 93%);   */
    border: 2px solid white;
    backdrop-filter: blur(10px); 
    padding: 15px;
    padding: 15px;
    border-radius: 15px;
    margin-bottom: 15px;
    & p{
        font-size: 14px;
        color: #0d0c0c;
    }
    & h1{
        font-size: 32px;
        font-weight: 500;
    }
}
.weather-data{
    
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px; 
    & .weather-left{
        grid-column: span 1; 
    
        & .current-weather{
            display: flex;
            justify-content: space-between;
            align-items: center;
            & h1{
                margin: 7px 0;
            }
            & p{
                color: black;
                font-size: 1.3rem;
            }
        }
        & .card-footer p{
            font-size: 14px;
            margin-bottom: 12px;
        }
        & .forecast-item{
            display: grid;
            grid-template-columns: repeat(3,1fr);
            place-items: center;
            margin-bottom: 15px;
            & .icon-wrapper{
                display: flex;
                align-items: center;
            }
        }
    }
    & .weather-right{
       
       grid-column: span 3;
        & h1{
           margin-bottom: 10px;
        }
        & .highlights{
            display: grid;
            grid-template-columns: repeat(4,1fr);
            column-gap: 15px;
            & .card:nth-of-type(1),
            & .card:nth-of-type(2){
                grid-column: span 2;
            }
            & .card-head{
                display: flex;
                justify-content: space-between;
                margin-bottom: 10px;
                p{
                    font-size: 1.2rem;
                    font-weight: bold;
                }
                & .air-index{
                    color: #000;
                    padding: 5px 10px;
                    border-radius: 15px;
                    &.aqi-1{
                        background-color: var(--aqi-1);
                    }
                    &.aqi-2{
                        background-color: var(--aqi-2);
                    }
                    &.aqi-3{
                        background-color: var(--aqi-3);
                    }
                    &.aqi-4{
                        background-color: var(--aqi-4);
                    }
                    &.aqi-5{
                        background-color: var(--aqi-5);
                    }
                    
                }
            }
            & .air-indices{
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                place-items: center;
                & p{
                    text-align: center;
                }
            }
            & .sunrise-sunset{
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                & .item{
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    & h2{
                        margin-top: 15px;
                    }
                }
            }
            & .card-item{
                display: flex;
                justify-content: space-between;
            }
        }
        & .hourly-forecast{
            display: grid;
            grid-template-columns: repeat(8, 1fr);
            column-gap: 10px;
            & .card{
                text-align: center;
            }
        }
    }
}

.score-bar {
    width: 100%;
    background-color: #e0e0e0;
    border-radius: 10px;
    overflow: hidden;
    height: 10px;
    margin: 10px 0;
}

.score-bar-fill {
    height: 100%;
    background-color: #d7190b;
    transition: width 0.3s ease-in-out;
    border-radius: 10px;
}


/**Media query *****/

@media (max-width: 1280px) {
  
    .weather-data {
        grid-template-columns: repeat(3, 1fr);
        & .weather-right{
            grid-column: span 2;
            & .highlights{
                grid-template-columns: repeat(3, 1fr);
                & .card:nth-of-type(1){
                    grid-column: span 3;
                }
            }
            & .hourly-forecast{
                grid-template-columns: repeat(6, 1fr);
            }
        }
    }
}

@media(max-width:1040px){
   
    .weather-data{
        grid-template-columns: repeat(2, 1fr);
        & .weather-right{
            grid-column: span 1;
            & .highlights{
                grid-template-columns: repeat(2,1fr);
                & .card:nth-of-type(1){
                    grid-column: span 2;
                }
            }
            & .hourly-forecast{
                grid-template-columns: repeat(4,1fr);
            }
        }
    }
}

@media(max-width:1040px){
   
    .weather-data .weather-right .highlights{
        & .card{
            grid-column: span 2;
        }
        & .air-index{
            grid-template-columns: repeat(3, 1fr);
        }
    }
}

@media(max-width:850px){

    .weather-data{
        grid-template-columns: 1fr;
        & .weather-right .highlights{
            & .card:nth-of-type(3),
            & .card:nth-of-type(4),
            & .card:nth-of-type(5),
            & .card:nth-of-type(6),
            & .card:nth-of-type(7){
                grid-column: span 1;
            }
            & .air-indices{
                grid-template-columns: repeat(5, 1fr);
            }
        }
    }
}

@media(max-width:660px){
    
    .header{
        flex-direction: column;
        & h1{
            margin-bottom: 8px;
        }
        & #city_input, #searchBtn, #locationBtn{
            width: 100%;
            margin-bottom: 10px;
        }
    }
}

@media(max-width:580px){
    
    .weather-data .weather-right .highlights .air-indices{
        grid-template-columns: repeat(4,1fr);
    }
}

@media(max-width:520px){
  
    .weather-data .weather-right .highlights {
        & .card:nth-of-type(3),
        & .card:nth-of-type(4),
        & .card:nth-of-type(5),
        & .card:nth-of-type(6),
        & .card:nth-of-type(7){
            grid-column: span 2;
        }
        & .air-indices{
            grid-template-columns: repeat(3, 1fr);
        }  
    }
}

@media(max-width:480px){
    
    .weather-data .weather-right .highlights .sunrise-sunset {
        grid-template-columns: 1fr;
    }
}

@media(max-width:450px){
   
    .weather-data .weather-right .hourly-forecast {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media(max-width:380px){
    
    .weather-data .weather-right .highlights .air-indices {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Footer  */
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  footer {
    border-radius: 15px;
      background-color: hwb(245 4% 91% / 0.502); /* Adjust the rgba value to control the transparency */
    color: #fff;  /* Adjust the rgba value to control the transparency */
    
  }
  .footerContainer {
    width: 100%;
    height: 2%;
  }
  .socialIcons {
    display: flex;
    justify-content: center;
  }
  .socialIcons a {
  text-decoration: none;
  padding: 10px;
  background-color: white;
  margin: 10px;
  border-radius: 50%;
  display: inline-block;
  }
  
  .socialIcons a img {
  width: 30px; /* Adjust the size of your icons */
  height: 30px;
  display: block;
  }
  
  .socialIcons a:hover {
  background-color: #efe8e8;
  transition: 0.5s;
  }
  
  .socialIcons a img:hover {
  filter: invert(100%); /* This will invert the colors on hover, you can adjust as needed */
  transition: 0.5s;
  }
  
  .footerNav {
    margin: 30px 0;
  }
  .footerNav ul {
    display: flex;
    justify-content: center;
    list-style-type: none;
  }
  .footerNav ul li a {
    color: white;
    margin: 20px;
    text-decoration: none;
    font-size: 1.5em;
    opacity: 0.7;
    transition: 0.5s;
  }
  .footerNav ul li a:hover {
    opacity: 1;
  }
  .footerBottom {
    background-color: #010317;
    padding: 20px;
    text-align: center;
  }
  .footerBottom p{
    color: white;
    font-size: 1em;
  }
  .designer{
    opacity: 0.7;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 400px;
    margin: 0px 5px;
  }
  @media (max-width: 700px) {
      .footerNav ul{
        flex-direction: column;
      }
      .footerNav ul li{
        width: 100%;
        text-align: center;
        margin: 10px;
      }
  }
```

```js
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
    'clear sky': 'url(path/to/clear-sky.jpg)',
    'few clouds': 'url(path/to/few-clouds.jpg)',
    'scattered clouds': 'url(path/to/scattered-clouds.jpg)',
    'broken clouds': 'url(path/to/broken-clouds.jpg)',
    'shower rain': 'url(path/to/shower-rain.jpg)',
    'rain': 'url(path/to/rain.jpg)',
    'thunderstorm': 'url(path/to/thunderstorm.jpg)',
    'snow': 'url(path/to/snow.jpg)',
    'mist': 'url(path/to/mist.jpg)',
    'overcast clouds': 'url(path/to/overcast-clouds.jpg)',
    'haze': 'url(https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?cs=srgb&dl=pexels-jplenio-1118873.jpg&fm=jpg)',
    // Default background
    'default': 'url(https://cdn.zeebiz.com/sites/default/files/2023/05/23/243689-jharkhand-weather-toda.jpg)'
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
            '