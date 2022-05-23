import React from "react";
import styles from "./addTask.module.css";
import useState from "react"

const AddTask = ({getData}) => {
  // NOTE: do not delete `data-cy` key value pair
  const [text,settext]=useState("");
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input"  

       type="text" />
      <button  data-cy="add-task-button">ADD TODO</button>
    </div>
  );
};

export default AddTask;
