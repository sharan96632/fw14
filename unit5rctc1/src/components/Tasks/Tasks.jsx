import React from "react";
import styles from "./tasks.module.css";
import tasks from "../../data/tasks.json"
function App() {
  const Users = [
    {
      "id": 1,
      "text": "Push up",
      "done": true,
      "count": 2
    },
    {
      "id": 2,
      "text": "Pull Up",
      "done": true,
      "count": 3
    },
    {
      "id": 3,
      "text": "Squats",
      "done": false,
      "count": 1
    },
    {
      "id": 4,
      "text": "Sprint",
      "done": false,
      "count": 5
    },
    {
      "id": 5,
      "text": "Stairs",
      "done": false,
      "count": 200
    }
  ];
  return (
   <div className="hii">
      <ul>
      {Users.map((data) => (
        <li key={data.id}> 
         <p>{data.text}</p>
        </li>
      ))}
    </ul>
   </div>
  );
}
export default App;