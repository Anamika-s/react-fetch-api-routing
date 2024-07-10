import { useState, useEffect } from "react";
import axios from 'axios'

export const App4 = ()=>
    {
        const [persons, setPersons] =  useState(null);
        useEffect(()=>
        {
            axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
            //   const persons = res.data;
               setPersons(res.data)
            //    console.log(res.data)
               console.log(persons)
            })
        },[])
        return(
            <>
              <ul>
        
          {persons
            .map(person =>
              <li key={person.id}>{person.name}</li>
            )}
        </ul>
            </>
        )
    } 