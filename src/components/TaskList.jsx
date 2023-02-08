import TaskCard from "./TaskCard";

export function TaskList({tasks}) {

if (tasks.length === 0) {
    return <h1> No hay mensajes aun </h1>
} else {
    return (
        
    <div>
        {tasks.map((task) => (
                <TaskCard key={task.id} task= {task}/>
            ) )
        }
    </div>
    );
}

}


