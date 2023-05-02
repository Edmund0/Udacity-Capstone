
/*************************************************************************************/
/* This file contains functions for interacting with and modifying the json database */
/*************************************************************************************/

    // The intention is to abstract the database access and functionality form the rest of the code.
    // Therefore, this file can be edited to support other forms of database (other than JSON) or have JSON be on the server-side.


    //PROBLEM: REMEMBER FIGURE OUT HOW TO GET WEBPACK TO MOVE THE JSON INTO THE DIST BUILD

    // access json data (client-side) [IMPORTANT SHOULD BE CHANGED LATER]
    import data from '../../assets/json/trips.json';


    const removeTrip = (index) => {

        if (index === "default") {

            return false

        } else {

            delete data[index];

        }

    }

    const addTrip = (index, img, destination, departing, forecast, highest, lowest) => {

        const img_default = require('../../assets/img/d8aaa0719185b24ecb075332c57b69aac6d9cb7843bc005de2b363f5048f3529.jpg').default;

        const entry = {
            image: `${(img === undefined) ? img_default : img}`,
            destination: destination,
            departing: departing,
            forecast: forecast,
            highest: highest,
            lowest: lowest,
            lodging: "",
            packages: "",
            notes: "",
        };

        data[index] = entry;

    }

    const addInfo = (index, type, info) => {

        switch (type) {
            case "lodging":     data[index].lodging = info;     return true;
            case "packages":    data[index].packages = info;    return true;
            case "notes":       data[index].notes = info;       return true;
            default:                                            return false;
        }

    }

    const removeInfo = (index, type) => {

        switch (type) {
            case "lodging":     delete data[index].lodging;     return true;
            case "packages":    delete data[index].packages;    return true;
            case "notes":       delete data[index].notes;       return true;
            default:                                            return false;
        }

    }


    export default database = {removeTrip, addTrip, addInfo, removeInfo};