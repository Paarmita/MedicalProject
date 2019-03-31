import HomePage from '../Home/Home';
import ProfilePage from '../AboutUs/AboutUs';

const Routes = [
	{
		path: '/dashboard/home',
		sidebarName: 'Home',
		navbarName: 'Home',
		component: HomePage,
	},
	{
		path: '/dashboard/profile',
		sidebarName: 'Profile',
		navbarName: 'Profile',
		component: ProfilePage,
	},
];

export default Routes;
