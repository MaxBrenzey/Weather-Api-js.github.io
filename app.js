// selectors for main card 
const main = document.querySelector('.cityName');
const temp = document.querySelector('.tempruter');
const icon = document.querySelector('#icon');
const weather = document.querySelector('.weather');
const wind = document.querySelector('#wind');
const pressure = document.querySelector('#pressure');
const humidity = document.querySelector('#humidity');
const cloudiness = document.querySelector('#cloudiness');

// tomorrow card
const iconTommorow = document.querySelector('#iconTommorow');
const tempTommorow = document.querySelector('#tempTommorow');
const descrTomorrow = document.querySelector('#descrTomorrow');

// AfterTomorrow card
const iconAfterTommorow = document.querySelector('#iconAfterTommorow');
const tempAfterTommorow = document.querySelector('#tempAfterTommorow');
const descrAfterTomorrow = document.querySelector('#descrAfterTomorrow');

// day4 card
const iconDay4 = document.querySelector('#iconDay4');
const tempDay4 = document.querySelector('#tempDay4');
const descrDay4 = document.querySelector('#descrDay4');

// day5 card
const iconDay5 = document.querySelector('#iconDay5');
const tempDay5 = document.querySelector('#tempDay5');
const descrDay5 = document.querySelector('#descrDay5');

// input
const input = document.querySelector('.inputValue');
// input button
const button = document.querySelector('.submit');

button.addEventListener('click', OtherDaysApi);


async function OtherDaysApi() {
  await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${input.value}&days=5&lang=uk&key=e7b696d045e4460b99dd19a5dd34db69`)
    .then(res => res.json())
    .then(d => {
      console.log(d)
      // today
      main.textContent = d.city_name;
      temp.innerHTML = Math.round(d.data[0].temp) + '&deg;';
      icon.innerHTML = `<img src="https://www.weatherbit.io/static/img/icons/${d.data[0].weather.icon}.png">`;
      weather.innerHTML = d.data[0].weather.description;
      wind.innerHTML = Math.round(d.data[0].wind_spd);
      pressure.innerHTML = Math.round(d.data[0].pres);
      humidity.innerHTML = d.data[0].rh;
      cloudiness.innerHTML = d.data[0].clouds;
      // tomorrow 
      iconTommorow.innerHTML = `<img src="https://www.weatherbit.io/static/img/icons/${d.data[1].weather.icon}.png">`;
      tempTommorow.innerHTML = Math.round(d.data[1].temp) + '&deg;';
      descrTomorrow.innerHTML = d.data[1].weather.description;
      // AfterTomorrow 
      iconAfterTommorow.innerHTML = `<img src="https://www.weatherbit.io/static/img/icons/${d.data[2].weather.icon}.png">`;
      tempAfterTommorow.innerHTML = Math.round(d.data[2].temp) + '&deg;';
      descrAfterTomorrow.innerHTML = d.data[2].weather.description;
      // day4 
      iconDay4.innerHTML = `<img src="https://www.weatherbit.io/static/img/icons/${d.data[3].weather.icon}.png">`;
      tempDay4.innerHTML = Math.round(d.data[3].temp) + '&deg;';
      descrDay4.innerHTML = d.data[3].weather.description;
      // day5 
      iconDay5.innerHTML = `<img src="https://www.weatherbit.io/static/img/icons/${d.data[4].weather.icon}.png">`;
      tempDay5.innerHTML = Math.round(d.data[4].temp) + '&deg;';
      descrDay5.innerHTML = d.data[4].weather.description;
    })
}