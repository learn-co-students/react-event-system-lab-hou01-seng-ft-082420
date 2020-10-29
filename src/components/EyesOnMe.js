import React from "react"

let EyesOnMe = () => {

    return(<div>
        <button onFocus={() => {console.log("Good!")}} onBlur={() => {console.log('Hey! Eyes on me!')}} />
    </div>)
}

export default EyesOnMe
