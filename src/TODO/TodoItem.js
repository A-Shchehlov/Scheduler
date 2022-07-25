import React from "react"
import PropsType from 'prop-types'

const styles = {
    li:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px',
        margin:'5px',
        borderRadius: '5px',
        border: '1px solid #ccc'
    },

    button:{
        color: 'red'
    },

    input:{
        marginRight: '5px'
    }
}
function TodoItem({item, index, onChange}){
    const classes = []
    if(item.completed){
        classes.push('done')
    }
    return(
        <li style={styles.li}>
            <span className={classes.join(' ')}>

                <input type="checkbox"
                        checked={item.completed}
                        style={styles.input}
                        onChange={()=>onChange(item.id)}></input>

                {index + 1 + '. ' + item.title}
            </span>
            <button style={styles.button}>&times;</button>
        </li>
    );
}

TodoItem.PropsType = {
    item: PropsType.object.isRequired,
    index: PropsType.number,
    onChange: PropsType.func.isRequired
}

export default TodoItem