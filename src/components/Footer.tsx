import React from 'react';

interface FooterProps {
    itemsLeft: number;
    filter: string;
    setFilter: (filter: string) => void;
    clearCompleted: () => void;
}

const Footer: React.FC<FooterProps> = ({ itemsLeft, filter, setFilter, clearCompleted }) => {
    return (
        <footer className="footer">
            <span>{itemsLeft} items left</span>
            <div className="filters">
                <button onClick={() => setFilter('all')} className={filter === 'all' ? 'selected' : ''}>All</button>
                <button onClick={() => setFilter('active')} className={filter === 'active' ? 'selected' : ''}>Active</button>
                <button onClick={() => setFilter('completed')} className={filter === 'completed' ? 'selected' : ''}>Completed</button>
            </div>
            <button onClick={clearCompleted}>Clear completed</button>
        </footer>
    );
};

export default Footer;
