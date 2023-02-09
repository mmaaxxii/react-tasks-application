import {TaskList} from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
  <div>
    <TaskForm createTask={createTask}/>
    <TaskList tasks={tasks} deleteTask={deleteTask}  />
  </div>
  );
}
export default App;
