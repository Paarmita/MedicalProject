import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainRouter from './MainRouter';
import { isAuthenticated } from './Api';
import Navigation from './Components/Navbar';
import Footer from './Components/Footer';

// const App = () => (
// 	<BrowserRouter>
// 		<div>
// 			<Navigation />
// 			{isAuthenticated() ? (
// 				<div style={{ marginLeft: '165px', marginTop: '70px' }}>
// 					<MainRouter />
// 				</div>
// 			) : (
// 				<div style={{ marginTop: '70px' }}>
// 					<MainRouter />
// 				</div>
// 			)}
// 			<Footer />
// 		</div>
// 	</BrowserRouter>
// );

// export default App;

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Navigation />
					{isAuthenticated() ? (
						<div style={{ marginLeft: '160px', marginTop: '70px' }}>
							<MainRouter />
						</div>
					) : (
						<div style={{ marginTop: '70px' }}>
							<MainRouter />
						</div>
					)}
					<Footer />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
