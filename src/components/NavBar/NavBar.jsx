import './NavBar.css';
import Fade from 'react-reveal/Fade';
import { makeStyles } from '@material-ui/core/styles';
import {pinkThemeDark} from '../../theme/theme.js';
import Drawer from '@material-ui/core/Drawer';
import { IoMenuSharp, IoHomeSharp } from 'react-icons/io5';
import { HiDocumentText } from 'react-icons/hi';
import { BsFillGearFill } from 'react-icons/bs';
import { MdPhone } from 'react-icons/md';
import { FaUser, FaFolderOpen } from 'react-icons/fa';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import CloseIcon from '@material-ui/icons/Close';
import { useState } from 'react';


const NavBar = ()=>{
  
    const [open, setOpen] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false)

    const setHandleDrawer = () => {
        setDrawerOpen(!drawerOpen)
    }
const handleDrawerOpen = () => {
    setOpen(true);
    setHandleDrawer();
};

const handleDrawerClose = () => {
    setOpen(false);
    setHandleDrawer();
};

    console.log(pinkThemeDark)
    // const useStyles = makeStyles((t) => ({
    //     navMenu: {
    //         fontSize: '2.5rem',
    //         color: pinkThemeDark.tertiary,
    //         cursor: 'pointer',
    //         transform: 'translateY(-10px)',
    //         transition: 'color 0.3s',
    //         position: "fixed",
    //         top:"30px",
    //         right: "30px",
    //         '&:hover': {
    //             color: pinkThemeDark.primary,
    //         },
    //         [t.breakpoints.down('sm')]: {
    //             fontSize: '2.5rem',
    //         },
    //         [t.breakpoints.down('xs')]: {
    //             fontSize: '2rem',
    //         },
    //     },
    //     MuiDrawer: {
    //         padding: '0em 1.8em',
    //         width: '14em',
           
    //         fontStyle: ' normal',
    //         fontWeight: ' normal',
    //         fontSize: ' 24px',
    //         background: pinkThemeDark.secondary,
    //         overflow: 'hidden',
    //         borderTopRightRadius: '40px',
    //         borderBottomRightRadius: '40px',
    //         [t.breakpoints.down('sm')]: {
    //             width: '12em',
    //         },
    //     },
    //     closebtnIcon: {
    //         fontSize: '2rem',
    //         fontWeight: 'bold',
    //         cursor: 'pointer',
    //         color: pinkThemeDark.primary,
    //         position: 'absolute',
    //         right: 40,
    //         top: 40,
    //         transition: 'color 0.2s',
    //         '&:hover': {
    //             color: pinkThemeDark.tertiary,
    //         },
    //         [t.breakpoints.down('sm')]: {
    //             right: 20,
    //             top: 20,
    //         },
    //     },
    //     drawerItem: {
    //         margin: '2rem auto',
    //         borderRadius: '78.8418px',
    //         background: pinkThemeDark.secondary,
    //         color:pinkThemeDark.primary,
    //         width: '85%',
    //         height: '60px',
    //         display: 'flex',
    //         alignItems: 'center',
    //         justifyContent: 'space-evenly',
    //         padding: '0 30px',
    //         boxSizing: 'border-box',
    //         border: '2px solid',
    //         borderColor: pinkThemeDark.primary,
    //         transition: 'background-color 0.2s, color 0.2s',
    //         '&:hover': {
    //             background: pinkThemeDark.primary,
    //             color: pinkThemeDark.secondary,
    //         },
    //         [t.breakpoints.down('sm')]: {
    //             width: '100%',
    //             padding: '0 25px',
    //             height: '55px',
    //         },
    //     },
    //     drawerLinks: {
          
    //         width: '50%',
    //         fontSize: '1.3rem',
    //         fontWeight: 600,
    //         [t.breakpoints.down('sm')]: {
    //             fontSize: '1.125rem',
    //         },
    //     },
    //     drawerIcon: {
    //         fontSize: '1.6rem',
    //         [t.breakpoints.down('sm')]: {
    //             fontSize: '1.385rem',
    //         },
    //     },
    // }));
    // const classes = useStyles();

    return (
        <div className='navbar'>
            <div  className='navbar--container'>
                <h1 style={{ color: pinkThemeDark.secondary }}>
                   Kavery
                </h1>

                <IoMenuSharp
                    // className={classes.navMenu}
                    onClick={handleDrawerOpen}
                    aria-label='Menu'
                    id='navicon'
                />
            </div>
            <Drawer
                variant='temporary'
                onClose={(event, reason) => {
                    if (reason !== 'backdropClick') {
                        handleDrawerClose();
                    } else if (reason !== 'escapeKeyDown') {
                        handleDrawerClose();
                    }
                }}
                anchor='left'
                open={open}
                // classes={{ paper: classes.MuiDrawer }}
                className='drawer'
                disableScrollLock={true}
            >
                <div className='div-closebtn'>
                    <CloseIcon
                        onClick={handleDrawerClose}
                        onKeyDown={(e) => {
                            if (e.key === ' ' || e.key === 'Enter') {
                                e.preventDefault();
                                handleDrawerClose();
                            }
                        }}
                        // className={classes.closebtnIcon}
                        role='button'
                        tabIndex='0'
                        aria-label='Close'
                    />
                </div>
                <br />

                <div onClick={handleDrawerClose}>
                    <div className='navLink--container'>
                        <Fade left>
                            <NavLink
                                to='/'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <div >
                                    <IoHomeSharp
                                        
                                    />
                                    <span >
                                        Home
                                    </span>
                                </div>
                            </NavLink>
                        </Fade>

                        <Fade left>
                            <NavLink
                                to='/#about'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <div >
                                    <FaUser  />
                                    <span >
                                        About
                                    </span>
                                </div>
                            </NavLink>
                        </Fade>

                        <Fade left>
                            <NavLink
                                to='/#education'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <div >
                                    <HiDocumentText
                                       
                                    />
                                    <span >
                                        Education
                                    </span>
                                </div>
                            </NavLink>
                        </Fade>

                        <Fade left>
                            <NavLink
                                to='/#skills'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <div >
                                    <BsFillGearFill
                                       
                                    />
                                    <span >
                                        Skills
                                    </span>
                                </div>
                            </NavLink>
                        </Fade>

                        <Fade left>
                            <NavLink
                                to='/#projects'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <div >
                                    <FaFolderOpen
                                       
                                    />
                                    <span >
                                        Projects
                                    </span>
                                </div>
                            </NavLink>
                        </Fade>

                        <Fade left>
                            <NavLink
                                to='/#contacts'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <div>
                                    <MdPhone  />
                                    <span >
                                    </span>
                                </div>
                            </NavLink>
                        </Fade>
                    </div>
                </div>
            </Drawer>
        </div>
    );
                    }
export default NavBar;