// import React from "react";
import Welcome from './Welcome'


export const Greet = (props)=>{

    console.log(props)

    return(
        <div className="greet">
           
            
            <h1>Hello  {props.name}</h1>
            {props.children}
        </div>
    )

   
}
//export default Greet;
