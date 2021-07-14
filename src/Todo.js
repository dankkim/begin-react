import React, { useEffect, useState, memo } from 'react'
import axios from 'axios'


const TodoList = memo(({todos, deleteTodo}) => {
  const list = todos.map((todo) => (
    <li key={todo.id}>
      {todo.text}
      <button onClick={() => deleteTodo(todo.id)}>delete</button>
    </li>
  ))

  return (
    <ul className="list">
      {list}
    </ul>
  );
})

const getTodos = () => axios.get('http://localhost:4000/todos');
const postTodos = (data) => axios.post(`http://localhost:4000/todos`, data);
const deleteTodos = (id) => axios.delete(`http://localhost:4000/todos/${id}`);

function Todo() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([{
    id: null,
    text: null
  }]);

  useEffect(() => {
    getTodos().then((res) => {
      setTodos(res.data);
    })
  }, []);

  const handler = (e) => {
    setInputText(e.target.value);
  }

  const addTodo = () => {
    if (inputText === '') return;
    postTodos({ text: inputText }).then((res) => {
      setTodos([
        ...todos,
        res.data
      ])

      setInputText('');
    })
  }

  const deleteTodo = (id) => {
    deleteTodos(id).then((res) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    })
  }

  return (
    <div className="wrap">
      <h1>TODO!!</h1>
      <div>
        <input type="text" value={inputText} onChange={handler}/>
        <button onClick={addTodo}>add</button>
      </div>
      <TodoList todos={todos} deleteTodo={deleteTodo}/>
    </div>
  )
}

export default Todo
