import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = () => {
  // sample values to be replaced
  let totalTask = 0;
  let unCompletedTask = 0;

  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-header" className={styles.taskHeader}>
      <b>TODO LIST</b>
      <br></br>
      <br></br>
      <br></br>
      <b>YOU HAVE {unCompletedTask} OUT OF {totalTask}</b>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default TaskHeader;
