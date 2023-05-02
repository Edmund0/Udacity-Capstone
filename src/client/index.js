// import the library (tell babel to transpile JSX to h() using calls):
import h from 'vhtml';
/** @jsx h */

import './styles/index.scss'
import ArticlesTrip from './js/components/articles';

function App() {
	return (
        <div>
        <ArticlesTrip></ArticlesTrip>
        </div>

    );
}

document.getElementById('root').innerHTML = App();

//alert("I EXIST")
console.log("CHANGE!!");

export{

    }

