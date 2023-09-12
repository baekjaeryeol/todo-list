const API_KEY = "0e2c8bd5e27b416a4270e3fa39df3005";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude
    // console.log(lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`

    fetch(url)
        .then(Response => Response.json())
        .then(data => {
            const city = document.querySelector("#weather span:nth-child(1)")
            const weather = document.querySelector("#weather span:nth-child(2)")
            const temp = document.querySelector("#weather span:nth-child(3)")
            const humidity = document.querySelector("#weather span:nth-child(4)")
            
            city.innerText = `도시: ${data.name}`;
            weather.innerText = `날씨: ${data.weather[0].main}`
            temp.innerText = `기온: ${data.main.temp}℃`
            humidity.innerText = `습도: ${data.main.humidity}%`
        });
}

function onGeoErr() {
    console.log("사용자의 위치를 찾을 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr)