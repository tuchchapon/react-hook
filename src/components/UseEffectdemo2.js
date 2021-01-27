import React,{useState}  from 'react'

export default function UseEffectdemo2() {
    const [count, setcount] = useState(0)
    React.useEffect(() => {
        //called whenever state is changed
        document.title= "current count ="+count;
        return ()=>{
            //called when component is deleted
        document.title= "the component was just destroyed"
        }
    }, [count])
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setcount(count +1)}>add</button>
        </div>
    )
}
