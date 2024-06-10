import React, { useState } from "react";
import Task1 from "./taskOne/TaskOne.jsx";
import Task2 from "./taskTwo/taskTwo.jsx";
import Task3 from "./taskThree/TaskThree.jsx"
const App = () => {
  const [taskItem, setTaskItem] = useState("Task1");
  const TaskItemComponent = {
    Task1: <Task1 />,
    Task2: <Task2 />,
    Task3:<Task3/>
  };
  return (
    <div>
      <div>
        <div>
          <input type="radio" id="task1" checked={taskItem === "Task1"}

            onChange={() => setTaskItem("Task1")} />
          <label htmlFor="task1">Task 1</label>
        </div>
        <div>
          <input type="radio" id="task2" checked={taskItem === "Task2"}

            onChange={() => setTaskItem("Task2")} />
          <label htmlFor="task2">Task 2</label>
        </div>
        <div>
          <input type="radio" id="task3" checked={taskItem === "Task3"}

            onChange={() => setTaskItem("Task3")} />
          <label htmlFor="task3">Task 3</label>
        </div>
      </div>
      {TaskItemComponent[taskItem]}
    </div>
  );
};
export default App;