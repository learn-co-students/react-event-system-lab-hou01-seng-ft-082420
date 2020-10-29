// Code EyesOnMe Component Here
import React, {Component} from 'react'

class EyesOnMe extends Component {

    constructor(){
        super()
        this.state = {
            
        }
    }

    handleFocus = () => console.log("Good!")
    handleBlur = () => console.log("Hey! Eyes on me!")

    render(){
        return(
           <button onFocus={this.handleFocus} onBlur={this.handleBlur} >Click Me!</button> 
        )
    }
}

export default EyesOnMe