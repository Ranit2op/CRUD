// import React, { useState } from "react";

// interface Task {
//     id: number;
//     taskName: string;
//     taskDesc: string;
//     taskDate: string;
// }

// const Task = () => {
//     const [tasks, setTasks] = useState<Task[]>([]);
//     const [newTask, setNewTask] = useState({
//         taskName: "",
//         taskDesc: "",
//         taskDate: "",
//     });

//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         setNewTask({ ...newTask, [name]: value });
//     };

//     const addTask = () => {
//         if (newTask.taskName && newTask.taskDesc && newTask.taskDate) {
//             const newId = tasks.length + 1;
//             setTasks([
//                 ...tasks,
//                 { id: newId, ...newTask },
//             ]);
//             setNewTask({ taskName: "", taskDesc: "", taskDate: "" });
//         } else {
//             alert("Please fill in all fields.");
//         }
//     };

//     const deleteTask = (id: number) => {
//         const updatedTasks = tasks.filter((task) => task.id !== id);
//         setTasks(updatedTasks);
//     };

//     return (
//         <div className="container mt-4">
//             <h1 className="text-center mb-4">Task Manager</h1>
//             <div className="mb-3">
//                 <label className="form-label">New Task</label>
//                 <input type="text" name="taskName" placeholder="Enter Task Name" value={newTask.taskName} onChange={handleInputChange} className="form-control" />
//                 <label className="form-label mt-3">Task Desc</label>
//                 <input type="text" name="taskDesc" placeholder="Enter Task Description" value={newTask.taskDesc} onChange={handleInputChange} className="form-control" />
//                 <label className="form-label mt-3">Task Date</label>
//                 <input type="date" name="taskDate" value={newTask.taskDate} onChange={handleInputChange} className="form-control" />
//                 <button className="btn btn-primary mt-4" onClick={addTask}> Add Task </button>
//             </div>
//             <table className="table table-bordered">
//                 <thead>
//                     <tr>
//                         <th>Sl No</th>
//                         <th>Task Name</th>
//                         <th>Task Description</th>
//                         <th>Task Date</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {tasks.map((task, index) => (
//                         <tr key={task.id}>
//                             <td>{index + 1}</td>
//                             <td>{task.taskName}</td>
//                             <td>{task.taskDesc}</td>
//                             <td>{task.taskDate}</td>
//                             <td>
//                                 <button className="btn btn-danger" onClick={() => deleteTask(task.id)}> Delete </button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default Task;


















import React, { useState } from "react";

// Task ইন্টারফেস যা একটি টাস্কের গঠন নির্ধারণ করে
interface Task {
    id: number; // টাস্কের ইউনিক আইডি
    taskName: string; // টাস্কের নাম
    taskDesc: string; // টাস্কের বর্ণনা
    taskDate: string; // টাস্কের তারিখ
}

const Task = () => {
    // টাস্কগুলোর তালিকার জন্য state
    const [tasks, setTasks] = useState<Task[]>([]);
    // নতুন টাস্কের তথ্য রাখার জন্য state
    const [newTask, setNewTask] = useState({
        taskName: "",
        taskDesc: "",
        taskDate: "",
    });

    // ইনপুট চেঞ্জ হ্যান্ডেল করার ফাংশন
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        // নতুন টাস্কের state আপডেট করা
        setNewTask({ ...newTask, [name]: value });
    };

    // নতুন টাস্ক যোগ করার ফাংশন
    const addTask = () => {
        // যদি সব ফিল্ড পূর্ণ থাকে, তাহলে নতুন টাস্ক যোগ করো
        if (newTask.taskName && newTask.taskDesc && newTask.taskDate) {
            const newId = tasks.length + 1; // নতুন টাস্কের জন্য আইডি জেনারেট করা
            setTasks([
                ...tasks,
                { id: newId, ...newTask },
            ]);
            // নতুন টাস্কের ইনপুট ফিল্ড খালি করা
            setNewTask({ taskName: "", taskDesc: "", taskDate: "" });
        } else {
            // যদি কোন ফিল্ড খালি থাকে, একটি অ্যালার্ট দেখাও
            alert("Please fill in all fields.");
        }
    };

    // একটি টাস্ক ডিলিট করার ফাংশন
    const deleteTask = (id: number) => {
        // টাস্ক ফিল্টার করে নতুন তালিকা তৈরি করা
        const updatedTasks = tasks.filter((task) => task.id !== id);
        // নতুন তালিকা সেট করা
        setTasks(updatedTasks);
    };

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Task Manager</h1>
            <div className="mb-3">
                <label className="form-label">New Task</label>
                {/* টাস্কের নাম ইনপুট */}
                <input type="text" name="taskName" placeholder="Enter Task Name" value={newTask.taskName} onChange={handleInputChange} className="form-control" />
                <label className="form-label mt-3">Task Desc</label>
                {/* টাস্কের বর্ণনার ইনপুট */}
                <input type="text" name="taskDesc" placeholder="Enter Task Description" value={newTask.taskDesc} onChange={handleInputChange} className="form-control" />
                <label className="form-label mt-3">Task Date</label>
                {/* টাস্কের তারিখ ইনপুট */}
                <input type="date" name="taskDate" value={newTask.taskDate} onChange={handleInputChange} className="form-control" />
                {/* টাস্ক যোগ করার বোতাম */}
                <button className="btn btn-primary mt-4" onClick={addTask}> Add Task </button>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Sl No</th>
                        <th>Task Name</th>
                        <th>Task Description</th>
                        <th>Task Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task, index) => (
                        <tr key={task.id}>
                            <td>{index + 1}</td> {/* সিরিয়াল নম্বর */}
                            <td>{task.taskName}</td> {/* টাস্কের নাম */}
                            <td>{task.taskDesc}</td> {/* টাস্কের বর্ণনা */}
                            <td>{task.taskDate}</td> {/* টাস্কের তারিখ */}
                            <td>
                                {/* টাস্ক ডিলিট করার বোতাম */}
                                <button className="btn btn-danger" onClick={() => deleteTask(task.id)}> Delete </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Task;
