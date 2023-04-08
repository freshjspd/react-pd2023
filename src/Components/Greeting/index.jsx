import React, { Component } from 'react'
import styles from './Greeting.module.css';

export class Greeting extends Component {
  constructor(props){ 
    super(props);
    this.state = {
      isHello: true,
      msg: '',
    } 
    this.theme = '';
  }
  changeMode = () => {
    const {isHello} = this.props;
    if(isHello){
      this.setState({isHello: true, msg: 'Hello'});
      this.theme = 'dayTheme';
    } else{
      this.setState({isHello: false, msg: 'Bye'});
      this.theme = 'nightTheme';
    }
  };

  render() {
    const {firstName, lastName} = this.props.user;
    this.changeMode();
    return (
        <div className={styles[this.theme]}>
            <h1>{this.state.msg}, {firstName} {lastName} !!!</h1>
        </div>
    )
  }
}
export default Greeting;
