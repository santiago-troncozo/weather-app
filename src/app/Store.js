export class Store {
    constructor () {
        this.city;
        this.countryCode;
        this.defaultCity = 'London';
        this.defaultCountry = 'uk';
    }

    getLocationData() {
        if (!localStorage.getItem('city')) {
            this.city = this.defaultCity;
        } else {
            this.city = localStorage.getItem('city');
        }
        if (!localStorage.getItem('countryCode')) {
            this.countryCode = this.defaultCountry; 
        } else {
            this.countryCode = localStorage.getItem('countryCode');
        }
        return {
            city: this.city,
            countryCode: this.countryCode
        };
    }

    setLocationData({city, countryCode}) {
        localStorage.setItem('city', city);
        localStorage.setItem('countryCode', countryCode);
    }
}   