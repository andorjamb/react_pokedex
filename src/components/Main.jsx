import React from 'react';
import classes from './Main.module.css'
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <main className={classes.main}>
            <Outlet />
        </main>
    );
};

export default Main;