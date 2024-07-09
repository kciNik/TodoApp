import React, { useState } from 'react';

interface TodoInputProps {
    addTodo: (text: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ addTodo }) => {
    const [text, setText] = useState('');

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && text.trim() !== '') {
            addTodo(text);
            setText('');
        }
    };

    return (
        <input
            className="todo-input"
            placeholder="What needs to be done?"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
        />
    );
};

export default TodoInput;
