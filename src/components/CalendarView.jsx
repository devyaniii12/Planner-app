// import React, { useState } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import { Modal, Button, Form } from 'react-bootstrap';
// import './CalendarView.css'; // For additional full-screen styling

// const CalendarView = () => {
//   const [date, setDate] = useState(new Date());
//   const [showModal, setShowModal] = useState(false);
//   const [tasks, setTasks] = useState({});
//   const [taskInput, setTaskInput] = useState('');

//   const handleDayClick = (selectedDate) => {
//     setDate(selectedDate);
//     setShowModal(true);
//   };

//   const handleAddTask = () => {
//     const dateKey = date.toDateString();
//     const existingTasks = tasks[dateKey] || [];
//     setTasks({
//       ...tasks,
//       [dateKey]: [...existingTasks, { text: taskInput, done: false }]
//     });
//     setTaskInput('');
//   };

//   const handleToggleTask = (taskIndex) => {
//     const dateKey = date.toDateString();
//     const updatedTasks = [...tasks[dateKey]];
//     updatedTasks[taskIndex].done = !updatedTasks[taskIndex].done;
//     setTasks({ ...tasks, [dateKey]: updatedTasks });
//   };

//   const isDayComplete = (date) => {
//     const dateKey = date.toDateString();
//     const dayTasks = tasks[dateKey] || [];
//     return dayTasks.length > 0 && dayTasks.every(task => task.done);
//   };

//   return (
//     <div className="calendar-container">
//       <Calendar
//         value={date}
//         onClickDay={handleDayClick}
//         tileClassName={({ date }) =>
//           isDayComplete(date) ? 'bg-success text-white' : null
//         }
//       />

//       <Modal show={showModal} onHide={() => setShowModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Tasks for {date.toDateString()}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form.Control
//             type="text"
//             placeholder="Add a task"
//             value={taskInput}
//             onChange={(e) => setTaskInput(e.target.value)}
//           />
//           <Button className="mt-2" onClick={handleAddTask}>Add Task</Button>

//           <ul className="mt-3">
//             {(tasks[date.toDateString()] || []).map((task, index) => (
//               <li
//                 key={index}
//                 style={{ textDecoration: task.done ? 'line-through' : 'none', cursor: 'pointer' }}
//                 onClick={() => handleToggleTask(index)}
//               >
//                 {task.text}
//               </li>
//             ))}
//           </ul>
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// };

// export default CalendarView;


// import React, { useState } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import './CalendarView.css'; // for custom colors

// export default function CalendarView() {
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [tasks, setTasks] = useState({
//     '2025-06-25': [
//       { text: 'AWS all lectures', completed: false },
//       { text: 'DSA arrays question', completed: false }
//     ]
//   });

//   const handleDateClick = (date) => {
//     setSelectedDate(date);
//   };

//   const toggleTaskCompletion = (taskIndex) => {
//     const dateKey = selectedDate.toISOString().split('T')[0];
//     const updatedTasks = [...tasks[dateKey]];
//     updatedTasks[taskIndex].completed = !updatedTasks[taskIndex].completed;

//     setTasks({
//       ...tasks,
//       [dateKey]: updatedTasks
//     });
//   };

//   return (
//     <div className="container mt-4">
//       <h2 className="text-center mb-4">Planner App</h2>

//       <Calendar
//         onClickDay={handleDateClick}
//         tileClassName={({ date }) => {
//           const dateKey = date.toISOString().split('T')[0];
//           if (tasks[dateKey]) {
//             const total = tasks[dateKey].length;
//             const completed = tasks[dateKey].filter(t => t.completed).length;

//             if (completed === total) return 'tile-complete';
//             if (completed > 0) return 'tile-partial';
//             return 'tile-incomplete';
//           }
//           return '';
//         }}
//       />

//       {selectedDate && (
//         <div className="mt-4">
//           <h4>Tasks for {selectedDate.toDateString()}</h4>
//           {tasks[selectedDate.toISOString().split('T')[0]]?.map((task, index) => (
//             <div key={index}>
//               <input
//                 type="checkbox"
//                 checked={task.completed}
//                 onChange={() => toggleTaskCompletion(index)}
//               />
//               <span style={{ textDecoration: task.completed ? 'line-through' : 'none', marginLeft: '8px' }}>
//                 {task.text}
//               </span>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }


// import React, { useState } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import "./CalendarView.css";
// import { Button, Form, Modal } from "react-bootstrap";

// const CalendarView = () => {
//   const [date, setDate] = useState(new Date());
//   const [tasks, setTasks] = useState({});
//   const [showModal, setShowModal] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [newTask, setNewTask] = useState("");
//   const [editIndex, setEditIndex] = useState(null);
//   const [editValue, setEditValue] = useState("");

//   const handleDateClick = (value) => {
//     setSelectedDate(value);
//     setShowModal(true);
//   };

//   const handleAddTask = () => {
//     if (!newTask.trim()) return;
//     const dateKey = selectedDate.toDateString();
//     const updatedTasks = { ...tasks };
//     updatedTasks[dateKey] = updatedTasks[dateKey] || [];
//     updatedTasks[dateKey].push({ text: newTask, completed: false });
//     setTasks(updatedTasks);
//     setNewTask("");
//   };

//   const handleTaskToggle = (index) => {
//     const dateKey = selectedDate.toDateString();
//     const updatedTasks = { ...tasks };
//     updatedTasks[dateKey][index].completed = !updatedTasks[dateKey][index].completed;
//     setTasks(updatedTasks);
//   };

//   const handleTaskDelete = (index) => {
//     const dateKey = selectedDate.toDateString();
//     const updatedTasks = { ...tasks };
//     updatedTasks[dateKey].splice(index, 1);
//     setTasks(updatedTasks);
//   };

//   const handleTaskEdit = (index, text) => {
//     setEditIndex(index);
//     setEditValue(text);
//   };

//   const saveTaskEdit = () => {
//     if (editValue.trim() === "") return;
//     const dateKey = selectedDate.toDateString();
//     const updatedTasks = { ...tasks };
//     updatedTasks[dateKey][editIndex].text = editValue;
//     setTasks(updatedTasks);
//     setEditIndex(null);
//     setEditValue("");
//   };

//   const getTileClassName = ({ date }) => {
//     const dateKey = date.toDateString();
//     if (tasks[dateKey]) {
//       const total = tasks[dateKey].length;
//       const completed = tasks[dateKey].filter((t) => t.completed).length;
//       if (completed === total && total > 0) return "tile-complete";
//       if (completed > 0) return "tile-partial";
//       return "tile-incomplete";
//     }
//     return "";
//   };

//   return (
//     <div>
//       <h2 className="text-center my-3">Planner App</h2>
//       <Calendar
//         onClickDay={handleDateClick}
//         value={date}
//         tileClassName={getTileClassName}
//       />

//       <Modal show={showModal} onHide={() => setShowModal(false)} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Tasks for {selectedDate?.toDateString()}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {selectedDate && (
//             <>
//               <Form className="d-flex mb-3">
//                 <Form.Control
//                   type="text"
//                   placeholder="Add a task"
//                   value={newTask}
//                   onChange={(e) => setNewTask(e.target.value)}
//                 />
//                 <Button className="ms-2" onClick={handleAddTask}>
//                   Add
//                 </Button>
//               </Form>

//               <ul className="list-group">
//                 {tasks[selectedDate.toDateString()]?.map((task, index) => (
//                   <li
//                     key={index}
//                     className="list-group-item d-flex justify-content-between align-items-center"
//                   >
//                     <div>
//                       <Form.Check
//                         type="checkbox"
//                         checked={task.completed}
//                         onChange={() => handleTaskToggle(index)}
//                         className="me-2"
//                       />
//                       {editIndex === index ? (
//                         <>
//                           <Form.Control
//                             type="text"
//                             value={editValue}
//                             onChange={(e) => setEditValue(e.target.value)}
//                             className="d-inline w-50 me-2"
//                           />
//                           <Button size="sm" onClick={saveTaskEdit}>
//                             Save
//                           </Button>
//                         </>
//                       ) : (
//                         <span
//                           style={{
//                             textDecoration: task.completed
//                               ? "line-through"
//                               : "none",
//                           }}
//                         >
//                           {task.text}
//                         </span>
//                       )}
//                     </div>
//                     <div>
//                       {editIndex !== index && (
//                         <Button
//                           size="sm"
//                           variant="outline-primary"
//                           onClick={() => handleTaskEdit(index, task.text)}
//                           className="me-2"
//                         >
//                           Edit
//                         </Button>
//                       )}
//                       <Button
//                         size="sm"
//                         variant="outline-danger"
//                         onClick={() => handleTaskDelete(index)}
//                       >
//                         Delete
//                       </Button>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             </>
//           )}
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// };

// export default CalendarView;


// import React, { useState, useEffect } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import "./CalendarView.css";
// import { Button, Form, Modal } from "react-bootstrap";

// const CalendarView = () => {
//   const [tasks, setTasks] = useState({});
//   const [showModal, setShowModal] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [newTask, setNewTask] = useState("");
//   const [editIndex, setEditIndex] = useState(null);
//   const [editValue, setEditValue] = useState("");

//   // Load tasks from localStorage on mount
//   useEffect(() => {
//     const savedTasks = localStorage.getItem("tasks");
//     if (savedTasks) {
//       setTasks(JSON.parse(savedTasks));
//     }
//   }, []);

//   // Save tasks to localStorage whenever they change
//   useEffect(() => {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   }, [tasks]);

//   const handleDateClick = (value) => {
//     setSelectedDate(value);
//     setShowModal(true);
//   };

//   const handleAddTask = () => {
//     if (!newTask.trim()) return;
//     const dateKey = selectedDate.toDateString();
//     const updatedTasks = { ...tasks };
//     updatedTasks[dateKey] = updatedTasks[dateKey] || [];
//     updatedTasks[dateKey].push({ text: newTask, completed: false });
//     setTasks(updatedTasks);
//     setNewTask("");
//   };

//   const handleTaskToggle = (index) => {
//     const dateKey = selectedDate.toDateString();
//     const updatedTasks = { ...tasks };
//     updatedTasks[dateKey][index].completed = !updatedTasks[dateKey][index].completed;
//     setTasks(updatedTasks);
//   };

//   const handleTaskDelete = (index) => {
//     const dateKey = selectedDate.toDateString();
//     const updatedTasks = { ...tasks };
//     updatedTasks[dateKey].splice(index, 1);
//     setTasks(updatedTasks);
//   };

//   const handleTaskEdit = (index, text) => {
//     setEditIndex(index);
//     setEditValue(text);
//   };

//   const saveTaskEdit = () => {
//     if (editValue.trim() === "") return;
//     const dateKey = selectedDate.toDateString();
//     const updatedTasks = { ...tasks };
//     updatedTasks[dateKey][editIndex].text = editValue;
//     setTasks(updatedTasks);
//     setEditIndex(null);
//     setEditValue("");
//   };

//   const getTileClassName = ({ date }) => {
//     const dateKey = date.toDateString();
//     if (tasks[dateKey]) {
//       const total = tasks[dateKey].length;
//       const completed = tasks[dateKey].filter((t) => t.completed).length;
//       if (completed === total && total > 0) return "tile-complete";
//       if (completed > 0) return "tile-partial";
//       return "tile-incomplete";
//     }
//     return "";
//   };

//   return (
//     <div>
//       <h2 className="text-center my-3">Planner App</h2>
//       <Calendar
//         onClickDay={handleDateClick}
//         tileClassName={getTileClassName}
//       />

//       <Modal show={showModal} onHide={() => setShowModal(false)} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Tasks for {selectedDate?.toDateString()}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {selectedDate && (
//             <>
//               <Form className="d-flex mb-3">
//                 <Form.Control
//                   type="text"
//                   placeholder="Add a task"
//                   value={newTask}
//                   onChange={(e) => setNewTask(e.target.value)}
//                 />
//                 <Button className="ms-2" onClick={handleAddTask}>
//                   Add
//                 </Button>
//               </Form>

//               <ul className="list-group">
//                 {tasks[selectedDate.toDateString()]?.map((task, index) => (
//                   <li
//                     key={index}
//                     className="list-group-item d-flex justify-content-between align-items-center"
//                   >
//                     <div>
//                       <Form.Check
//                         type="checkbox"
//                         checked={task.completed}
//                         onChange={() => handleTaskToggle(index)}
//                         className="me-2"
//                       />
//                       {editIndex === index ? (
//                         <>
//                           <Form.Control
//                             type="text"
//                             value={editValue}
//                             onChange={(e) => setEditValue(e.target.value)}
//                             className="d-inline w-50 me-2"
//                           />
//                           <Button size="sm" onClick={saveTaskEdit}>
//                             Save
//                           </Button>
//                         </>
//                       ) : (
//                         <span
//                           style={{
//                             textDecoration: task.completed
//                               ? "line-through"
//                               : "none",
//                           }}
//                         >
//                           {task.text}
//                         </span>
//                       )}
//                     </div>
//                     <div>
//                       {editIndex !== index && (
//                         <Button
//                           size="sm"
//                           variant="outline-primary"
//                           onClick={() => handleTaskEdit(index, task.text)}
//                           className="me-2"
//                         >
//                           Edit
//                         </Button>
//                       )}
//                       <Button
//                         size="sm"
//                         variant="outline-danger"
//                         onClick={() => handleTaskDelete(index)}
//                       >
//                         Delete
//                       </Button>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             </>
//           )}
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// };


// export default CalendarView;
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CalendarView.css";
import { Button, Form, Modal } from "react-bootstrap";

const CalendarView = () => {
  const [tasks, setTasks] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [newTask, setNewTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  // Load tasks from localStorage on mount
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDateClick = (value) => {
    setSelectedDate(value);
    setShowModal(true);
  };

  const handleAddTask = () => {
    if (!newTask.trim()) return;
    const dateKey = selectedDate.toDateString();
    const updatedTasks = { ...tasks };
    updatedTasks[dateKey] = updatedTasks[dateKey] || [];
    updatedTasks[dateKey].push({ text: newTask, completed: false });
    setTasks(updatedTasks);
    setNewTask("");
  };

  const handleTaskToggle = (index) => {
    const dateKey = selectedDate.toDateString();
    const updatedTasks = { ...tasks };
    updatedTasks[dateKey][index].completed = !updatedTasks[dateKey][index].completed;
    setTasks(updatedTasks);
  };

  const handleTaskDelete = (index) => {
    const dateKey = selectedDate.toDateString();
    const updatedTasks = { ...tasks };
    updatedTasks[dateKey].splice(index, 1);

    // If no tasks remain for the day, remove the key
    if (updatedTasks[dateKey].length === 0) {
      delete updatedTasks[dateKey];
    }

    setTasks(updatedTasks);
  };

  const handleTaskEdit = (index, text) => {
    setEditIndex(index);
    setEditValue(text);
  };

  const saveTaskEdit = () => {
    if (editValue.trim() === "") return;
    const dateKey = selectedDate.toDateString();
    const updatedTasks = { ...tasks };
    updatedTasks[dateKey][editIndex].text = editValue;
    setTasks(updatedTasks);
    setEditIndex(null);
    setEditValue("");
  };

  const getTileClassName = ({ date }) => {
    const dateKey = date.toDateString();
    const dayTasks = tasks[dateKey];

    if (dayTasks && dayTasks.length > 0) {
      const completed = dayTasks.filter(t => t.completed).length;
      if (completed === dayTasks.length) return "tile-complete";
      if (completed > 0) return "tile-partial";
      return "tile-incomplete"; // Red only if tasks exist but none are done
    }

    return "";
  };

  return (
    <div>
      <h2 className="text-center my-3">Planner App</h2>
      <Calendar
        onClickDay={handleDateClick}
        tileClassName={getTileClassName}
      />

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Tasks for {selectedDate?.toDateString()}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedDate && (
            <>
              <Form className="d-flex mb-3">
                <Form.Control
                  type="text"
                  placeholder="Add a task"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                />
                <Button className="ms-2" onClick={handleAddTask}>
                  Add
                </Button>
              </Form>

              <ul className="list-group">
                {tasks[selectedDate.toDateString()]?.map((task, index) => (
                  <li
                    key={index}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <Form.Check
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => handleTaskToggle(index)}
                        className="me-2"
                      />
                      {editIndex === index ? (
                        <>
                          <Form.Control
                            type="text"
                            value={editValue}
                            onChange={(e) => setEditValue(e.target.value)}
                            className="d-inline w-50 me-2"
                          />
                          <Button size="sm" onClick={saveTaskEdit}>
                            Save
                          </Button>
                        </>
                      ) : (
                        <span
                          style={{
                            textDecoration: task.completed
                              ? "line-through"
                              : "none",
                          }}
                        >
                          {task.text}
                        </span>
                      )}
                    </div>
                    <div>
                      {editIndex !== index && (
                        <Button
                          size="sm"
                          variant="outline-primary"
                          onClick={() => handleTaskEdit(index, task.text)}
                          className="me-2"
                        >
                          Edit
                        </Button>
                      )}
                      <Button
                        size="sm"
                        variant="outline-danger"
                        onClick={() => handleTaskDelete(index)}
                      >
                        Delete
                      </Button>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CalendarView;

