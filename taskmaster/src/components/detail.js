import React from 'react';
import '../CSS/style.css';


export default function Detail() {
    const image = require("./images/logo.png")
    return (
        <div className='main-body'>
            <h1>View Task Detail</h1>

            <img class="task-list" src={image} alt="Task Image"/>

                <div class="table-container">
                    <table>
                        <tr>
                            <td><b>Category/Topic:</b></td>
                            <td>Urgent</td>
                        </tr>
                        <tr>
                            <td><b>Due Date:</b></td>
                            <td>2023-03-01</td>
                        </tr>
                        <tr>
                            <td><b>Status:</b></td>
                            <td>Pending</td>
                        </tr>
                        <tr>
                            <td><b>Location:</b></td>
                            <td>New York</td>
                        </tr>
                    </table>
                </div>

                <p><b>Description:</b></p>
                <p>Hello World!</p>

                <button><a href="list.html">Add to My To Do List</a></button>
        </div>
    );
}

