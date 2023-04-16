import React, { useState, useEffect } from 'react';
import '../CSS/style.css';
import { getTasks, getTask } from './DB';

export default function List() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            const taskList = await getTasks();
            setTasks(taskList);
        };
        fetchTasks();
    }, []);

    const renderTaskList = (taskCategory) => {
        const filteredTasks = tasks.filter(task => task.category === taskCategory);
        return (
            <ul className={`${taskCategory}-tasks`}>
                {filteredTasks.map(task => (
                    <li key={task.taskID}>
                        <div className="task-item">
                            <a href={`detail/${task.taskID}`}>{task.taskName}</a>
                            <button>Update</button>
                            <button>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div className='main-body'>
            <h1>My To Do List</h1>

            <h2>Urgent and Important Tasks</h2>
            {renderTaskList('urgent-important')}

            <h2>Not Urgent and Not Important Tasks</h2>
            {renderTaskList('not-urgent-not-important')}
        </div>
    );
}
