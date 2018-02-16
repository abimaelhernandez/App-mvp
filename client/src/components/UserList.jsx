import React from 'react';
import userName from './UserName.jsx';

const UserList = (props) => (
<div className ="users">
  {props.list.map((Item)=> <UserList item ={item} key={item.id}/>)};
</div>
)

 export default UserList;
