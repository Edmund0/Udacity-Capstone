
// import the library (tell babel to transpile JSX to h() using calls):
import h from 'vhtml';
/** @jsx h */

// access json data (client-side) [IMPORTANT SHOULD BE CHANGED LATER]
import data from '../../assets/json/trips.json';


function ArticlesTrip({value}) {

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
                        <div>Flight Details:</div>
                        <div>
                            {/* PLEASE WORK ON THIS SECTION LATER!! FLIGHT DETAILS NEEDS SOME THOUGHT || ALSO ADD "data-index={index}" to it*/}
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="editTrip">             
                        <div className="saveTrip"><div>save trip</div></div> 
                        <div className="removeTrip"><div>remove trip</div></div>
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
                    <div className="addButton" data-index={index}>add lodging lists</div>
                    <div className="addButton" data-index={index}>add package lists</div>
                    <div className="addButton" data-index={index}>add notes</div>
                </div>

                <div className="lodgingInfo, hidden">
                    <div className="lodgingInfoContainer, hidden">
                        <div>Lodging: </div>
                        <div>
                            <div>{lodging}</div>
                        </div>
                        <div className="editButton" data-index={index}>edit</div>
                    </div>
                    <form action="" className="inputInfo, hidden" data-index={index}>
                        <textarea id="package" name="package" rows="5" placeholder="lodging">{lodging}</textarea>
                        <div>
                        <input type="submit" value="submit" data-index={index}></input>
                        <input type="button" value="delete" data-index={index}></input>
                        </div>
                    </form>
                </div>

                <div className="packageInfo, hidden">
                    <div className="packageInfoContainer, hidden">
                        <div>Package List: </div>
                        <div>
                            <div>{packages}</div>
                        </div>
                        <div className="editButton" data-index={index}>edit</div>
                    </div>
                    <form action="" className="inputInfo, hidden" data-index={index}>
                        <textarea id="package" name="package" rows="5" placeholder="package list">{packages}</textarea>
                        <div>
                        <input type="submit" value="submit" data-index={index}></input>
                        <input type="button" value="delete" data-index={index}></input>
                        </div>
                    </form>
                </div>

                <div className="notesInfo, hidden">
                    <div className="notesInfoContainer, hidden">
                        <div>Notes: </div>
                        <div>
                            <div>{notes}</div>
                        </div>
                        <div className="editButton" data-index={index}>edit</div>
                    </div>
                    <form action="" className="inputInfo, hidden" data-index={index}>
                        <textarea id="package" name="package" rows="5" placeholder="notes">{notes}</textarea>
                        <div>
                        <input type="submit" value="submit" data-index={index}></input>
                        <input type="button" value="delete" data-index={index}></input>
                        </div>
                    </form>
                </div>
        </div>
    </article>
    );

}
  
  export default ArticlesTrip