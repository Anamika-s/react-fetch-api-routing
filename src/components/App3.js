import { useState } from "react";

export const App3=()=>
    {
        const[user, setUser] = useState(
            {
            id:0,
            first_name:"",
            email:""
            }
        )

        const Add=(event)=>
        {
            fetch("https://reqres.in/api/users",
            {
            method:'POST',
            headers:
            {
                'Accept': 'Application/json',
                'Content-Type' :'Application/json'
            },
            body : JSON.stringify(user)
            }).then(response=>response.json())
            .then(res=> console.log(res));
            event.preventDefault();
        }
        return(
            <form onSubmit={Add}> 
            <div>
                <label> Enter ID </label>
                <input type="number" name="id" value={user.id} onChange={(event)=> setUser({...user,[event.currentTarget.name]:event.target.value})}/>
            </div>

            <div>
                <label> Enter email </label>
                <input type="text" name="email" value={user.email} onChange={(event)=> setUser({...user,[event.currentTarget.name]:event.target.value})}/>
            </div>

            <div>
                <label> Enter first_name </label>
                <input type="text" name="first_name" value={user.first_name} onChange={(event)=> setUser({...user,[event.currentTarget.name]:event.target.value})}/>
            </div>
<div>
    <button type="submit"> Submit Data </button>
</div>
            </form>
        )
    } 