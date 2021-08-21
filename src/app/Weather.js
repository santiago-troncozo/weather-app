export class Weather{
    constructor(city, countryCode) {
        this.apikey = '5eb3eedee6dda369f15ab23397cec915';
        this.city = city;
        this.countryCode = countryCode;
    }

    async getWeather() {
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apikey}&units=metric`;
        const response = await fetch(URI);  
        return response.json();
    }

    changeLocation({city, countryCode}) {
        this.city = city;
        this.countryCode = countryCode;
    }
}