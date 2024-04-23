const styles = require("./style");

const weatherCondition = (name) => {
  return name === "Sunny" ? styles.green(name) : styles.red(name);
};

const formatWeatherData = (weatherData) => {
  // destruction data from the response object
  const { location, current } = weatherData;
  const { name, region, country, lat, lon, localtime } = location;
  const { temp_c, condition, cloud } = current;
  const conditionText = condition.text;

  // Condition of the color of the condition
  const conditionColor = weatherCondition(conditionText);

  // Custom Paragraph to print it
  // Calculate the length of the longest line
  const longestLineLength = Math.max(
    name.length,
    country.length,
    region.length,
    lat.length,
    lon.length,
    localtime.length,
    `${temp_c}°C`.length,
    conditionText.length,
    cloud.length
  );

  // Create the border
  const border = "+-" + "-".repeat(longestLineLength) + "-+";

  // Create the styled paragraph
  const styledParagraph = `
  ${border}
  |  ${styles.blue(styles.bold(name))} is located in ${styles.blue(
    styles.bold(country)
  )}, within the region of ${styles.blue(
    styles.bold(region)
  )}.                                                       
  |  It is situated at latitude ${styles.blue(
    styles.bold(lat)
  )} and longitude ${styles.blue(
    styles.bold(lon)
  )}.                                                              
  |  The local time is ${styles.blue(
    styles.bold(localtime)
  )}.                                                                                
  |  The current temperature is ${styles.bold(
    `${styles.blue(temp_c)}°C`
  )}.                                                                                   
  |  The weather condition is ${conditionColor}.                                                                                    
  |  There are ${styles.blue(
    styles.bold(cloud)
  )} clouds in the sky.                                                                                     
  ${border}
  `;
  return styledParagraph;
};

const formatWeatherDetails = (weatherData) => {
  const { location, current, forecast } = weatherData;

  const { name, country } = location;
  const { temp_c, condition } = current;
  const conditionTextToday = condition.text;

  const { forecastday } = forecast;
  const details = forecastday[0].hour;
  const length = details.length;
  const conditionColor = weatherCondition(conditionTextToday);
  let styledParagraph = `

  |  ${styles.blue(styles.bold(name))} is located in ${styles.blue(
    styles.bold(country)
  )},                                                                                                                                                                                                  
  |  The current temperature is ${styles.bold(`${styles.blue(temp_c)}°C`)}.
                                                                                     
  |  The weather condition is ${conditionColor}.                                                                                                                                                                         
  `;

  styledParagraph += `
  
  +------------------+------------------+------------------+------------------+
  |      Time        |    Temperature   |      Cloud       |    Condition     |
  +------------------+------------------+------------------+------------------+
  `;
  details.map((e) => {
    const { time, temp_c, cloud, condition } = e;
    const conditionText = condition.text;
    const conditionColor = weatherCondition(conditionText);

    styledParagraph += `
  |  ${time}          |      ${temp_c}°C      |      ${cloud}%       |   ${conditionColor}   |
        `;
  });
  styledParagraph += `
  +------------------+------------------+------------------+------------------+
  `;
  return styledParagraph;
};

module.exports = {
  formatWeatherData,
  formatWeatherDetails,
};
