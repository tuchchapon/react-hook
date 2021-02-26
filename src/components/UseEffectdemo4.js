import React, { useState, useEffect } from "react";
import axios from "axios";

export default function UseEffectdemo4() {
  const [dataaray, setdataaray] = useState(null);
  const [count, setcount] = useState(null);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((result) => {
      const { data } = result;
      setdataaray(data);
    });
    return () => {};
  }, []);
  return (
    <div>
      <div>
        {dataaray &&
          dataaray.map((item) => (
            <div >
             
              {item.userId === 1 ? (
                <div style={{backgroundColor:'tan',color:'red',fontSize:20}}>
                  Userid:{item.userId}
                  {item.id}.{item.title}<br/>body is :{item.body}
                </div>
              ) : item.userId === 2 ? (
                <div style={{backgroundColor:'peru',color:'green',fontSize:20}}>
               Userid:{item.userId} <br />
                  {item.id}.{item.title}<br/>body is :{item.body}
                </div>
              ) : item.userId === 3?(
                <div style={{backgroundColor:'wheat',color:'blue',fontSize:20}}>
              Userid:{item.userId} <br />
                {item.id}.{item.title}<br/>body is :{item.body}
              </div>
              ): item.userId === 4 ? (
                <div style={{backgroundColor:'gray',color:'oldlace',fontSize:20}}>
                Userid:{item.userId} <br />
                {item.id}.{item.title}<br/>body is :{item.body}
              </div>
              ):item.userId === 5?(
                <div style={{backgroundColor:'orchid',color:'pink',fontSize:20}}>
                Userid:{item.userId} <br />
                {item.id}.{item.title}<br/>body is :{item.body}
              </div>
              ):item.userId ===6?(
                <div style={{backgroundColor:'seashell',color:'powderblue',fontSize:20}}>
                Userid:{item.userId} <br />
                {item.id}.{item.title}<br/>body is :{item.body}
              </div>
              ):item.userId ===7?(
                <div style={{backgroundColor:'thistle',color:'teal',fontSize:20}}>
                Userid:{item.userId} <br />
                {item.id}.{item.title}<br/>body is :{item.body}
              </div>
              ):item.userId ===8?(
                <div style={{backgroundColor:'steelblue',color:'tomato',fontSize:20}}>
                Userid:{item.userId} <br />
                {item.id}.{item.title}<br/>body is :{item.body}
              </div>
              ):item.userId ===9?(
                <div style={{backgroundColor:'whitesmoke',color:'unset',fontSize:20}}>
                Userid:{item.userId} <br />
                {item.id}.{item.title}<br/>body is :{item.body}
              </div>
              ):item.userId ===10?(
                <div style={{backgroundColor:'powderblue',color:'rebeccapurple',fontSize:20}}>
                Userid:{item.userId} <br />
                {item.id}.{item.title}<br/>body is :{item.body}
              </div>
              ):''
              }
            </div>
          ))}
      </div>
    </div>
  );
}
