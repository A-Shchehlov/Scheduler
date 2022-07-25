import React from "react"
import TodoList from "./TODO/TodoList"
import Context from "./context"
import AddTodo from "./TODO/AddTodo"

function App() {
   let [items, setItems] = React.useState(
      [
         {id: 1, completed: true, title: "Spring"},
         {id: 2, completed: false, title: "Hibernate"},
         {id: 3, completed: false, title: "Docker"}
      ]
   )

   function Toggle(id){
      setItems(
         items = items.map(item => {
         if(item.id === id){
            item.completed = !item.completed
         }
         return item
      })
      )
   }

   function removeTodo(id){
      setItems(
         items.filter(i => i.id !== id)
      )
   }

   function addTodo(title){
      setItems(items.concat([{
         id: Date.now(),
         completed: false,
         title: title
      }]))
   }
 return( 
   <Context.Provider value={{removeTodo: removeTodo}}>
      <div className="wrapper">
         <h1>Shceduler</h1>
         <AddTodo onCreate = {addTodo}></AddTodo>
         {items.length > 0 ? (<TodoList items = {items} onToggle={Toggle}></TodoList>) : <p>No todos!</p>}
      </div>
 </Context.Provider>
 )
}

export default App
