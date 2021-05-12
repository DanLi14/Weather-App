const getWeatherData = async () => {
  try {
    const res = await axios.get(
      // 'api.openweathermap.org/data/2.5/weather?q={city name}&appid=8aca254cc140e1b0a161847f915a8cfd'
      'api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=8aca254cc140e1b0a161847f915a8cfd'
    );
    console.log(res);
  } catch (err) {
    console.log('error:', err);
  }
};

