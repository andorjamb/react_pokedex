import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Card.module.css';

const Card = (props) => {
    return (

        <div className={classes.card}>
            <img src={props.image} alt={props.name}></img>
            <h3>{`${props.name.charAt(0).toUpperCase()}${props.name.slice(1)}`}</h3>
            <Link to={props.name}>See more</Link>
        </div>


    );
};

export default Card;