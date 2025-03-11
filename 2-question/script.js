const countries = require('./countries.json');

function highestAndLowest(countries) {
    const highestAndLowestCountry = countries.reduce((acc, country) => {
        const countryName = country.name.common
        const region = country.region;

        if (acc[region]) {
            if (acc[region].highestCountry < country.area) {
                acc[region].highestCountry =
                acc[region].highestCountry < country.area ? country.area : acc[region].highestCountry;
                acc[region].highestCountryName = countryName;
            }

            if(acc[region].lowestCountry > country.area ){
                acc[region].lowestCountry =
                acc[region].lowestCountry > country.area ? country.area : acc[region].lowestCountry
    
                acc[region].lowestCountryName = countryName;
            }
           

        }
        else {
            acc[region] = {
                highestCountryName: "India",
                highestCountry: -Infinity,
                lowestCountryName: "India",
                lowestCountry: Infinity
            }
        }


        return acc;
    }, {});
    return highestAndLowestCountry
}
console.log(highestAndLowest(countries));

