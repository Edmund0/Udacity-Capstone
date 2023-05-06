/**********************************************/
/*      BASIC ENVIRONMENT VARIABLE SETUP      */
/**********************************************/

const dotenv = require('dotenv');
dotenv.config();
const Geo_API = process.env.Geo_API;
const Weatherbit_API = process.env.Weatherbit_API;
const Pixabay_API = process.env.Pixabay_API;


/**********************************************/
/*      BASIC ROUTE SETUP FOR REQUIRED API    */
/**********************************************/

    /* BASIC ROUTES FOR GEONAMES API */
    const geonames = async (formData) => {
        
        const q = formData;
        const username = Geo_API;
        const url = `http://api.geonames.org/searchJSON?q=${q}&username=${username}`;
  
        const response = await fetch(url)
            .then(response => response.json())
            .then(response => response)

        return response

    }

    /* BASIC ROUTES FOR WEATHERBIT API */
    const weatherbit = async (formCity = undefined, formCountry = undefined) => {

        let formdata = "";
        if   ((formCity === undefined)&&(formCountry === undefined))    {formdata = formdata.concat(`city=Raleigh,US`);}
        else
        if   (formCity === undefined)                                   {formdata = formdata.concat(`country=${formCountry}`);} 
        else                                
        if   (formCountry === undefined)                                {formdata = formdata.concat(`city=${formCity}`);} 
        else                                                            {formdata = formdata.concat(`city=${formCity},${formCountry}`);};

        const API_KEY = Weatherbit_API
        const url = `https://api.weatherbit.io/v2.0/forecast/daily?${formdata}&key=${API_KEY}`;

        const response =  await fetch(url)
            .then(response => response.json())
            .then(response => response)

        return response

    }

    /* BASIC ROUTES FOR PIXARBAY API */
    const pixabay = async (formCity = undefined, formCountry = undefined) => {

        // let formdata = "";
        // if   ((formCity === undefined)&&(formCountry === undefined))    {formdata = formdata.concat(`q=yellow+flower`);}
        // else
        // if   (formCity === undefined)                                   {formdata = formdata.concat(`q=${formCountry}`);} 
        // else                                
        // if   (formCountry === undefined)                                {formdata = formdata.concat(`q=${formCity}`);} 
        // else                                                            {formdata = formdata.concat(`q=${formCity}+${formCountry}`);};

        let formdata = "";
        if   ((formCity === undefined)&&(formCountry === undefined))    {formdata = formdata.concat(`q=yellow+flower`);}
        else
        if   (formCity === undefined)                                   {formdata = formdata.concat(`q=${formCountry}`);} 
        else                                                            {formdata = formdata.concat(`q=${formCity}`);} 

        const API_KEY = Pixabay_API
        const url = `https://pixabay.com/api/?key=${API_KEY}&${formdata}`;

        const response = await fetch(url)
            .then(response => response.json())
            .then(response => response)

        return response
        
    }


/**********************************************/
/*      BASIC ROUTE SETUP FOR REQUIRED API    */
/**********************************************/


const generalAnalysis = async (formData) => {

    const geoResponse = await geonames(formData);

    const lat =             geoResponse.geonames[0].lat;
    const lng =             geoResponse.geonames[0].lng;
    const formCity =        geoResponse.geonames[0].name;
    const formCountry =     geoResponse.geonames[0].countryCode;
    const formCountryFull = geoResponse.geonames[0].countryName;

    const bitResponse = await weatherbit(formCity, formCountry);

    const low =             bitResponse.data[0].low_temp
    const high =            bitResponse.data[0].high_temp
    const weather =         bitResponse.data[0].weather.description

    const bayResponse = await pixabay(formCity, formCountry); // problem has to do with you!!

    const url =             bayResponse.hits[0].webformatURL;

    const newData = {lat, lng, formCity, formCountry, formCountryFull, low, high, weather, url};

    return newData;

}

module.exports = generalAnalysis