import React from 'react';
import Task from './Task'
import './Task.css'

function Table(props) {
    return (
        <table className="ui celled table todo-tasks">
        <thead>
        <tr className="table-header">
            <th>ID</th>
            <th>Description</th>
            <th>Status</th>
        </tr></thead>
        <tbody>
            {props.todos.map((todo) => 
                <Task task={todo} key={todo.id}/>
            )
        }
        </tbody>
        </table>
    );
}

export default Table;
