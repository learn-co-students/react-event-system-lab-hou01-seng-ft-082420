// Code Keypad Component Here
import React, {Component} from 'react'

class Keypad extends Component {
    
    handleKeyUp = () => {
        console.log('Entering password...')
    }

    render() {
        return (
            <div>
                Keypad Component
                <input type="password" onKeyUp={this.handleKeyUp}/>
            </div>
        )
    }
}


export default Keypad