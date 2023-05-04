import '../CSS/style.css';
import React, { useState } from "react";
import { useNavigate } from "react-router";



export default function Detail() {
    const [form, setForm] = useState({
        task: "",
        description: "",
        category: "",
        date: ""
    });
    const navigate = useNavigate();

    // These methods will update the state properties.
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    // This function will handle the submission.
    async function onSubmit(e) {

        e.preventDefault();

        // When a post request is sent to the create url, we'll add a new record to the database.
        const newTask = { ...form };

        await fetch("http://localhost:5050/record", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newTask),
        })
            .catch(error => {
                window.alert(error);
                return;
            });

        setForm({ task: "", description: "", category: "", date: "" });
        navigate("/");
    }
    return (
        <div className='main-body'>
            <h2>Create New Task</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label for="taskName">Task Name:</label>
                    <input type="text" id="taskName" name="taskName"
                        value={form.task}
                        onChange={(e) => updateForm({ task: e.target.value })} />
                </div>
                <div>
                    <label for="taskName">Description:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="description"
                        value={form.description}
                        onChange={(e) => updateForm({ description: e.target.value })}
                    />
                </div>


                <div>
                    <label for="taskCategory">Task Category:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="category"
                        value={form.category}
                        onChange={(e) => updateForm({ category: e.target.value })}
                    />
                </div>
                <div>
                    <label for="dueDate">Due Date:</label>
                    <input type="date" id="dueDate" name="dueDate" value={form.date}
                        onChange={(e) => updateForm({ date: e.target.value })} />

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

