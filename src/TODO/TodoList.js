import React from "react"
import PropsType from 'prop-types'
import TodoItem from "./TodoItem"

const styles={
    ul:{
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}
function TodoList(props){
    return(
        <ul style = {styles.ul}>
            {
                props.items.map((item, index) => {
                    return <TodoItem item = {item}
                                     key = {item.id}
                                     index = {index}
                                     onChange={props.onToggle}></TodoItem>
                })
            }
        </ul>
    );
}

TodoList.PropsType = {
    items: PropsType.arrayOf(PropsType.object).isRequired,
    onToggle: PropsType.func.isRequired
}

export default TodoList