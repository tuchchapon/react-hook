import React,{useState}  from 'react'

export default function UseEffectdemo1() {
    const [count, setcount] = useState(0)
    React.useEffect(() => {
        //called whenever state is changed
        document.title= "current count ="+count;

    }, [count])
    return (
        
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setcount(count +1)}>add</button>
        </div>
    )
}
