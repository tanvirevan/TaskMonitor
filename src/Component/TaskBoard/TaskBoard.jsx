import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";
import NoTaskFound from "./NoTaskFound";


export default function TaskBoard() 
    {
        // const defaultTask = 
        //     {
            
        //     }
        const [tasks,setTask] = useState([]);
        const [showAddModal, setShowAddModal] = useState(false);
        const [taskToUpdate, setTaskToUpdate] = useState(null);

        function handelAddEditTask(newTask,isAdd)
            {
                if(isAdd)
                    {
                        setTask([...tasks,newTask]);
                    }
                else
                    {
                        setTask(
                            tasks.map((task)=>{
                                if(task.id === newTask.id)
                                    {
                                        return newTask;
                                    }
                                return task;
                            })
                        )
                    }
                setShowAddModal(false);
            }
        function handelOnFav(taskId)
            {
                const taskIndex = tasks.findIndex(task => task.id === taskId);
                const newTasks = [...tasks];
                newTasks[taskIndex].isFavorite = !newTasks[taskIndex].isFavorite;
                setTask(newTasks);
            }
        function handelEditTask(editTask)
            {
                setTaskToUpdate(editTask);
                setShowAddModal(true);
            }
        function handelClose()
            {
                setShowAddModal(false);
                setTaskToUpdate(null)
            }
        function handelDeleteTask(taskID)
            {
                const afterDelete = tasks.filter(task => task.id !== taskID);
                setTask(afterDelete);
            }
        function handelDeleteAll()
            {
                tasks.length=0;
                setTask([...tasks]);
            }
        function handelSearch(searchItem)
            {
                const filtered = tasks.filter(task => 
                    task.title.toLowerCase().includes(searchItem.toLowerCase())
                )
                setTask([...filtered]);
            }

        return (
            <section className="mb-20 w-full" id="tasks">
                {
                    showAddModal && <AddTaskModal 
                    onSave={handelAddEditTask}
                    onClose={handelClose}
                    taskToUpdate = {taskToUpdate}
                    />
                }
                <div className="container w-full mx-auto">
                    <div className="p-2 flex justify-end">
                        <SearchTask onSearch={handelSearch}/>
                    </div>

                    <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
                        <TaskActions onAddTask = {() => setShowAddModal(true)}
                            onDeleteAll={handelDeleteAll}
                        />
                        <div>
                            {
                                tasks.length > 0?
                                    (
                                        <TaskList
                                            tasks = {tasks}
                                            onEdit = {handelEditTask}
                                            onDelete={handelDeleteTask}
                                            onFav={handelOnFav}
                                        />
                                    )
                                    :
                                    <NoTaskFound/>
                            }
                        </div>
                    </div>
                </div>
            </section>

            )
    }
