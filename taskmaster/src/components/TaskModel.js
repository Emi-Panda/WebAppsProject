const TaskModel = {
    taskID: "",
    taskName: "",
    taskListTopic: "",
    categoryID: "",
    dueDate: "",
    status: "",
    getTaskID: function() {
      return this.taskID;
    },
    setTaskID: function(taskID) {
      this.taskID = taskID;
    },
    getTaskName: function() {
      return this.taskName;
    },
    setTaskName: function(taskName) {
      this.taskName = taskName;
    },
    getTaskListTopic: function() {
      return this.taskListTopic;
    },
    setTaskListTopic: function(taskListTopic) {
      this.taskListTopic = taskListTopic;
    },
    getCategoryID: function() {
      return this.categoryID;
    },
    setCategoryID: function(categoryID) {
      this.categoryID = categoryID;
    },
    getDueDate: function() {
      return this.dueDate;
    },
    setDueDate: function(dueDate) {
      this.dueDate = dueDate;
    },
    getStatus: function() {
      return this.status;
    },
    setStatus: function(status) {
      this.status = status;
    }
  };
  
  export default TaskModel;
  