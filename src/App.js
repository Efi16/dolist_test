import React from 'react'
import { useState } from 'react'
import './App.css';
import { Button, Checkbox, Form } from 'semantic-ui-react'

function App () {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [checkbox, setCheckbox] = useState(false);

function handleChange(e){
  setInputValue(e.target.value)
}

function handleSubmit(e){
  e.preventDefault()
  setTodos([...todos, inputValue])
  setInputValue('')
}

const handleDelete = (index) => {
  const newTodos = [...todos];
  newTodos.splice(index, 1);
  setTodos(newTodos);
};

return (
    <div style={{backgroundColor: "lightblue"}}>
      <h1>Todo List</h1>
      <Form>
        <input type='text' value={inputValue} onChange={handleChange}/>
        <Button onClick={handleSubmit}>Add Todo</Button>
      </Form>
      <ul>
        
        {todos.map((todo) => (
          <>
          <Checkbox label={todo}>{todo}
          </Checkbox>
          <Button onClick={handleDelete}>Delete</Button>
          </>
        ))}
      </ul>
    </div>
  )
}
export default App;