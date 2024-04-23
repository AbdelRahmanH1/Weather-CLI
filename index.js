const yargs = require("yargs");
const dotenv = require("dotenv");
dotenv.config();
const style = require("./style");

const { formatWeatherData, formatWeatherDetails } = require("./format");
const { getWeatherData, getWeatherDetails } = require("./getData");

// version of the yargs
yargs.version("1.0.1");

yargs.command({
  command: "getData",
  describe: `${style.bold(style.blue("Get Weather for each country"))}`,
  builder: {
    country: {
      type: "string",
      demandOption: true,
      describe: "Name of the country",
    },
  },
  handler: async (e) => {
    const data = await getWeatherData(e.country);
    const formatData = formatWeatherData(data);

    console.log(formatData);
  },
});

yargs.command({
  command: "history",
  describe: `${style.bold(style.blue("Get History for The  Country"))}`,
  builder: {
    country: {
      type: "string",
      demandOption: true,
      describe: "Name of the country",
    },
  },
  handler: async (e) => {
    const data = await getWeatherDetails(e.country);
    const formatData2 = formatWeatherDetails(data);
    console.log(formatData2);
  },
});

yargs.showHelpOnFail(true, "--help");
yargs.strict().demandCommand();

yargs.fail((msg, err, command) => {
  let customMessage;

  switch (command) {
    case "get_wea":
      customMessage += "Error: Unable to get weather of this country.";
      break;
    case "history":
      customMessage += "Error: unable to get history of this country.";
      break;
    default:
      customMessage = "Error: Unknown command failure.";
  }
  console.log(style.bold(style.red(customMessage)));
  process.exit(1);
});
yargs.parse();
