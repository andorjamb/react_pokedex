import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classes from './Pokesingle.module.css'

const Pokesingle = () => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const params = useParams();

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokesingle}`)
            .then(res => res.json())
            .then((data) => { setData(data); setIsLoading(false) })
        /*  .then((data) => { if (data != null) {  } }); */




    }, []);

    return (
        isLoading ?
            <p className={classes.loading}>Loading...</p>

            :
            <div className={classes.pokesingle}>
                <div className={classes.pokesingleImg}> <img src={data.sprites.other['official-artwork'].front_default} alt={data.name}></img>  </div>

                <div className={classes.info}>  <h3>{data.name}</h3>
                    <p></p></div>
                {/* 
                    name:
                    id:
                    height: 
                    weight:
                    types -> [{type.name}]
                    order:
                    sprites.other[offical-artwork].front_default

 */}

            </div>
    );

}

export default Pokesingle;
/* {`${this.state.data.name.charAt(0).toUpperCase()}${this.state.data.name.slice(1)}` */