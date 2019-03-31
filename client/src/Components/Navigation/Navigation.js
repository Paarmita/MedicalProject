/* eslint-disable lines-between-class-members */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// https://codesandbox.io/s/l41krpz847
// https://codesandbox.io/s/vj2moln9ny
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import logo from '../../Images/logo.svg';

const drawerWidth = 240;

const styles = theme => ({
	root: {
		display: 'flex',
		flexGrow: 1,
		width: '100%',
	},
	grow: {
		flexGrow: 1,
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing.unit * 3,
	},
	toolbar: theme.mixins.toolbar,
	menuButton: {
		marginLeft: -12,
		marginRight: 20,
	},
	title: {
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block',
		},
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginRight: theme.spacing.unit * 2,
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing.unit * 3,
			width: 'auto',
		},
	},
	searchIcon: {
		width: theme.spacing.unit * 9,
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'inherit',
		width: '100%',
	},
	inputInput: {
		paddingTop: theme.spacing.unit,
		paddingRight: theme.spacing.unit,
		paddingBottom: theme.spacing.unit,
		paddingLeft: theme.spacing.unit * 10,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: 200,
		},
	},
	sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'flex',
		},
	},
	sectionMobile: {
		display: 'flex',
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
});
class Navigation extends React.Component {
	state = {
		anchorEl: null,
		mobileMoreAnchorEl: null,
	};

	handleProfileMenuOpen = event => {
		this.setState({ anchorEl: event.currentTarget });
	};

	handleMenuClose = () => {
		this.setState({ anchorEl: null });
		this.handleMobileMenuClose();
	};

	handleMobileMenuOpen = event => {
		this.setState({ mobileMoreAnchorEl: event.currentTarget });
	};

	handleMobileMenuClose = () => {
		this.setState({ mobileMoreAnchorEl: null });
	};
	render() {
		const { anchorEl, mobileMoreAnchorEl } = this.state;
		const { classes } = this.props;
		const isMenuOpen = Boolean(anchorEl);
		const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

		const renderMenu = (
			<Menu
				anchorEl={anchorEl}
				anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
				transformOrigin={{ vertical: 'top', horizontal: 'right' }}
				open={isMenuOpen}
				onClose={this.handleMenuClose}
			>
				<MenuItem onClick={this.handleMenuClose}>Settings</MenuItem>
				<MenuItem onClick={this.handleMenuClose}>Terms of use</MenuItem>
				<MenuItem onClick={this.handleMenuClose}>Privacy Policy</MenuItem>
				<MenuItem onClick={this.handleMenuClose}>Logout</MenuItem>
			</Menu>
		);

		const renderMobileMenu = (
			<Menu
				anchorEl={mobileMoreAnchorEl}
				anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
				transformOrigin={{ vertical: 'top', horizontal: 'right' }}
				open={isMobileMenuOpen}
				onClose={this.handleMenuClose}
			>
				<MenuItem onClick={this.handleMobileMenuClose}>
					<IconButton color="inherit">
						<Badge badgeContent={4} color="secondary">
							<MailIcon />
						</Badge>
					</IconButton>
					<p>Messages</p>
				</MenuItem>
				<MenuItem onClick={this.handleMobileMenuClose}>
					<IconButton color="inherit">
						<Badge badgeContent={11} color="secondary">
							<NotificationsIcon />
						</Badge>
					</IconButton>
					<p>Notifications</p>
				</MenuItem>
				<MenuItem onClick={this.handleProfileMenuOpen}>
					<IconButton color="inherit">
						<AccountCircle />
					</IconButton>
					<p>Profile</p>
				</MenuItem>
			</Menu>
		);
		return (
			<div className={classes.root}>
				<CssBaseline />
				<AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
		  <IconButton
							className={classes.menuButton}
							color="inherit"
							aria-label="Menu"
						>
							<img alt="card" height="40" width="40" src={logo} />
    </IconButton>
						<Typography variant="h6" color="inherit" className={classes.grow}>
							Umbrella Health
						</Typography>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
			<Button color="inherit">Home</Button>
						<Button color="inherit">About Us</Button>
						<Button color="inherit">Diseases</Button>
						<Button color="inherit">BLog</Button>
						<Button color="inherit">Pathy</Button>
						<Button color="inherit">Contact Us</Button>
              <IconButton color="inherit">
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
    </AppBar>
		{renderMenu}
        {renderMobileMenu}
				<Drawer
					className={classes.drawer}
					variant="permanent"
					classes={{
						paper: classes.drawerPaper,
					}}
				>
					<div className={classes.toolbar} />
					<List>
						{['Dashboard', 'Profile', 'What I posted', 'What I follow'].map(
							(text, index) => (
								<ListItem button key={text}>
									<ListItemText primary={text} />
								</ListItem>
							),
						)}
					</List>
					<MenuItem>
						{' '}
						<a href="/navbar">Dashboard </a>
					</MenuItem>
					<MenuItem>
						{' '}
						<a href="/profile">Profile </a>
					</MenuItem>
					<MenuItem>
						{' '}
						<a href="/posted">What I posted </a>
					</MenuItem>
					<MenuItem>
						{' '}
						<a href="/follow">What I follow </a>
					</MenuItem>
					<Divider />
					<List>
						{['Share Experience', 'Ask Suggestion', 'Add Testimonial'].map(
							(text, index) => (
								<ListItem button key={text}>
									<ListItemText primary={text} />
								</ListItem>
							),
						)}
					</List>
				</Drawer>
				<main className={classes.content}>
					<div className={classes.toolbar} />
					<Typography paragraph>Hello</Typography>
				</main>
			</div>
		);
	}
}

export default withStyles(styles)(Navigation);
