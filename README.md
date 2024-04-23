# Weather-CLI
Weather CLI is a command-line tool for getting weather data and history for different countries.

## Installation
Clone the repository:

```bash
git clone https://github.com/AbdelRahmanH1/weather-cli.git
```
##Install dependencies:
```bash
cd weather-cli
npm install
```
# Usage
## Get Weather Data
To get weather data for a specific country, use the following command:
```bash
npm run weather -- get_wea --country="Egypt"
```
Replace `"Egypt"` with the name of the country or the name of the city you want to get weather data for.

## Get Weather History
To get weather history for a specific country, use the following command:
```bash
npm run weather -- history --country="Egypt"
```
Replace `"Egypt"` with the name of the country or the name of the city you want to get weather data for.

## Command-line Options
- **get_wea**: Get current weather data for the specified country.
- **history**: Get weather history for the specified country.

## Packages Used
- **dotenv**: Loads environment variables from a `.env` file into `process.env`.
- **yargs**: Library for building command-line interfaces.

