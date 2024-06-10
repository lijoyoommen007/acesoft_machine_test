import React, { useState } from 'react'

function TaskOne() {
    const [numInputs, setNumInputs] = useState(0)
    const [inputValues, setInputValues] = useState([])
    const [generated, setGenerated] = useState(false)

    const handleGereateInputChange = (e) => {
        const newNum = parseInt(e.target.value, 10)
        setNumInputs(newNum)
    }

    console.log(numInputs);

    const handleInputFieldCount = () => {
        setGenerated(true)
    }

    const handleInputChanges = (e,index)=>{
        const newValue = e.target.value
        setInputValues(prevValues => {
            const newValues = [...prevValues]
            newValues[index] = {id:index+1,value:newValue}
            return newValues
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(inputValues)
    }



    return (
        <div>
            <input onChange={(e) => handleGereateInputChange(e)} type="number" placeholder='Number of inputs' />
            <button onClick={handleInputFieldCount}>Generate Form</button>
            {generated && (<form onSubmit={handleSubmit}>
                {Array.from({ length: numInputs }, (_, index) => (
                    <div key={index}>
                        <label >
                            Input {index+1}
                            <input type="text"
                            onChange={(e)=>handleInputChanges(e,index)}
                            placeholder='Enter...'
                            />
                        </label>
                    </div>
                ))}
                <button type='submit'>Submit</button>
            </form>)}


        </div>
    )
}

export default TaskOne