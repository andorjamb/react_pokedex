import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css'

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <NavLink className={classes.nav__a} to="/">Home</NavLink>
            <NavLink className={classes.nav__a} to="/pokemons">Pokemons</NavLink>
            <NavLink className={classes.nav__a} to="/about">About</NavLink>

        </nav >
    );
};

export default Nav;