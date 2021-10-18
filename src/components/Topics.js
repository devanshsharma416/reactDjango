import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'


export default function Topics() {

    const [articles, setArticles] = useState(['Article One'])
    useEffect(() => {

        axios.get('http://127.0.0.1:8000/topic/').then((resp) => {
            setArticles(resp.data)
            console.log(resp.data)
        }).catch(error => console.log(error))
    }, [])
    
    const userList = []
    for ( let key in articles) {
 
        const new_value= (articles[key])
         for (let i = 0; i<new_value.length; i++)
         {   
             let title = `${new_value[i].title}`
             let description = `${new_value[i].description}`
             let is_public = `${new_value[i].is_public}`
             let user = `${new_value[i].user}`
             userList.push(title={title}, description={description}, is_public = {is_public}, user = {user});


            //  console.log(`${new_value[i].title}`)
            //  console.log(`${new_value[i].description}`)
         }
       }
       console.log(userList)
    return (
        <div>
            {userList.map(item => {
                return <div className = 'container'>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
        </div>

            })}
        </div>
    )
}
