import React, { Component } from 'react';
/* import { useNavigate } from 'react-router-dom'; */
import classes from './Pokesingle.module.css'


class Pokesingle extends Component {
    state = {
        data: null,
        isLoading: true,
    };
    nextPokemon() {
        console.log('next pokemon');
    }
    componentDidMount() {
        this.setState({
            isLoading: true
        });
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.params.pokesingle}`)
            .then(res => res.json()
                .then((data) => this.setState({ data: data, isLoading: false })));
    }
    /* the props belong to the RouterWrapper functional component, defined in App.js */


    render() {
        if (this.state.isLoading) {
            return <p className={classes.loading}>Loading...</p>
        }
        return (
            <div className={classes.pokesingle}>
                <div className={classes.container}>
                    <div className={classes.pokesingleImg}> <img src={this.state.data.sprites?.other['official-artwork'].front_default} alt={this.state.data.name}></img>  </div>

                    <div className={classes.info}>
                        <table>
                            <tbody>
                                <tr><td>Name:</td><td>{this.state.data.name.charAt(0).toUpperCase() + this.state.data.name.slice(1)}</td></tr>
                                <tr><td>Id:</td><td>{this.state.data.id}</td></tr>
                                <tr><td>Types:</td><td><ul>{this.state.data.types.map((type) => <li key={type.type.name}>{type.type.name}</li>)}</ul></td></tr>
                                <tr><td>Weight:</td><td>{this.state.data.weight}</td></tr>
                                <tr><td>Order:</td><td>{this.state.data.order}</td></tr>
                            </tbody></table></div>

                </div>
                {/*  <button onClick={this.nextPokemon}><span className="material-icons">double_arrow</span></button> */}
            </div>

        );
    }
}

export default Pokesingle;


