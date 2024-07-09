import React from 'react';

interface TodoItemProps {
    todo: { id: number; text: string; completed: boolean };
    toggleTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo }) => {
    return (
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
            />
            <span>{todo.text}</span>
        </li>
    );
};

export default TodoItem;
