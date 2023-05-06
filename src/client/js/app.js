import ArticlesTrip from './components/articles';
import neweventListerners from './components/eventListeners';

        /************************************************************************/
        /* This function scrolls to the Add Trip form at the bottom of the page */
        /************************************************************************/

        const createTrip = () => {

            document.getElementById('root').innerHTML = ArticlesTrip();
            neweventListerners.addEventFunctionsToArticles("default");
            neweventListerners.addEventFunctionsToPage();

        }


const appJS = {createTrip};
export default appJS;