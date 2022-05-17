import { Component } from "react";


class Message extends Component
{
    constructor()
    {
        super()
        this.state={
            message:"Welcome Ranjith"
        }
    }
    onClickCommad()
    {
        this.setState({
            message:"Ranjith Subscribed"
        })
    }

    render(){
        return(
            <div className="message">
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.onClickCommad()}>Subscribe</button>
            </div>

        )
    }
}

export default Message;