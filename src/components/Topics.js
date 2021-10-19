import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './Article.css'
import Cookies from 'universal-cookie'

export default function Topics(props) {

    const [articles, setArticles] = useState()
    

    useEffect(() => {
        const cookies = new Cookies();
        let token = cookies.get('myToken')
        console.log("myToken", token)
    
        const headers = {
            'Authorization': `Token ${token}`
        }
        axios.get('http://127.0.0.1:8000/topic/', {headers}).then((resp) => {
            setArticles(resp.data)
            console.log(resp.data)
        }).catch(error => console.log(error))
    }, [])

const Function = () => {
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

            // console.log(`${new_value[i].is_public}`)
            // //  console.log(`${new_value[i].title}`)
            // //  console.log(`${new_value[i].description}`)
         }
    
       }
    return userList
}
    
const newList = Function()
console.log(newList)
    
    return (
    <div>
        <div className = 'container-md'>
            {newList.map(item => {
                return <div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <hr/>
                       </div>
            })
            
            }
        </div>
    </div>
    )
}
