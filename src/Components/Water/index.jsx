import React, { Component } from 'react'
import styles from './Water.module.css';

export default class Water extends Component {
  constructor(props){
    super(props);
    this.state = {
        shape: 'water'
    };
    this.styleLiquid = 'waterStyle';
  }
  liquidShape = () => {
    const {temperature} = this.props;
    if(temperature < 0) { 
        this.setState({shape : 'ice'}); 
        this.styleLiquid = 'iceStyle';
    }
    else if(temperature >= 100) {
        this.setState({shape : 'steam'});
        this.styleLiquid = 'steamStyle';
    }
    else{ this.setState({shape : 'water'});
    this.styleLiquid = 'waterStyle';
    }
  };
  render() {
    this.liquidShape();
    return (
      <h1 className={styles[this.styleLiquid]}>{this.state.shape}</h1>
    )
  }
}
