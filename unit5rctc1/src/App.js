import React from "react";
import{ AddTask } from "../src/components/AddTask"
import {Counter} from "../src/components/Counter"
import {Task} from "../src/components/Task"
import {TaskHeader } from "../src/components/TaskHeader"
import { Tasks} from "../src/components/Tasks"

function App() {
  return <div className="App">
    <TaskHeader />

    <Tasks />
    <Task />
  </div>;
}

export default App;
