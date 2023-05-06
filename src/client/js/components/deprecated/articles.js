
// import the library (tell babel to transpile JSX to h() using calls):
import h from 'vhtml'; /** @jsx h */

// access json data (client-side) [IMPORTANT SHOULD BE CHANGED LATER]
const data = require('../../assets/json/trips.json');

/****************************************************************************/
/*                                                                          */
/*      JSX FUNCTION TEMPLATE for construction of TRIP ARTICLE MODULE       */
/*                                                                          */
/****************************************************************************/

// Using JSX template, this file function constructs each "trip article module"

function ArticlesTrip({value} = {}) {// why must values be in {} for this function to work

    const i_default = "default";
    const index = (value === undefined) ? i_default : value;

    const img_default = require('../../assets/img/d8aaa0719185b24ecb075332c57b69aac6d9cb7843bc005de2b363f5048f3529.jpg').default;
    const image = (index == "default") ? img_default : data[index].image; //replaces statically imported image with url path (API RELATED)

    const destination = data[index].destination;
    const departing = data[index].departing;

        const date = departing.split("/").reverse().join("-");                                                          // Converts date format from dd/mm/yyyy to yyyy-mm-dd
        const difference = ((Date.now() >= Date.parse(date))) ? 0 : (Date.parse(date)-Date.now() );                     // Calculates time difference in milisecond
        const days = Math.floor(difference/(24*60*60*1000));                                                            // Outputs the number of days remaining

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
                        <div className="departingTrip"><span className="boldText">Departure Date: </span>{departing}</div>
                    </div>
                    <div className="flightInfo">
                        <div className="flightInfoContainer">
                            <div>Flight Details:</div>
                            <div>
                                <div className="flightInfoData">{flight}</div>
                            </div>
                            <div className="editButton" data-index={index} onclick="return Client.editEntry(event)">edit</div>
                        </div>
                        <form action="" className="inputInfo, hidden" data-index={index}>
                            <textarea id="flight" name="flight" rows="5" placeholder="flight">{lodging}</textarea>
                            <div>
                            <input type="submit" value="submit" data-index={index} data-type="flight" onclick="return Client.submitEntry(event)"></input>
                            <input type="button" value="delete" data-index={index} data-type="flight" onclick="return Client.deleteEntry(event)"></input>
                            </div>
                        </form>
                    </div>
                    <div className="editTrip">             
                        <div className="saveTrip" data-index={index}><div>save trip</div></div> 
                        <div className="removeTrip" data-index={index} onclick="return Client.removeTrip(event)"><div>remove trip</div></div>
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
                    <div className="addButton" data-index={index} data-type="lodging"  onclick="return Client.openForm(event)">add lodging lists</div>
                    <div className="addButton" data-index={index} data-type="packages" onclick="return Client.openForm(event)">add package lists</div>
                    <div className="addButton" data-index={index} data-type="notes"    onclick="return Client.openForm(event)">add notes</div>
                </div>

                <div className="lodgingInfo, hidden">
                    <div className="lodgingInfoContainer, hidden">
                        <div>Lodging: </div>
                        <div>
                            <div className="lodgingInfoData">{lodging}</div>
                        </div>
                        <div className="editButton" data-index={index} onclick="return Client.editEntry(event)">edit</div>
                    </div>
                    <form action="" className="inputInfo, hidden" data-index={index}>
                        <textarea id="lodging" name="lodging" rows="5" placeholder="lodging">{lodging}</textarea>
                        <div>
                        <input type="submit" value="submit" data-index={index} data-type="lodging" onclick="return Client.submitEntry(event)"></input>
                        <input type="button" value="delete" data-index={index} data-type="lodging" onclick="return Client.deleteEntry(event)"></input>
                        </div>
                    </form>
                </div>

                <div className="packagesInfo, hidden">
                    <div className="packagesInfoContainer, hidden">
                        <div>Package List: </div>
                        <div>
                            <div className="packagesInfoData">{packages}</div>
                        </div>
                        <div className="editButton" data-index={index} onclick="return Client.editEntry(event)">edit</div>
                    </div>
                    <form action="" className="inputInfo, hidden" data-index={index}>
                        <textarea id="packages" name="packages" rows="5" placeholder="package list">{packages}</textarea>
                        <div>
                        <input type="submit" value="submit" data-index={index} data-type="packages" onclick="return Client.submitEntry(event)"></input>
                        <input type="button" value="delete" data-index={index} data-type="packages" onclick="return Client.deleteEntry(event)"></input>
                        </div>
                    </form>
                </div>

                <div className="notesInfo, hidden">
                    <div className="notesInfoContainer, hidden">
                        <div>Notes: </div>
                        <div>
                            <div className="notesInfoData">{notes}</div>
                        </div>
                        <div className="editButton" data-index={index} onclick="return Client.editEntry(event)">edit</div>
                    </div>
                    <form action="" className="inputInfo, hidden" data-index={index}>
                        <textarea id="notes" name="notes" rows="5" placeholder="notes">{notes}</textarea>
                        <div>
                        <input type="submit" value="submit" data-index={index} data-type="notes" onclick="return Client.submitEntry(event)"></input>
                        <input type="button" value="delete" data-index={index} data-type="notes" onclick="return Client.deleteEntry(event)"></input>
                        </div>
                    </form>
                </div>
        </div>
    </article>
    );

}
  
  export default ArticlesTrip