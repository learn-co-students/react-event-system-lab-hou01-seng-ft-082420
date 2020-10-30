import React, { Component } from 'react';

export default class EyesOnMe extends Component {

    renderClick = () => console.log('Good!')

    renderBlur = () => console.log('Hey! Eyes on me!')

    render(){
        return(
            <div>
                <button onFocus={this.renderClick} onBlur={this.renderBlur}>EyesOnMe</button>
            </div>
        )
    }
}
