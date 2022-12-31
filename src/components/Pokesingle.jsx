import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classes from './Pokesingle.module.css'

const Pokesingle = () => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const params = useParams();

    useEffect(() => {

        setIsLoading(true);
        console.log(params.pokesingle);
        const data = fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokesingle}`)
            .then(res => res.json())
            .then((data) => { console.log(data.name) })

        setData(data);
        setIsLoading(false);
    

    }, []);

    /*     fetch('https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0')
            .then((res) => res.json())
            .then((data) => {
                data.results.forEach((p) => {
                    if (p.name === this.params.pokesingle) {
                        return fetch(p.url)
                            .then(res => res.json());
                    }
                })
            }) */



    return (
        isLoading ?
            <p className={classes.loading}>Loading...</p>

            :
            <div className={classes.pokesingle}>
                <div className={classes.pokesingleImg}> {/* <img src={data.sprites.other['offical-artwork'].front_default} alt={data.name}></img> */} </div>

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