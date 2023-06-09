import React, { useEffect, useState } from 'react';
import styles from './Hello.module.css';

export default function Hello(props) {
  const {isHello, user: {firstName, lastName}} = props;
  const [msg, setMsg] = useState("");
  const [theme, setTheme] = useState("");

  useEffect(() => {
    if(isHello){
        setMsg("Hello");
        setTheme('dayTheme');
    } else{
        setMsg("Bye");
        setTheme('nightTheme');
    }
  }, []);

  return (
    <div className={styles[theme]}>
            <h1>{msg}, {firstName} {lastName} !!!</h1>
    </div>
  )
}


/*
render() {
    const {firstName, lastName} = this.props.user;
    this.changeMode();
    return (
        <div className={styles[this.theme]}>
            <h1>{this.state.msg}, {firstName} {lastName} !!!</h1>
        </div>
    )
  }
*/