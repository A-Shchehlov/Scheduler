import React from "react"
import TodoList from "./TODO/TodoList"

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

 return <div className="wrapper">
    <h1>Shceduler</h1>
   <TodoList items = {items} onToggle={Toggle}></TodoList>
 </div>
}

export default App
