import React from 'react'
import PropTypes from 'prop-types'


export default class Sample extends React.Component {
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
      let response = await fetch('http://pokeapi.co/api/v2/pokemon/1/');
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
    const { sample } = this.props;
    return (
      <div style={{ margin: '0 auto' }} >
        <h2>Name: {name}</h2>
        <img alt='pokemon' className='duck' src={img} />
        <h2>Props Name: {sample.name}</h2>
        <img alt='Props pokemon' className='duck' src={sample.img} />
        <button className='btn btn-primary' onClick={this.onClick}>
          Click
        </button>
      </div>
    );
  }
}
