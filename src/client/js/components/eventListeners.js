
/************************************************************************/
/*                                                                      */
/*  This file contains the callback functions for the "eventListeners"  */
/*                                                                      */
/************************************************************************/

import database from "./database.js"
import handleSubmit from "./handlesubmission.js"
import ArticlesTrip from './articles';

// addTrip functionality (clicking should scroll screen to aside)
// submitTrip functionality (clicking should: add data to JSON, build template, add template, scroll to template head, reset/remove content from form)
// remove Trip Function (deletes entry in JSON [except default], delete article tag in html, [optional] pop-up alert ask if you are sure!)


        /************************************************************************/
        /* This function scrolls to the Add Trip form at the bottom of the page */
        /************************************************************************/

        const addTrip_scrollOnClick = (event) => {

            event.preventDefault();

            let anchorTarget = document.querySelector("aside");
             
            anchorTarget.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            })

            /* RESPONSIVE CODE MODIFICATION - ScrollIntoView does not have an Offset; Mobile Screens has some of the */
            let offsetHeader = document.querySelector('header').offsetHeight;
            window.scrollTo({
                behavior: 'smooth',
                top:
                  document.querySelector("aside").getBoundingClientRect().top - document.body.getBoundingClientRect().top - offsetHeader,
              })

        }
        
        /**********************************************************/
        /* This function submits the content of the Add Trip form */
        /**********************************************************/

        const submitTrip = async () => {

            const destination = document.getElementById("name").value
            const departing = document.getElementById("date").value

            // DELETE CONTENT FROM THE INPUT (RESET THE FORM)
            document.getElementById("name").value = ""
            document.getElementById("date").value = ""

                // FETCH REQUEST TO SERVER TO GET MORE INFORMATION [WEATHER DATA, IMAGE URL, AND SO ON] [* INFRASTRUCTURE NEED TO BE BUILT *]
                    // USE HANDLE SUBMIT TO SEND FORMDATA AND RECIEVE NEWDATA (FORMATED)

                const newData = await handleSubmit(destination);
            
            if (JSON.stringify(newData) === JSON.stringify({error: "invalid destination"})) {

                // console.log(newData);
                alert("The destination entered is invalid, please check the spelling and try again!");

            } else if (newData.hasOwnProperty("error")) {

                console.log(newData);

            } else {

                // ADD INFORMATION TO JSON DATA
                const index = database.addTrip(newData.url, `${newData.formCity}, ${newData.formCountry}`, departing, newData.weather, newData.high, newData.low);

                // BUILD TEMPLATE USING ARTICLES
                // ADD TEMPLATE TO HTML (REPAINT AND REFLOW)
                document.getElementById('root').insertAdjacentHTML("afterbegin", ArticlesTrip(index)); // UNHANDLED PROMISE REJECTION » Unhandled Promise Rejection: SyntaxError: The string did not match the expected pattern.
                neweventListerners.addEventFunctionsToArticles(index);

                // NOTE » I have isolated the unhandled promise rejection. It has to do with the " document.getElementById('root').insertAdjacentHTML("afterbegin", ArticlesTrip(index));"
                    // However, it has nothing to do with "ArticlesTrip(index)"
                    // I tested this by running: document.getElementById('root').insertAdjacentHTML("afterbegin", ""); 
                    // This code still gave the same error message


            }


            // SCROLL TO THE HEAD OF TEMPLATE

        }

        /************************************************************************/
        /* This function scrolls to the Add Trip form at the bottom of the page */
        /************************************************************************/

        const cancelTrip = (event) => {

            const index = event.currentTarget.getAttribute("data-index");
            // Annoying Debuging Problem: https://stackoverflow.com/questions/52177765/e-target-calling-wrong-target

            if (confirm("Are you sure you want to cancel trip!")) {// [optional] pop-up alert ask if you are sure!

                // ADD FUNCTION TO FORCE THE TRIP INTO EXPIRED MODE (ALTERNATELY USE A CUSTOM CSS STATE)
                    document.querySelector(`article[data-index=${index}]`).classList.add('cancelled');
                    // CREATE EXPIRE MODE (CSS CLASS WITH IMPORTANT) [OPTIONAL]
                    // CREATE FUNCTION TO AUTOMATICALLY CHECK IF EXPIRED [OPTIONAL]
                    // USE ".Cancelled" and add it to the articles tag for the data-index!

                return true
              } else {
                return false
              }

        }

        const removeTrip = (event) => {

            const index = event.currentTarget.getAttribute("data-index");
            // Annoying Debuging Problem: https://stackoverflow.com/questions/52177765/e-target-calling-wrong-target

            if (confirm("Are you sure you want to delete trip!")) {// [optional] pop-up alert ask if you are sure!
                database.removeTrip(index); // deletes entry in JSON [except default]
                document.querySelector(`article[data-index=${index}]`).remove(); // delete article tag in html
                return true
              } else {
                return false
              }

        }


        /************************************************************************/
        /*  These exist to assit in adding info in one of the three info types  */
        /************************************************************************/

        // openForm [addListForm Function] (add hidden to self, remove hidden from form)
        // submitEntry [inputInfo submit] (add entry to JSON, add entry to html)
        // deleteEntry [inputInfo delete] (delete entry in JSON, remove entry in html, add hidden to form, remove hidden from addButton)
        // editEntry [editButton] (remove hidden from form, add hidden to group)

        const openForm = (event) => {

            const index = event.target.getAttribute("data-index");
            const type = event.target.getAttribute("data-type");

            const formElement =  document.querySelector(`[data-index=${index}] div.${type}Info form`);
            const gridContainer =  document.querySelector(`[data-index=${index}] div.${type}Info`);
            const addButton =  document.querySelector(`[data-index=${index}] div.infoOption [data-type=${type}]`);
            const infoOption =  document.querySelector(`[data-index=${index}] div.infoOption`);
           
            addButton.classList.add("hidden");         // add hidden to self

            gridContainer.classList.remove("hidden");  // remove hidden from grid item
            formElement.classList.remove("hidden");    // remove hidden from form

            const isInfoOptionNotEmpty = document.body.contains(document.querySelector(`[data-index=${index}] div.infoOption > div:not(div.hidden)`));
            if (!(isInfoOptionNotEmpty)) {             // if all options have been selected
                infoOption.classList.add("hidden");    // makes the InfoOption Element hidden
            }


        }

        const deleteEntry = (event) => {

            const index = event.target.getAttribute("data-index");
            const type = event.target.getAttribute("data-type");

            database.removeInfo(index, type);           // delete entry in JSON

            const formElement =  document.querySelector(`[data-index=${index}] div.${type}Info form`);
            const gridContainer =  document.querySelector(`[data-index=${index}] div.${type}Info`);
            const addButton =  document.querySelector(`[data-index=${index}] div.infoOption [data-type=${type}]`);
            const infoOption =  document.querySelector(`[data-index=${index}] div.infoOption`);
            const infoData =  document.querySelector(`[data-index=${index}] div.${type}InfoData`);

            infoData.innerText = "";                    // remove entry in html

            if (type !== "flight") {

                gridContainer.classList.add("hidden");  // add hidden from grid item
                formElement.classList.add("hidden");    // add hidden to form
    
                addButton.classList.remove("hidden");   // remove hidden from addButton
                infoOption.classList.remove("hidden");  // Ensures the InfoOption Element is visible

            } else {// Create similar functions for the Flight Info (they need to modified)

                const infoContainer =  document.querySelector(`[data-index=${index}] div.${type}InfoContainer`);

                formElement.classList.add("hidden");         // remove hidden to form
                infoContainer.classList.remove("hidden");          // add hidden to infoContainer

            }

        }

        const submitEntry = (event) => {

            const index = event.target.getAttribute("data-index");
            const type = event.target.getAttribute("data-type");
            
            const textAreaElement = document.querySelector(`form[data-index=${index}][data-type=${type}] textarea`);
            const info = textAreaElement.value;

            database.addInfo(index, type, info);    //add entry to JSON

            const formElement =  document.querySelector(`[data-index=${index}] div.${type}Info form`);
            const infoContainer =  document.querySelector(`[data-index=${index}] div.${type}InfoContainer`);
            const infoData =  document.querySelector(`[data-index=${index}] div.${type}InfoData`);

            infoData.innerText = info;                   // add entry in html
            formElement.classList.add("hidden");         // add hidden to form
            infoContainer.classList.remove("hidden");    // remove hidden to infoContainer

        }

        const editEntry = (event) => {

            const index = event.target.getAttribute("data-index");
            const type = event.target.getAttribute("data-type");

            const formElement =  document.querySelector(`[data-index=${index}] div.${type}Info form`);
            const infoContainer =  document.querySelector(`[data-index=${index}] div.${type}InfoContainer`);

            infoContainer.classList.add("hidden");          // add hidden to infoContainer
            formElement.classList.remove("hidden");         // remove hidden to form

        }

        /************************************************************************/
        /*  These exist to add the event listerner  */
        /************************************************************************/

        const addEventFunctionsToArticles = (index) => {

            const editButtons =  document.querySelectorAll(`div.editButton[data-index=${index}]`);
            
            for (var i = 0; i < editButtons.length; i++) {
                const editButton = editButtons[i];
                editButton.addEventListener("click", editEntry);
            }

            const submitButtons =  document.querySelectorAll(`input[value="submit"][data-index=${index}]`);
            for (var i = 0; i < submitButtons.length; i++) {
                const submitButton = submitButtons[i];
                submitButton.addEventListener("click", submitEntry);
            }

            const deleteButtons =  document.querySelectorAll(`input[value="delete"][data-index=${index}]`);
            for (var i = 0; i < deleteButtons.length; i++) {
                const deleteButton = deleteButtons[i];
                deleteButton.addEventListener("click", deleteEntry);
            }

            const addButtons =  document.querySelectorAll(`[data-index=${index}] div.infoOption .addButton`);
            for (var i = 0; i < addButtons.length; i++) {
                const addButton = addButtons[i];
                addButton.addEventListener("click", openForm);
            }

            const removeTripButton =  document.querySelector(`div.removeTrip[data-index=${index}]`);
            removeTripButton.addEventListener("click", removeTrip);

            const cancelTripButton =  document.querySelector(`div.cancelTrip[data-index=${index}]`);
            cancelTripButton.addEventListener("click", cancelTrip);

        }

        const addEventFunctionsToPage = () => {

            const addButton = document.querySelector(`div.addButton`);
            const submitButton = document.querySelector(`div.submit > input[value="submit"]`);

            addButton.addEventListener("click", addTrip_scrollOnClick);
            submitButton.addEventListener("click", submitTrip);

        }

const neweventListerners = {addEventFunctionsToPage, addEventFunctionsToArticles};

export default neweventListerners;
