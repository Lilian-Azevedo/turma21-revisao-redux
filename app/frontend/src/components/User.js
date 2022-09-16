// import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/styles.css';

class User extends Component {

  render() {
    const { user } = this.props;
    const {  name, height, weight, imc } = user;
    // const result = await axios.get('http://localhost:3001/user');
    // console.log(result.data);
    const imcOneDec = Number(imc).toFixed(1);

    return (
      <section className='section'>
        <h3>Informações:</h3>
        <p>Nome: <span>{ name }</span></p>
        <p>Altura: <span>{ height }</span></p>
        <p>Peso: <span>{ weight }</span></p>
        <p>Olá { name }, seu IMC é { imcOneDec }</p>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
});

export default connect(mapStateToProps, null)(User);
