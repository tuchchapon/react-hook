import React from 'react'
import ThemeContext from "./ThemeContext"
export default function UseContextdemoChild() {
    const cc = React.useContext(ThemeContext)
    return (
        <div>
            <ThemeContext.Consumer>
                {color =>(
                    <h1 style={{color}}>{color}</h1>
                )}
            </ThemeContext.Consumer>

            Load from Usecontext :{cc}
        </div>
    )
}
