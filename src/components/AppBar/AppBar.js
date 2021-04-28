import React, { Fragment, useState, useEffect } from 'react';
import { Link as RouterLink, NavLink, useHistory, withRouter } from 'react-router-dom';
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ForumTwoToneIcon from '@material-ui/icons/ForumTwoTone';
import MoreIcon from '@material-ui/icons/MoreVert';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import userService from '../../services/user-service'

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },

    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        marginRight: theme.spacing(4),

    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        flexGrow: 2,
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
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
    navLink: {
        color: 'white',
        textDecoration: 'none',
        paddingRight: theme.spacing(1),
        paddingLeft: theme.spacing(2),
        fontWeight: 'bold',

    },
    buttonMargin: {
        margin: theme.spacing(1),
        borderColor: fade(theme.palette.common.white, 0.15),
        color: fade(theme.palette.common.white, 0.9),
    },
}));

const PrimarySearchAppBar = () => {
    const classes = useStyles();
    const history = useHistory();
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const [searchValue, setSearchValue] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const preventDefault = (event) => event.preventDefault();

    const handleSearch = (event) => {
        event.preventDefault();
        history.push(`/search/${encodeURI(searchValue)}`);
    };

    const handleLogout = (event) => {
        userService.logout()
            .then(() => {
                setIsAuthenticated(false);
                history.push('/home/1');
            }).catch((err) => {
            console.log(err);
        });
    };


    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>Favorites</MenuItem>
            <MenuItem onClick={handleMenuClose}>Admin Page</MenuItem>
            <MenuItem onClick={ () => {
                handleMenuClose();
                handleLogout();
            }}>Log out</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show 11 new notifications" color="inherit">
                    <Badge badgeContent={11} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    useEffect(() => {
        userService.profile()
            .then((usr) => {
                if (usr && !isAuthenticated) {
                    setIsAuthenticated(true);
                }}).catch((err) => {
                    console.log(err);
        });
    }, [isAuthenticated]);

    return (
        <div className={classes.grow}>
            <CssBaseline />
            <AppBar position="fixed">
                <Container>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <ForumTwoToneIcon />
                    </IconButton>
                    <Typography className={classes.title} variant="h5" noWrap>
                        TechTalk
                    </Typography>
                    <form className={classes.search} onSubmit={handleSearch}>
                        <IconButton className={classes.searchIcon} type="submit">
                            <SearchIcon />
                        </IconButton>
                        <InputBase
                            placeholder="Search Resources…"
                            fullWidth
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                            value={searchValue}
                            onChange={(event) => setSearchValue(event.target.value)}
                        />
                    </form>
                    <div className={classes.grow}>
                        <Link className={classes.navLink} href="#" onClick={preventDefault}>
                            Discussions
                        </Link>
                        <Link className={classes.navLink} href="#" onClick={preventDefault}>
                            Playlists
                        </Link>
                        <Link className={classes.navLink} href="#" onClick={preventDefault}>
                            Community
                         </Link>
                    </div>
                    <div className={classes.sectionDesktop}>


                        {
                            !isAuthenticated && <Fragment>
                                <Button variant="outlined" size="small" color="secondary" className={classes.buttonMargin} component={NavLink} to="/login" disableElevation>
                                    Log in
                                </Button>
                                <Button variant="contained" size="small" color="secondary" className={classes.buttonMargin} component={NavLink} to="/register" disableElevation>
                                    Sign Up
                                </Button>
                            </Fragment>
                        }
                        {
                            isAuthenticated && <Fragment>
                                <IconButton aria-label="User Notifications" color="inherit">
                                    <Badge badgeContent={2} color="secondary">
                                        <NotificationsIcon />
                                    </Badge>
                                </IconButton>
                                <IconButton
                                    edge="end"
                                    aria-label="account of current user"
                                    aria-controls={menuId}
                                    aria-haspopup="true"
                                    onClick={handleProfileMenuOpen}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                            </Fragment>

                        }
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
                </Container>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
}

export default withRouter(PrimarySearchAppBar);
