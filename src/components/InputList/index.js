import React from "react"

const InputList = ({ className}) => {

    return (
        <div className={className}>

         <input name="color" id="color" list="colors"></input>
            <datalist id="colors">
                <option>Green</option>
                <option>Orange</option>
                <option>Purple</option>
                <option>Black</option>
                <option>White</option>
            </datalist>
        </div>
    )
}



export default InputList