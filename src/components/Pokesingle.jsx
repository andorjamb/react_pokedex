import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
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

    /* 
const Pokesingle = () => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const params = useParams();

    function nextPokemon() {
        const pokemonId = data.id;

        navigate('/:p')
    }

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
                            <tr><th>Types</th><td>{data.types.map((type) => type.type.name)}</td></tr>
                            <tr><th>Weight:</th><td>{data.weight}</td></tr>
                            <tr><th>Order</th><td>{data.order}</td></tr>
                        </table></div>


                </div>
                <button onClick={nextPokemon}><span className="material-icons">double_arrow</span></button>
            </div>
    );

}

 */

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
                            <tr>
                                <th>Name:</th><td>{this.state.data.name.charAt(0).toUpperCase() + this.state.data.name.slice(1)}</td>
                            </tr>
                            <tr><th>Id:</th><td>{this.state.data.id}</td></tr>
                            <tr><th>Types:</th><td><ul>{this.state.data.types.map((type) => <li>{type.type.name}</li>)}</ul></td></tr>
                            <tr><th>Weight:</th><td>{this.state.data.weight}</td></tr>
                            <tr><th>Order:</th><td>{this.state.data.order}</td></tr>
                        </table></div>

                </div>
                <button onClick={this.nextPokemon}><span className="material-icons">double_arrow</span></button>
            </div>

        );
    }
}

export default Pokesingle;


