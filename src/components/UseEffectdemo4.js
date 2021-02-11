import React,{useState,useEffect} from 'react'
import axios from 'axios'

export default function UseEffectdemo4() {
    const [dataaray, setdataaray] = useState(null)
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(
            result => {const {data} = result
        setdataaray(data)
    })
        return () => {
            
        }
    }, [])
    return (
        <div>
            <ul  >{dataaray && dataaray.map(item => <li key={item.id}>{item.id}.{item.title}<br/>{item.body}</li>)}</ul>
        </div>
    )
}
