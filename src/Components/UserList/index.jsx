import React, { Component } from 'react'
import Card from './Card';

const db = [
    {id: 1, name: 'Ann', surname: 'Adson'},
    {id: 2, name: 'Kate', surname: 'Fox'},
    {id: 3, name: 'Tom', surname: 'Tomson'},
    {id: 4, name: 'John', surname: 'Smith'},
    {id: 5, name: 'Olga', surname: 'Nike'}
];

export default class UserList extends Component {
    constructor(props) {
      super(props);
      this.state = {
         users: db,
      }
    }

    makeCard = (u ,i) => {
        return <Card key={i} user={u}/>
    }

    render() {
    const {users} = this.state;
    return (
        <ul>{users.map(this.makeCard)}</ul>
    )
  }
}
