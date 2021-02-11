import React from 'react'
import UseContextdemoChild1 from './UseContextdemoChild'
import ThemeContext from "./ThemeContext";

export default function UseContextdemo1() {

    return (
        <div style={{textAlign:'center'}}>
            <ThemeContext.Provider value="green">
                <UseContextdemoChild1/>
            </ThemeContext.Provider>
        </div>
    )
}
