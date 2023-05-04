//replaced by DB.js
import { nanoid } from 'nanoid';

class TaskModel {
  constructor(taskName, taskDescription, category, dueDate) {
    this.taskID = nanoid();
    this.taskName = taskName;
    this.taskDescription = taskDescription;
    this.category = category;
    this.dueDate = dueDate;
  }
}

const tasks = [
  new TaskModel('Do homework', 'Task 1 description', 'urgent-important', new Date()),
  new TaskModel('Clean apartment', 'Task 2 description', 'urgent-important', new Date()),
  new TaskModel('Haircut appointment', 'Task 3 description', 'urgent-important', new Date()),
  new TaskModel('Task 4 name', 'Task 4 description', 'not-urgent-not-important', new Date()),
  new TaskModel('Task 5 name', 'Task 5 description', 'not-urgent-not-important', new Date()),
  new TaskModel('Task 6 name', 'Task 6 description', 'not-urgent-not-important', new Date())
];

const getTasks = () => {
  return new Promise((resolve) => {
    // simulate async call
    setTimeout(() => {
      resolve(tasks);
    }, 1000);
  });
};



export { TaskModel, getTasks };
