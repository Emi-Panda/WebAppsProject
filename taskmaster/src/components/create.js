import React from 'react';
import '../CSS/style.css';



export default function Detail() {
    return (
        <div className='main-body'>
            <h2>Create New Task</h2>
            <form action="list.html">
                <div>
                    <label for="taskName">Task Name:</label>
                    <input type="text" id="taskName" name="taskName" />
                </div>
                <div>
                    <label for="taskCategory">Task Category:</label>
                    <select id="taskCategory" name="taskCategory">
                        <option value="urgent">Urgent</option>
                        <option value="important">Important</option>
                        <option value="notUrgent">Not Urgent</option>
                        <option value="notImportant">Not Important</option>
                    </select>
                </div>
                <div>
                    <label for="dueDate">Due Date:</label>
                    <input type="date" id="dueDate" name="dueDate" />
                </div>
                <div>
                    <label for="status">Status:</label>
                    <select id="status" name="status">
                        <option value="pending">Pending</option>
                        <option value="overdue">Overdue</option>
                        <option value="incomplete">Incomplete</option>
                        <option value="done">Done</option>
                    </select>
                </div>
                <div>
                    <label for="location">Location:</label>
                    <input type="text" id="location" name="location" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

