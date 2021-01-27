import React,{useState} from 'react'

export default function UseStateDemo1() {
    const [count, setCount] = useState(0);
    const [count2, setcount2] = useState(0);
    const [title, settitle] = useState("")
    return (
    <div style={{ textAlign: "center" }}>
      <h1>react-hook</h1>
      <button
        onClick={() => {
          setCount(count + 1);
          setcount2(count2 + 2);
          settitle("settitle");
        }}
      > add</button>
      UseState :{count}
      UseState :{count2}
      {title}
    </div>
    )
}
