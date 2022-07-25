import React, {useState} from "react";
import PropsType from 'prop-types'

const styles = {
    form:{
        marginLeft: 5,
        marginBottom: 5
    }
}

function AddTodo({onCreate}){
    const [value, setValue] = useState('')


    function submitHandler(event){
        event.preventDefault()
    
        if(value.trim()){
            onCreate(value)
            setValue('')
        }
    }

    return(
        <form  style={styles.form} onSubmit={submitHandler}>
            <input value={value} onChange={event => setValue(event.target.value)}></input>
            <button type="submit">Add</button>
        </form>
    )
}

export default AddTodo

AddTodo.PropsType = {
    onCreate: PropsType.func.isRequired
}