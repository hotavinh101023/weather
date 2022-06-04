const search = document.querySelector('.search');
const city = document.querySelector('.city');
const country = document.querySelector('.country');
const value = document.querySelector('.value');
const short_description = document.querySelector('.short-description');
const wind_value = document.querySelector('.wind-value');
const humidity_value = document.querySelector('.humidity-value');
const day = document.querySelector('.day');
const hour = document.querySelector('.hour');
const app = document.querySelector('.weather');
const body = document.querySelector('body');
const view = document.querySelector('.view__content')

async function changeWeatherUI(searchvalue) {
    if (!searchvalue) searchvalue = 'HaNoi'
    let searchValue = searchvalue.trim()
    var today = new Date()
    let ngay = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear()
    let gio = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + `${searchValue}` + '&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667'
    await fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.main.temp >= 30) {
                body.style.background = 'linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4)), url(./Hè.jpg) no-repeat center/cover'
                app.style.background = 'url(./Hè.jpg) no-repeat center/cover'
                view.style.color = '#fff'
            } else if (data.main.temp <= 18) {
                body.style.background = 'linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4)), url(./Đông.jpg) no-repeat center/cover'
                app.style.background = 'url(./Đông.jpg) no-repeat center/cover'
                view.style.color = '#ffa500'
            } else if (data.main.temp >= 18 && data.main.temp <= 23) {
                body.style.background = 'linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4)), url(./Xuân.jpg) no-repeat center/cover'
                app.style.background = 'url(./Xuân.jpg) no-repeat center/cover'
                view.style.color = 'rgb(8 255 166)'
            } else if (data.main.temp >= 23 && data.main.temp <= 30) {
                body.style.background = 'linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4)), url(./Thu.jpg) no-repeat center/cover'
                app.style.background = 'url(./Thu.jpg) no-repeat center/cover'
                view.style.color = '#00ffef'
            }
            day.innerText = ngay
            hour.innerText = gio
            city.innerText = data.name
            country.innerText = data.sys.country
            value.innerText = data.main.temp
            wind_value.innerText = data.wind.speed
            humidity_value.innerText = data.main.humidity
            short_description.innerText = data.weather[0].main
        })
}

changeWeatherUI()


search.addEventListener('keypress', e => {
    if (e.keyCode == '13') {
        changeWeatherUI(search.value)
    }
})