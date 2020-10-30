import React from 'react';

class Keypad extends React.Component {

    renderOutput = () => console.log('Entering password...')

    render(){
        return(
            <div>
                <input
                    type='password'
                    onKeyUp={this.renderOutput}
                />
            </div>
        )
    }
} 

export default Keypad;