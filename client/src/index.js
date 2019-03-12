import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App';

import CelebrityJokes from './Components/celebrity_jokes';
import FoodJokes from './Components/food_jokes';
import Login     from './Components/user_login';
import Register     from './Components/user_register';

import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';


const Root = () => {
  return (
    <div className="container">
      <Router>
      	<Switch>

      		<Route path="/celebrityjokes" component={CelebrityJokes}/>
          <Route path="/login" component={Login}/>

          <Route path="/register" component={Register}/>
	        <Route exact path="/" component={FoodJokes}/>

	        
	    </Switch>
      </Router>
    </div>
  )
}


ReactDOM.render(<Root />, document.getElementById('root'))

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// //import registerServiceWorker from './registerServiceWorker';
// import { BrowserRouter } from 'react-router-dom';

// ReactDOM.render((
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
//   ), document.getElementById('root'));