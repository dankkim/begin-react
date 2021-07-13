import React, {useState} from "react";


function TodoList({todos, deleteTodo}) {

  const list = todos.map((todo, index) => (
    <li key={index}>
      {todo}
      <button onClick={() => deleteTodo(index)}>delete</button>
    </li>
  ))

  return (
    <ul className="list">
      {list}
    </ul>
  );
}



function Todo() {

  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);

  const handler = (e) => {
    const {value} = e.target;
    setText(value);
  }

  const addTodo = () => {
    if (text !== '') {
      setTodos([
        ...todos,
        text
      ])

      localStorage.setItem('todos', JSON.stringify(todos));
      setText('');
    }
  }

  const deleteTodo = (key) => {
    setTodos(todos.filter((todo, index) => index !== key));
  }

  return (
    <div className="wrap">
      <h1>TODO!!</h1>
      <div>
        <input type="text" value={text} onChange={handler}/>
        <button onClick={addTodo}>add</button>
      </div>
      <TodoList todos={todos} deleteTodo={deleteTodo}/>
    </div>
  )
}

export default Todo