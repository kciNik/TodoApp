import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('adds a new task', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('What needs to be done?');
    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    expect(screen.getByText('New Task')).toBeInTheDocument();
});

test('toggles task completion', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('What needs to be done?');
    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
});

test('filters tasks', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('What needs to be done?');
    fireEvent.change(input, { target: { value: 'Task 1' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    fireEvent.change(input, { target: { value: 'Task 2' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    const [task1, task2] = screen.getAllByRole('checkbox');
    fireEvent.click(task1);

    const activeButton = screen.getByText('Active');
    fireEvent.click(activeButton);
    expect(screen.getByText('Task 2')).toBeInTheDocument();
    expect(screen.queryByText('Task 1')).toBeNull();
});
