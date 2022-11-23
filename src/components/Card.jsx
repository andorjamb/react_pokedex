import React from 'react';
import classes from './Card.module.css';
import { Link } from 'react-router-dom';
const Card = (props) => {
    return (

        <div className={classes.card}>
            <img src={props.image} alt={props.name}></img>
            <h3>{props.name}</h3>
            <Link to={`${props.name}`}>See more</Link>
        </div>


    );
};

export default Card;