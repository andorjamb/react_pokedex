import React, { Component } from 'react';
import classes from './Pokesingle.module.css'

class Pokesingle extends Component {

    state = {
        data: {},
        isLoading: false,
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.params.pokesingle}`)
            //pokesingle is defined as the varible in routes, make sure they are the same
            .then(res => res.json())
            .then((data) => this.setState({ data: data.results, isLoading: false }))
            .then((data) => (console.log(data.results)));
    }

    render() {
        if (this.state.isLoading) {
            return <p>Loading...</p>
        }
        return (
            <div className={classes.pokesingle}>
                {/*  <div className={classes.pokesingleImg}><img src={this.state.image} alt={this.state.name}></img></div>
                <div className={classes.info}> <h3>{`${this.state.data.name.charAt(0).toUpperCase()}${this.state.data.name.slice(1)}`}</h3>
                    <p></p></div>
 */}




            </div>
        );
    }
}

export default Pokesingle;