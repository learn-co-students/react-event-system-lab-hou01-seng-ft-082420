// Code EyesOnMe Component Here
import React, {Component} from 'react'

class EyesOnMe extends Component {
    
    handleOnFocus = () => {
        console.log('Good!')
    }

    handleOnBlur = () => {
        console.log('Hey! Eyes on me!')
    }
    
    render() {
        return (
            <div>
                EyesOnMe Component
                <button onFocus={this.handleOnFocus} onBlur={this.handleOnBlur}>Click</button>
            </div>
        )
    }
}


export default EyesOnMe