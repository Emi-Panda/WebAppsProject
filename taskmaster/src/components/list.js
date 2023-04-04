import React from 'react';
import '../CSS/style.css';


export default function List() {
    return (
        <div className='main-body'>
            <h1>My To Do List</h1>

            <h2>Urgent and Important Tasks</h2>
            <ul class="important-tasks">
                <li>
                    <div class="task-item">
                        <a href="detail.html">Task 1 name</a>
                        <button>Update</button>
                        <button>Delete</button>
                    </div>
                </li>
                <li>
                    <div class="task-item">
                        <a href="detail.html">Task 2 name</a>
                        <button>Update</button>
                        <button>Delete</button>
                    </div>
                </li>
                <li>
                    <div class="task-item">
                        <a href="detail.html">Task 3 name</a>
                        <button>Update</button>
                        <button>Delete</button>
                    </div>
                </li>
            </ul>
            <h2>Not Urgent and Not Important Tasks</h2>
            <ul class="unimportant-tasks">
                <li>
                    <div class="task-item">
                        <a href="detail.html">Task 4 name</a>
                        <button>Update</button>
                        <button>Delete</button>
                    </div>
                </li>
                <li>
                    <div class="task-item">
                        <a href="detail.html">Task 5 name</a>
                        <button>Update</button>
                        <button>Delete</button>
                    </div>
                </li>
                <li>
                    <div class="task-item">
                        <a href="detail.html">Task 6 name</a>
                        <button>Update</button>
                        <button>Delete</button>
                    </div>
                </li>
            </ul>
        </div>

    );
}

