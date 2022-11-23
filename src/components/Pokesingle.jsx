import React, { Component } from 'react';

class Pokesingle extends Component {

    state = {
        data: {},
        isLoading: false,
    }

    componentDidMount() {
        this.setState({});

        fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.params.pokesingle}`)
            .then(res => res.json())
            .then((data) =>))
    }

    render() {
        if (this.state.isLoading) {
            return
            <p>Loading...</p>
        }
        console.log(this.props.params.pokesingle)
        return (
            <div>
                single pokemon component

            </div>
        );
    }
}

export default Pokesingle;