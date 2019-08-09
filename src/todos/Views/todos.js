import React from 'react';
import AddTodo from './addTodo';
import TodoList from './todoList';
import Style from './style.scss';

export default () => {
    return (
        <div className={Style.todos}>
            <AddTodo />
            <TodoList />
        </div>
    );
}