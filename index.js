const searchInput = document.querySelector('.search');
const submitBtn = document.querySelector('.submit');
const locationText = document.querySelector('.text-muted');
const cardText1 = document.querySelector('.card-text1');
const cardText2 = document.querySelector('.card-text2');

cardText1.setAttribute('style', 'white-space: pre;');
cardText2.setAttribute('style', 'white-space: pre;');

Date.prototype.addDays = function (days) {
  let date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

let date = new Date();

day = date.addDays(5);
day2 = date.addDays(6);

console.log(`${day.getDate()}/${day.getMonth() + 1}/${day.getFullYear()}`);
console.log(`${day2.getDate()}/${day2.getMonth() + 1}/${day2.getFullYear()}`);

const getWeatherData = async () => {
  try {
    const res = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&units=metric&APPID=7474a10a1a947ecc6c3fb800ce3a7ae2`
    );
    const { lon, lat } = res.data.coord;
    locationText.textContent = `in ${res.data.name}`;
    temp = res.data.main.temp.toPrecision(3);
    weatherDescription = res.data.weather[0]['main'];
    cardText1.textContent = `${temp}°C` + `\r\n${weatherDescription}`;
    const res2 = await axios.get(
      `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=hourly&appid=7474a10a1a947ecc6c3fb800ce3a7ae2`
    );
    temp2 = res2.data.daily[1].temp.day.toPrecision(3);
    weatherDescription2 = res2.data.daily[1].weather[0]['main'];
    cardText2.textContent = `${temp2}°C` + `\r\n${weatherDescription2}`;
  } catch (err) {
    console.log('error:', err);
    // Need to add a user alert if city input is not recognised.
  }
};

submitBtn.addEventListener('click', getWeatherData);
