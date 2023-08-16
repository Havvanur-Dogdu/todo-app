import React from 'react';
import './App.css'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import { Container } from 'react-bootstrap';
import TodoContextProvider from './context/TodoContext';

const App = () => {

    return (
      <div>
        <TodoContextProvider>
        <Container>
            <TodoForm />
            <TodoList /> 
        </Container>
        </TodoContextProvider>
      </div>
    );

}

export default App;
