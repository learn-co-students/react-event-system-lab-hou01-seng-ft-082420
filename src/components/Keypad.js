import React from "react"

let Keypad = () => {

    return(<div>
        <input type="password" onKeyUp={() => {console.log("Entering password...")}} />
    </div>)
}

export default Keypad