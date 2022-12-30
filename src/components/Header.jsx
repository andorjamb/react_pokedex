import React from 'react';
import classes from './Header.module.css';
import { Link } from 'react-router-dom';
import Nav from './Nav';


const Header = () => {
    return (
        <header className={classes.header}>

            <div className={classes.title}><Link to='/'><h1 className={classes.h1}>Pokedex</h1></Link ></div>
            <Nav />
        </header>
    );
};

export default Header;