import { useState, useEffect } from "react";

export const App2 = ()=>
    {
        const[users, setUsers] = useState(null);
        // const GetData=()=>
        // {
        //     fetch("https://reqres.in/api/users")
        //     .then((response) => response.json())
        //     .then((data)=> console.log(data)
        // )
        // }
        useEffect(()=>
        {        fetch("https://reqres.in/api/users")
                .then((response) => response.json())
                .then((res)=> {console.log(res.data)
                    setUsers(res.data);}
        )
        },[])
        return(
            <div> 
               {users && console.log(users.length)}
               {users && <h1> {users.length} </h1>}
               {users ? users.map((user)=>
                 <li> {user.id} -- {user.email} </li>)
                : <h1> There are no records </h1>}
            </div>
            // <button onClick={GetData}> Get Data </button>
        )
    } 