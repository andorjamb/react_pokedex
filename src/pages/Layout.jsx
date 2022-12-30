import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer';
import Main from '../components/Main'
import classes from './Layout.module.css';



const Layout = () => {
    return (
        <div>
            <Header className={classes.header} />
            <Main className={classes.main} />
            <Footer className={classes.footer} />
        </div>
    );
};

export default Layout;