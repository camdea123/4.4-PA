import React from 'react'; 
import './App.css'; 
import TodoList from './components/TodoList'; 
import FormInput from "./components/FormInput";
import Counter from "./components/Counter";
function App() { 
 return ( 
<div className="App"> 
<header className="App-header"> 
<p>Counter</p>
<Counter />
<p>Form Input</p>
<FormInput />
<p>Todo list </p> 
<TodoList /> 
</header> 
</div> 
); 
} 
export default App;
