import React, {useState} from 'react'
import CardItem from './CardItem';
import SelectedCards from './SelectedCards';

const db = [
    {fullName: 'John Smith'},
    {fullName: 'Kate Adson'},
    {fullName: 'Tom Adson'},
    {fullName: 'Ann Johnson'},
    {fullName: 'Tom Fox'},
  ];

export default function CardList(props) {
  const [users, setUsers] = useState(db);

  const makeCard = (user,index) => {
    const select = () => {
        const newUsers = [...users];
        newUsers[index] = {...newUsers[index], isSelected: !newUsers[index].isSelected};
        setUsers(newUsers);
    }
    return <CardItem key={index} user={user} select={select}/>
  }

  return (
    <>
        <ol>{users.map(makeCard)}</ol>
        <SelectedCards users={users}/> 
    </>
  );
}

