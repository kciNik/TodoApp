import React, { useState } from 'react';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import './App.css';

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

const App: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [filter, setFilter] = useState('all');

    const addTodo = (text: string) => {
        setTodos([...todos, { id: Date.now(), text, completed: false }]);
    };

    const toggleTodo = (id: number) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    };

    const clearCompleted = () => {
        setTodos(todos.filter(todo => !todo.completed));
    };

    const filteredTodos = todos.filter(todo => {
        if (filter === 'all') return true;
        if (filter === 'active') return !todo.completed;
        if (filter === 'completed') return todo.completed;
        return true;
    });

    return (
        <div className="app">
            <Header />
            <TodoInput addTodo={addTodo} />
            <TodoList todos={filteredTodos} toggleTodo={toggleTodo} />
            <Footer itemsLeft={todos.filter(todo => !todo.completed).length} filter={filter} setFilter={setFilter} clearCompleted={clearCompleted} />
        </div>
    );
};

export default App;