import React,{useState,useEffect} from 'react'
import axios from 'axios'
export default function UseEffectdemo4() {
    const [dataArry, setdataArry] = useState(null)
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(result=>{
            const {data} = result
            console.log(data)
            // alert(JSON.stringify(result.data))
            setdataArry(data)
        })
        return () => {
            
        }
    }, [])
    return (
        <div>
            {/* <p>*debug{JSON.stringify(dataArry)}</p> */}
            <ul>{dataArry && dataArry.map(item =><li key={item.id}>{item.id}.{item.title}</li>)}</ul>
          
        </div>
    )
}
