import {useEffect, useState} from "react";
import UserForm from "../UserForm/UserForm"
import User from "../User/User";
import {UserServis} from "../usersservis/UserServis"

export default function Users(){
  const[users,setUsers]=useState([])
    useEffect(()=>{
      UserServis.getAll().then(({data})=>setUsers(data))
    })
    return(<div>
        <UserForm/>
        <hr/>
        {users.map(user=><User key ={user.id} user={user}/>)}
    </div>)
}