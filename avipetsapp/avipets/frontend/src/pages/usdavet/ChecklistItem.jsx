import React from 'react'

const ChecklistItem = ({
    task,
    deleteTask,
    editTask, 
    strikeUnstrike,
    editButton,
    deleteButton,
}) => {

    return (
      <div className="task-wrapper d-flex align-items-center">
        <div onClick={() => strikeUnstrike(task)} className="item_title">
          {task.completed === false ? (
            <span>{task.title}</span>
          ) : (
            <strike>{task.title}</strike>
          )}
        </div>
        <div className="item_btns">
          <button
            className="btn"
            id={editButton}
            onClick={() => editTask(task)}
          >
            <i className="fas fa-edit fa-2x"></i>
          </button>
        </div>
        <div>
          <button
            className="btn"
            id={deleteButton}
            onClick={() => deleteTask(task)}
          >
            <i className="fas fa-minus-circle fa-2x"></i>
          </button>
        </div>
      </div>
    );
}

export default ChecklistItem;
