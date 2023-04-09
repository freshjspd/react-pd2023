import './App.css';
import React, { Component } from 'react';
import UserList from './Components/UserList';
import SelectedUsers from './Components/SelectedUsers';

const db = [
  {id: 1, name: 'Ann', surname: 'Adson'},
  {id: 2, name: 'Kate', surname: 'Fox'},
  {id: 3, name: 'Tom', surname: 'Tomson'},
  {id: 4, name: 'John', surname: 'Smith'},
  {id: 5, name: 'Olga', surname: 'Nike'}
];
export default class App extends Component {
  constructor(props) {
    super(props);  
    this.state = {
        users: db.map(u => ({...u, isSelected: false})),
    }
   }
   
   setUsers = (data) => {
      this.setState({users: data});
   }
  
   render() {
    const {users} = this.state;
    return (
      <>
        <UserList users = {users} setUsers={this.setUsers}/>
        <SelectedUsers users={users} setUsers={this.setUsers}/>
      </>
    );
  }
}


