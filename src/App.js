import React from 'react'
import Usestatedemo1 from './components/UseStateDemo1'
import Usestatedemo2 from './components/UseStateDemo2'
import UseStatedemo3 from './components/UseStateDemo3'
import UseEffectdemo1 from './components/UseEffectdemo1'
import UseEffectdemo2 from './components/UseEffectdemo2'
import UseEffectdemo3 from './components/UseEffectdemo3'
import UseEffectdemo4 from './components/UseEffectdemo4'
import UseContextdemo1 from './components/UseContextdemo1'
export default function App() {
  const [isShow, setIsShow] = React.useState(true)
  return (
    <div >
      {/* <Usestatedemo1/>
      <Usestatedemo2/> 
      <UseStatedemo3/> 
       <UseEffectdemo1/> */}
      {/* {isShow && <UseEffectdemo2/>}
     <button onClick={()=>setIsShow(false)}>Hide</button>  */}
      {/* <UseEffectdemo3/> */}
     <UseEffectdemo4/>
     {/* <UseContextdemo1/> */}
    </div>
  )
}
