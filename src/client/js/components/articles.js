
// import the library (tell babel to transpile JSX to h() using calls):
import h from 'vhtml'; /** @jsx h */

// access json data (client-side) [IMPORTANT SHOULD BE CHANGED LATER]
// const data = require('../../assets/json/trips.json');

import data from '../../assets/json/trips.json'
import imageDefault from '../../assets/img/d8aaa0719185b24ecb075332c57b69aac6d9cb7843bc005de2b363f5048f3529.jpg'

/****************************************************************************/
/*                                                                          */
/*      JSX FUNCTION TEMPLATE for construction of TRIP ARTICLE MODULE       */
/*                                                                          */
/****************************************************************************/

// Using JSX template, this file function constructs each "trip article module"

function ArticlesTrip(value = undefined) {// why must values be in {} for this function to work

    const i_default = "default";
    const index = (value === undefined) ? i_default : value;

    // const img_default = require('../../assets/img/d8aaa0719185b24ecb075332c57b69aac6d9cb7843bc005de2b363f5048f3529.jpg').default;
    const img_default = imageDefault;
    const image = (index == "default") ? img_default : data[index].image; //replaces statically imported image with url path (API RELATED)

    const destination = data[index].destination;
    const departing = data[index].departing;

        const date = departing.split("/").reverse().join("-");                                                          // Converts date format from dd/mm/yyyy to yyyy-mm-dd
        const difference = ((Date.now() >= Date.parse(date))) ? 0 : (Date.parse(date)-Date.now() );                     // Calculates time difference in milisecond
        const days = Math.floor(difference/(24*60*60*1000));                                                            // Outputs the number of days remaining
        const depatureDate = date.split("-").reverse().join("-");

    const forecast = data[index].forecast;
    const highest = data[index].highest.toString();
    const lowest = data[index].lowest.toString();
    const flight = data[index].flight;
    const lodging = data[index].lodging;
    const packages = data[index].packages;
    const notes = data[index].notes;

    return (
    <article className="tripContainer" data-index={index}>
        <div className="tripCard">
                <img src={image} alt=""></img>

                <div className="tripMain">
                    <div className="summaryTrip">                        
                        <div className="destinationTrip"><span className="boldText">Destination: </span>{destination}</div>
                        <div className="departingTrip"><span className="boldText">Departure Date: </span>{depatureDate}</div>
                    </div>
                    <div className="flightInfo">
                        <div className="flightInfoContainer">
                            <div>Flight Details:</div>
                            <div>
                                <div className="flightInfoData infoData">{flight}</div>
                            </div>
                            <div className="editButton" data-index={index} data-type="flight">edit</div>
                        </div>
                        <form action="" className="inputInfo hidden" data-index={index} data-type="flight">
                            <textarea id="flight" name="flight" rows="5" placeholder="flight">{lodging}</textarea>
                            <div>
                            <input type="button" value="submit" data-index={index} data-type="flight"></input>
                            <input type="button" value="delete" data-index={index} data-type="flight"></input>
                            </div>
                        </form>
                    </div>
                    <div className="editTrip">             
                        <div className="cancelTrip" data-index={index}><div>cancel trip</div></div> 
                        <div className="removeTrip" data-index={index}><div>remove trip</div></div>
                    </div>
                </div>


                <div className="tripAside">
                    <div><span>{destination}</span> is {days} days away</div>
                    <div>
                        <div>Expected Weather:</div>
                        <div className="forecastContent">
                        <div>
                            <div>Low: <span>{highest}</span><span>&#8451;</span></div>
                            <div>High: <span>{lowest}</span><span>&#8451;</span></div>
                        </div>
                        <div>{forecast}</div>
                        </div>
                    </div>
                </div>


                <div className="infoOption">
                    <div className="addButton" data-index={index} data-type="lodging"  >add lodging lists</div>
                    <div className="addButton" data-index={index} data-type="packages" >add package lists</div>
                    <div className="addButton" data-index={index} data-type="notes"    >add notes</div>
                </div>

                <div className="lodgingInfo hidden">
                    <div className="lodgingInfoContainer hidden">
                        <div>Lodging: </div>
                        <div>
                            <div className="lodgingInfoData infoData">{lodging}</div>
                        </div>
                        <div className="editButton" data-index={index} data-type="lodging">edit</div>
                    </div>
                    <form action="" className="inputInfo hidden" data-index={index} data-type="lodging">
                        <textarea id="lodging" name="lodging" rows="5" placeholder="lodging">{lodging}</textarea>
                        <div>
                        <input type="button" value="submit" data-index={index} data-type="lodging"></input>
                        <input type="button" value="delete" data-index={index} data-type="lodging"></input>
                        </div>
                    </form>
                </div>

                <div className="packagesInfo hidden">
                    <div className="packagesInfoContainer hidden">
                        <div>Package List: </div>
                        <div>
                            <div className="packagesInfoData infoData">{packages}</div>
                        </div>
                        <div className="editButton" data-index={index} data-type="packages">edit</div>
                    </div>
                    <form action="" className="inputInfo hidden" data-index={index} data-type="packages">
                        <textarea id="packages" name="packages" rows="5" placeholder="package list">{packages}</textarea>
                        <div>
                        <input type="button" value="submit" data-index={index} data-type="packages"></input>
                        <input type="button" value="delete" data-index={index} data-type="packages"></input>
                        </div>
                    </form>
                </div>

                <div className="notesInfo hidden">
                    <div className="notesInfoContainer hidden">
                        <div>Notes: </div>
                        <div>
                            <div className="notesInfoData infoData">{notes}</div>
                        </div>
                        <div className="editButton" data-index={index} data-type="notes">edit</div>
                    </div>
                    <form action="" className="inputInfo hidden" data-index={index} data-type="notes">
                        <textarea id="notes" name="notes" rows="5" placeholder="notes">{notes}</textarea>
                        <div>
                        <input type="button" value="submit" data-index={index} data-type="notes"></input>
                        <input type="button" value="delete" data-index={index} data-type="notes"></input>
                        </div>
                    </form>
                </div>
        </div>
    </article>
    );

}
  
  export default ArticlesTrip