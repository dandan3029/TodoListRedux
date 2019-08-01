import React from 'react';
import {View as Todos} from './todos';
import {View as Filter} from './filter';

function TodoApp() {
    return (
        <div>
            <Todos />
            <Filter />
        </div>
    );
}

export default TodoApp;