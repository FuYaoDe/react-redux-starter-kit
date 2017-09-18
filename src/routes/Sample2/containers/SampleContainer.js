import { connect } from 'react-redux'
import { updatePokemon } from '../modules/sample'
import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux';

@connect(
  state => ({
    sample2 : state.sample2
  }),
  dispatch => bindActionCreators({
    updatePokemon
  }, dispatch)
)
export default class Sample2 extends React.Component {
  static propTypes = {};
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      img: '',
    };
  }

  onClick = async() => {
    try {
      let response = await fetch('http://pokeapi.co/api/v2/pokemon/2/');
      let responseJson = await response.json();
      const data = {
        name: responseJson.name,
        img: responseJson.sprites.front_default,
      };
      this.setState(data)
      this.props.updatePokemon(data);
    } catch(error) {
      console.error(error);
    }
  }

  render() {
    const { name, img } = this.state;
    const { sample2 } = this.props;
    return (
      <div style={{ margin: '0 auto' }} >
        <h2>Name: {name}</h2>
        <img alt='pokemon' className='duck' src={img} />
        <h2>Props Name: {sample2.name}</h2>
        <img alt='Props pokemon' className='duck' src={sample2.img} />
        <button className='btn btn-primary' onClick={this.onClick}>
          Click
        </button>
      </div>
    );
  }
}
