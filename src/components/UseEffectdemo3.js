import React from 'react'

export default function UseEffectdemo3() {
    const [count, setcount] = React.useState(0)
    const doSomething =()=>{
        setcount(previus => previus +1)
        console.log('dosomething')
    }
    React.useEffect(() => {
        const intervalID = setInterval(doSomething,1000)
       
        return () => {
            clearInterval(intervalID)
        }
    }, [])
    return (
        <div>
            <h1>{count}</h1>
        </div>
    )
}
