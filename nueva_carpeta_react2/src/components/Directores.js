import React, { Component } from 'react';
import Director from './Director';
import axios from 'axios';
import RegisterDirector from './RegisterDirector'

class Directores extends Component {

    constructor(props){
        super(props);
        this.state = {
            cardDirectores: [<Director />,<Director />,<Director />,<Director />],
            directores: [],
        }
    }

    componentDidMount(){
        // Consumir el enpoint
        const URL = 'https://guarded-spire-32877.herokuapp.com/Director'
        axios.get(URL)
            .then((result) => {
                const respuesta = result.data;
                const arregloDeDirectores = respuesta.map(director => <Director name={director.nombre}/>);
                // [<Director />,<Director />,<Director />]
                this.setState({
                    directores: arregloDeDirectores
                });
            }).catch((err) => {
                console.log(err);
            });
    }

    render(){
        return (
            <section className="row">
                <RegisterDirector/>
                {this.state.directores}
            </section>
        );
    }
}

export default Directores;