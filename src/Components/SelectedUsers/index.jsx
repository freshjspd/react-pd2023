import React, { Component } from 'react'

export default class SelectedUsers extends Component {
  render() {
    const {users, setUsers} = this.props;
    const list = users.filter(u => u.isSelected);
    return (
      <>
      <p>Selected users</p>
      <ul>
        {list.map(u => 
        <li key={u.id}>{u.name} {u.surname}</li>
        )}
      </ul>
      </>
    )
  }
}
