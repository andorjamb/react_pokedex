import React, { Component } from 'react';
import Card from '../components/Card'
import classes from './Pokemons.module.css'

//change so that it fetches only name and image, not all the data
class Pokemons extends Component {

    state = {
        data: [],
        isLoading: true,
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        fetch('https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0')
            .then((res) => res.json())
            .then((data) => {
                const fetches = data.results.map(p => {
                    return fetch(p.url)
                        .then(res => res.json());
                })

                Promise.all(fetches).then(res => this.setState({ data: res, isLoading: false }))


                /* this.setState({ data: data.results, isLoading: false })
                console.log(this.state.data); */
            });
    };

    render() {
        if (this.state.isLoading) {
            return <p>Loading....</p>
        }

        return (
            <div className={classes.cards}>
                {this.state.data.map((card) => (<Card
                    name={card.name}
                    key={card.name}
                    image={card.sprites.other['official-artwork']} />))
                }
            </div>
        );
    }

};

export default Pokemons;