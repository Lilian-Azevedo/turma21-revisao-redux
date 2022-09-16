import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setUserInfos } from '../redux/actions';

import '../styles/styles.css';

const INITIAL_STATE = { name: '', height: 0, weight: 0, imc: 0};

class Form extends Component {
  state = INITIAL_STATE;
 
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { height, weight } = this.state;
    const multiply = parseFloat(height) * parseFloat(height);
    const imcCalc = parseFloat(weight)/multiply;

    this.setState((prevInfo) => ({ ...prevInfo, imc: imcCalc}),
      () => this.handleDispatch());
  }

  handleDispatch = async () => {
    const { userDispatch } = this.props;
    const { name, height, weight } = this.state;
    const result = await axios.post('http://localhost:3001/user',
      { name, heigth: Number(height), weigth: Number(weight) });
    console.log(result);
    userDispatch(this.state);
    this.setState(INITIAL_STATE);
  }

  render() {
    const { name, height, weight } = this.state;

    return (
      <form onSubmit={ this.handleSubmit } className='form'>
        <input
          name="name"
          type="text"
          value={ name }
          onChange={ this.handleChange }
          placeholder='NOME'
        />
        <input
          name="height"
          type="decimal"
          value={ height }
          onChange={ this.handleChange }
          placeholder='ALTURA'
        />
        <input
          name="weight"
          type="decimal"
          value={ weight }
          onChange={ this.handleChange }
          placeholder='PESO'
        />
        <button type="submit">
          Submit
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userDispatch: (user) => dispatch(setUserInfos(user)),
});

export default connect(null, mapDispatchToProps)(Form);
