import User from "../characters/User";
import {useEffect, useState} from "react";

export default function Users(){
    let[users,setUsers] = useState([]);
    let[user, setUser]=useState(null)

    const show=(obj)=>{
        setUser(obj);
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(response => {
                    setUsers(response)
                }
            )
    },)
    return(<div>
        <hr/>
        <h3>{user?.username} {user?.email} {user?.phone}</h3>
        <hr/>
        {users.map((users)=><User item={users} key={users.id} show={show} />)}

    </div>)
}