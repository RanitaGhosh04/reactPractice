import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]); // State to store the list of tasks
  const [newTask, setNewTask] = useState(""); // State to store the text of the new task
  const [editingIndex, setEditingIndex] = useState(null); // Track which task is being edited
  const [editedTask, setEditedTask] = useState(""); // Temporarily hold the edited task text

  // Function to add a new task
  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]); // Add a new task with a 'completed' flag
      setNewTask(""); // Clear the input field
    }
  };

  // Function to toggle task completion
  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Function to delete a task
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index); // Remove the task at the given index
    setTasks(updatedTasks);
  };

  // Function to start editing a task
  const startEditing = (index) => {
    setEditingIndex(index);
    setEditedTask(tasks[index].text); // Load the task text into editedTask
  };

  // Function to save the edited task
  const saveTask = () => {
    const updatedTasks = tasks.map((task, i) =>
      i === editingIndex ? { ...task, text: editedTask } : task
    );
    setTasks(updatedTasks);
    setEditingIndex(null); // Exit editing mode
    setEditedTask(""); // Clear the edited task input
  };

  return (
    <div>
      <h1>To-Do List</h1>

      {/* Input and Add Button */}
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)} // Update newTask state as user types
          placeholder="Enter a task"
        />
        <button onClick={addTask} style={{ padding: "10px" }}>
          Add Task
        </button>
      </div>

      {/* Display Task List */}
      <ul style={{listStyle: "none" }}>
        {tasks.map((task, index) => (
          <li
            key={index}
          >
            {editingIndex === index ? (
              <input
                type="text"
                value={editedTask}
                onChange={(e) => setEditedTask(e.target.value)} // Update edited task state
              />
            ) : (
              <span
                onClick={() => toggleTaskCompletion(index)} // Mark task as completed when clicked
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                  cursor: "pointer",
                }}
              >
                {task.text}
              </span>
            )}
            {editingIndex === index ? (
              <button
                onClick={saveTask}
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => startEditing(index)}
              >
                Edit
              </button>
            )}
            <button
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
