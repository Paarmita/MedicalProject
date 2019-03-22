// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import './App.css';
// import App from './App';

// import CelebrityJokes from './Components/celebrity_jokes';
// import FoodJokes from './Components/food_jokes';
// import Login     from './Components/user_login';
// import Register     from './Components/user_register';
// import Diseases from './Components/Diseases/Diseases'
// import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';

// const Root = () => {
//   return (
//     <div className="container">
//       <Router>
//       	<Switch>

//           <Route path="/login" component={Login}/>
//           <Route path="/diseases" component={Diseases}/>

//           <Route path="/register" component={Register}/>

// 	    </Switch>
//       </Router>
//     </div>
//   )
// }

// ReactDOM.render(<Root />, document.getElementById('root'))

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('root'),
);
