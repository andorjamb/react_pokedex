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

    }, []);

    return (
        isLoading ?
            <p className={classes.loading}>Loading...</p>

            :
            <div className={classes.pokesingle}>
                <div className={classes.container}>
                    <div className={classes.pokesingleImg}> <img src={data.sprites.other['official-artwork'].front_default} alt={data.name}></img>  </div>

                    <div className={classes.info}>
                        <table>
                            <tr>
                                <th>Name:</th><td>{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</td>
                            </tr>
                            <tr><th>Id:</th><td>{data.id}</td></tr>
                            <tr><th>Types</th><td></td></tr>
                            <tr><th>Weight:</th><td>{data.weight}</td></tr>
                            <tr><th>Order</th><td>{data.order}</td></tr>
                        </table></div>


                </div>
            </div>
    );

}

export default Pokesingle;
