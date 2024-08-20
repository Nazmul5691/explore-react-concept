import { useEffect } from "react";
import { useState } from "react";
import User from "./User";


const Users = () => {

    const  [users, setUsers] = useState([]);


    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    } ,[])


    return (
        <div>
            <h2>users : {users.length}</h2>
            {
                users.map( user => <User key={user.id} user={user} ></User>)
            }
        </div>
    );
};

export default Users;