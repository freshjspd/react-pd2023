import React from 'react'

export default function SelectedCards(props) {
  const {users} = props;
  const list = users.filter(u => u.isSelected);
  return (
    <>
      <h2>Selected users</h2>
      <ul>
        {list.map(u => 
        <li key={u.id}>{u.fullName}</li>
        )}
      </ul>
    </>
  )
}

