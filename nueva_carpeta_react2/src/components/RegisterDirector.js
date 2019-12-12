import React, { Component } from 'react';
import axios from 'axios'

class RegisterDirector extends Component {

    constructor(props){
        super(props);
        this.state ={
            nombre:"",
            bio:"",
            edad:0,
            sexo:"M",
            nacionalidad:"MX",
        }
    }

    onChangeInput = (e) => {
        const key = e.target.id;
        const value = e.target.value;
        this.setState({
            [key]: value
        })
    }

    onClickSubmit =(e)=> {
        e.preventDefault();
        console.log(this.state);
        const URL= 'https://peaceful-shelf-30983.herokuapp.com/director'
        axios.post(URL, this.state)
            .then((result) => {
                console.log(result)
                alert('Director creado existosamente');
            }).catch((err) => {
                console.log(err)
                alert('Director no creado');
            });
    }
    render(){
        return(
            <div className= "row">
                <form onSubmit={this.onClickSubmit}>
                    <label>Nombre</label>
                    <input id="nombre" type="text" onChange={this.onChangeInput}></input>

                    <label>Bio</label>
                    <input id="bio" type="text" onChange={this.onChangeInput}></input>

                    <label>Edad</label>
                    <input id="edad" type="text" onChange={this.onChangeInput}></input>

                    <label>Nacionalida</label>
                    <select id="nacionalidad" onChange={this.onChangeInput}>
                        <option value="MX">Mexicano</option>
                        <option value="BR">Brasileiro</option>
                    </select>

                    <label>Sexo</label>
                    <select id="sexo" onChange={this.onChangeInput}>
                        <option value="M">Masculino</option>
                        <option value="F">Femenino</option>
                    </select>

                    <button type="submit">Guardar Director</button>
                </form>
            </div>
        )
    }
}

export default RegisterDirector;