
/*************************************************************************************/
/* This file contains functions for interacting with and modifying the json database */
/*************************************************************************************/

    // The intention is to abstract the database access and functionality form the rest of the code.
    // Therefore, this file can be edited to support other forms of database (other than JSON) or have JSON be on the server-side.

    //PROBLEM: REMEMBER FIGURE OUT HOW TO GET WEBPACK TO MOVE THE JSON INTO THE DIST BUILD

    // access json data (client-side) [IMPORTANT SHOULD BE CHANGED LATER]
    // const data = require('../../assets/json/trips.json');
    import data from '../../assets/json/trips.json'
    import imageDefault from '../../assets/img/d8aaa0719185b24ecb075332c57b69aac6d9cb7843bc005de2b363f5048f3529.jpg'


        /********************************************************************************/
        /* This function find a valid index that does not already exist in the database */
        /********************************************************************************/

        const generateIndex = () => {//creates a numerical string that doesn't already exist in the index

                const dataNames = Object.keys(data); // creates an array of the top-level propert names of the json file

                let index = 1;
                
                while (dataNames.includes(`p${index.toString()}`)) {// checks if numerical string is already in the json database

                    index++; // increments index to check the next numerical string

                }

                index = `p${index.toString()}`

                return index.toString();

        }


    const addTrip = (img, destination, departing, forecast, highest, lowest) => {

        const index = generateIndex();
        // const img_default = require('../../assets/img/d8aaa0719185b24ecb075332c57b69aac6d9cb7843bc005de2b363f5048f3529.jpg').default;
        const img_default = imageDefault;

        const entry = {
            image: `${(img === undefined) ? img_default : img}`,
            destination: destination,
            departing: departing,
            forecast: forecast,
            highest: highest,
            lowest: lowest,
            flight: "",
            lodging: "",
            packages: "",
            notes: "",
        };

        data[index] = entry;
        return index;

    }

    const removeTrip = (index) => {

        if (index === "default") {// Default entry must not be modified

            return false;

        } else {

            delete data[index];
            return true;

        }

    }

    const addInfo = (index, type, info) => {

        if (index === "default") {// Default entry must not be modified

            return false;

        } else {

            switch (type) {
                case "flight":      data[index].flight = info;      return true;
                case "lodging":     data[index].lodging = info;     return true;
                case "packages":    data[index].packages = info;    return true;
                case "notes":       data[index].notes = info;       return true;
                default:                                            return false;
            }

        }

    }

    const removeInfo = (index, type) => {

        if (index === "default") {// Default entry must not be modified

            return false;

        } else {

            switch (type) {
                case "flight":      data[index].flight   = "";      return true;
                case "lodging":     data[index].lodging  = "";      return true;
                case "packages":    data[index].packages = "";      return true;
                case "notes":       data[index].notes    = "";      return true;
                default:                                            return false;
            }

        }

    }

    const database = {addTrip, removeTrip, addInfo, removeInfo};
    export default database;