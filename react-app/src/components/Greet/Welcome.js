import React, { Component  } from "react";

class Welcome extends Component
{
    render(){
        return(
            <h1>Hellow ranjith I welcome you to Class component {this.props.name}</h1>
        )
    }
}

export default Welcome;