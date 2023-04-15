import React, { Component } from 'react'
import Card from './Card';

export default class UserList extends Component {
    constructor(props) {
      super(props)
      console.log('List: constructor');
    }
    makeCard = (u ,i) => {
        const select = () => {
            const {users, setUsers} = this.props;
            const newUsers = [...users];
            newUsers[i] = {...newUsers[i], isSelected: !newUsers[i].isSelected};
            setUsers(newUsers);
        }
        return <Card key={i} user={u} select={select}/>
    }

    render() {
    console.log('List: render');
    const {users} = this.props;
    return (
       <>
        <ol>{users.map(this.makeCard)}</ol>
       </>
    )
  }
}
