const searchInput = document.querySelector('.search');
const submitBtn = document.querySelector('.submit');
const locationText = document.querySelector('.text-muted');
const timeText = document.querySelector('.timetext');
const cardText1 = document.querySelector('.card-text1');
const cardText2 = document.querySelector('.card-text2');
const cardText3 = document.querySelector('.card-text3');
const cardText4 = document.querySelector('.card-text4');
const cardText5 = document.querySelector('.card-text5');
const cardText6 = document.querySelector('.card-text6');
const cardText7 = document.querySelector('.card-text7');
const cardText8 = document.querySelector('.card-text8');
const cardTitle3 = document.querySelector('.card-title3');
const cardTitle4 = document.querySelector('.card-title4');
const cardTitle5 = document.querySelector('.card-title5');
const cardTitle6 = document.querySelector('.card-title6');
const cardTitle7 = document.querySelector('.card-title7');
const cardTitle8 = document.querySelector('.card-title8');

cardText1.setAttribute('style', 'white-space: pre;');
cardText2.setAttribute('style', 'white-space: pre;');

Date.prototype.addDays = function (days) {
  let date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

let date = new Date();

console.log(timeText);

let time = `${date.getHours()}:${
  date.getMinutes() < 10 ? 0 : ''
}${date.getMinutes()}`;

const showTime = () => {
  timeText.textContent = time;
};

const showFutureDate = () => {
  card3Date = date.addDays(2);
  cardTitle3.textContent = `${card3Date.getDate()}/${
    card3Date.getMonth() + 1
  }/${card3Date.getFullYear()}`;
  card4Date = date.addDays(3);
  cardTitle4.textContent = `${card4Date.getDate()}/${
    card4Date.getMonth() + 1
  }/${card4Date.getFullYear()}`;
  card5Date = date.addDays(4);
  cardTitle5.textContent = `${card5Date.getDate()}/${
    card5Date.getMonth() + 1
  }/${card5Date.getFullYear()}`;
  card6Date = date.addDays(5);
  cardTitle6.textContent = `${card6Date.getDate()}/${
    card6Date.getMonth() + 1
  }/${card6Date.getFullYear()}`;
  card7Date = date.addDays(6);
  cardTitle7.textContent = `${card7Date.getDate()}/${
    card7Date.getMonth() + 1
  }/${card7Date.getFullYear()}`;
  card8Date = date.addDays(7);
  cardTitle8.textContent = `${card8Date.getDate()}/${
    card8Date.getMonth() + 1
  }/${card8Date.getFullYear()}`;
};

function capitalise(str) {
  const words = [];

  for (let word of str.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }
  return words.join(' ');
}

const showWeatherImage = () => {};

const getWeatherData = async () => {
  try {
    const res = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&units=metric&APPID=7474a10a1a947ecc6c3fb800ce3a7ae2`
    );
    console.log(res);
    const { lon, lat } = res.data.coord;
    locationText.textContent = `in ${res.data.name}`;
    temp = Math.round(res.data.main.temp);
    weatherMain = res.data.weather[0]['main'];
    weatherDescription = capitalise(res.data.weather[0]['description']);
    cardText1.textContent =
      `${temp}°C` + ' | ' + `${weatherMain}` + `\r\n${weatherDescription}`;
    const res2 = await axios.get(
      `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=hourly&appid=7474a10a1a947ecc6c3fb800ce3a7ae2`
    );
    temp2 = Math.round(res2.data.daily[1].temp.day);
    weatherMain2 = res2.data.daily[1].weather[0]['main'];
    weatherDescription2 = capitalise(
      res2.data.daily[1].weather[0]['description']
    );
    cardText2.textContent =
      `${temp2}°C` + ' | ' + `${weatherMain2}` + `\r\n${weatherDescription2}`;
    temp3 = Math.round(res2.data.daily[2].temp.day);
    weatherMain3 = res2.data.daily[2].weather[0]['main'];
    cardText3.textContent = `${temp3}°C | ${weatherMain3}`;
    temp4 = Math.round(res2.data.daily[3].temp.day);
    weatherMain4 = res2.data.daily[3].weather[0]['main'];
    cardText4.textContent = `${temp4}°C | ${weatherMain4}`;
    temp5 = Math.round(res2.data.daily[4].temp.day);
    weatherMain5 = res2.data.daily[4].weather[0]['main'];
    cardText5.textContent = `${temp5}°C | ${weatherMain5}`;
    temp6 = Math.round(res2.data.daily[5].temp.day);
    weatherMain6 = res2.data.daily[5].weather[0]['main'];
    cardText6.textContent = `${temp6}°C | ${weatherMain6}`;
    temp7 = Math.round(res2.data.daily[6].temp.day);
    weatherMain7 = res2.data.daily[6].weather[0]['main'];
    cardText7.textContent = `${temp7}°C | ${weatherMain7}`;
    temp8 = Math.round(res2.data.daily[7].temp.day);
    weatherMain8 = res2.data.daily[7].weather[0]['main'];
    cardText8.textContent = `${temp8}°C | ${weatherMain8}`;
  } catch (err) {
    console.log('error:', err);
    // Need to add a user alert if city input is not recognised.
  }
};

showFutureDate();
showTime();

submitBtn.addEventListener('click', getWeatherData);
searchInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    getWeatherData();
  }
});
