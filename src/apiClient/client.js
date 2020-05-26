const BaseURL = "api.openweathermap.org/data/2.5/weather";
const appid = "cab7311a1eb6e2c6f4d4cb4b355cd8aa";

export async function getWeather(city) {
  try {
    let url = `http://${BaseURL}?q=${city}&appid=${appid}&units=imperial`;

    const response = await fetch(url);
    if(response.status !== 200) {
      throw new Error(response.statusText)
    }
    const result = await response.json();
    
    return result;
  } catch (error) {
    throw error
  }
}
