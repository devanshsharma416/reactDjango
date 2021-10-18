import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Article() {

    const [articles, setArticles] = useState(['Article One'])


    useEffect(() => {

        axios.get('http://127.0.0.1:8000/article/').then((resp) => {
            setArticles(resp.data)
            console.log(resp.data)
        }).catch(error => console.log(error))
    }, [])
    
    const new_value = articles['Articles']
    console.log(new_value.length)
    
    for (let i = 0; i<new_value.length; i++)
    {
      console.log(`${new_value[i].title}`)
      console.log(`${new_value[i].description}`)
      console.log(`${new_value[i].is_public}`)
      console.log(`${new_value[i].user}`)
    }

    return (
        <div>
        
        </div>
    )
}
