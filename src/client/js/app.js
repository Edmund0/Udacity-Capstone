

// addTrip Function (Scrolls to Aside)
// remove Trip Function (deletes entry in JSON, reorganize JSON -optional, delete article tag in html)
// addList Function (add hidden to self, remove hidden from form)
// add button submit (add entry to JSON, add entry to html)
// add button remove (delete entry in JSON, remove entry in html, add hidden to form, remove hidden from addList)
// edit button (remove hidden from form, add hidden to group)


        /************************************************************************/
        /* This function scrolls to the Add Trip form at the bottom of the page */
        /************************************************************************/

        const scrollOnClick = (event) => {

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

        /************************************************************************/
        /* This function scrolls to the Add Trip form at the bottom of the page */
        /************************************************************************/

        const removeTrip = (event) => {

            event.target.getAttribute(d);

        }