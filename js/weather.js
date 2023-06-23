const weather = document.querySelector('#weather span:first-child');
const city = document.querySelector('#weather span:last-child');



const apiKey = '3cc599038dff012f1632f2b25c9a16b0';




function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(lat);
    console.log(lon);
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    console.log(url);
    fetch(url).then((response) => response.json())
              .then((data) =>{
                weather.innerText = `${data.main.temp} ℃ `;
                city.innerText = data.name;
                } 
                );
}



function onGeoError(){
    console.log('We can not find you. no weather for you.');
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

