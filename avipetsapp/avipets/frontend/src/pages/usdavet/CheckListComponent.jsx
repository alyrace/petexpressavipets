import React, {useState} from 'react'
import ChecklistItem from './ChecklistItem';


const CheckListComponent = ({
    headTitle, 
    tasks, 
    handleChange,
    addTask,
    editTask,
    deleteTask,
    strikeUnstrike,
    addButton,
    editButton,
    deleteButton,
    activeItem,
}) => { 
    return (
      <section className="mt-5">
        <div className="row text-center text-light">
          <h2 className="pt-3">{headTitle}</h2>
        </div>
        <div className="row">
          <div className="container task_container pb-5">
            <div id="form_wrapper">
              <form id="form" onSubmit={addTask}>
                <div className="row d-flex justify-content-center">
                  <div className="col-6 mt-5">
                    <div className="input-group-lg form-container">
                      <input
                        id="title"
                        className="form-control"
                        type="text"
                        name="title"
                        placeholder="Add task"
                        value={activeItem.title}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="mb-5 col-2 mt-5 d-flex align-content-center">
                    <input
                      id={addButton}
                      className="btn"
                      type="submit"
                      name="Add"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div id="list_wrapper">
              {tasks?.map((task) => (
                <div key={task.id}>
                  <ChecklistItem
                    editTask={editTask}
                    deleteTask={deleteTask}
                    strikeUnstrike={strikeUnstrike}
                    task={task}
                    deleteButton={deleteButton}
                    editButton={editButton}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
}

export default CheckListComponent;
