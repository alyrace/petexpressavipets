import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router";
import axios from "axios";

import CheckListComponent from "./CheckListComponent";

//axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
//axios.defaults.xsrfCookieName = "csrftoken";

const DriverUsdaChecklist = ({ isAuthenticated }) => {
  if (isAuthenticated === false) return <Redirect to="/login" />;
  const [tasks, setTask] = useState([]);
  const [editing, setEditing] = useState(false);
  const [activeItem, setActiveItem] = useState({
    id: null,
    title: "",
    completed: false,
  });

  function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== "") {
      var cookies = document.cookie.split(";");
      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) === name + "=") {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }
  //=========GET ATSK DATA======================
  const fetchData = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/usdavet/drvrusda/`
      );
      setTask(res.data.results);
      console.log(res.data.results);
    } catch (err) {
      console.log(err);
    }
  };
  //store data
  useEffect(() => {
    fetchData();
  }, []);
  //===============ADD TASK=================
  const addTask = async (e) => {
    e.preventDefault();
    let url = `${process.env.REACT_APP_API_URL}/api/usdavet/drvrusda/create/`;
    let csrftoken = getCookie("csrftoken");

    if (editing === true) {
      url = `${process.env.REACT_APP_API_URL}/api/usdavet/drvrusda/update/${activeItem.id}/`;
      setEditing(false);
    }

    await axios
      .post(url, activeItem, {
        headers: {
          "X-CSRFTOKEN": csrftoken,
        },
      })
      .then(() => {
        fetchData();
        setActiveItem({ id: null, title: "", completed: false });
      })
      .catch((err) => console.log(err));
    document.getElementById("form").reset();
  };

  //===========EDIT TASK===============================
  const editTask = async (task) => {
    setActiveItem(task);
    setEditing(true);
  };
  //===========DELETE TASK ==============================
  const deleteTask = async (task) => {
    let url = `${process.env.REACT_APP_API_URL}/api/usdavet/drvrusda/delete/${task.id}/`;
    let csrftoken = getCookie("csrftoken");
    await axios
      .delete(url, {
        headers: {
          "Content-Type": "application/json",
          "X-CSRFTOKEN": csrftoken,
        },
      })
      .then(() => {
        fetchData();
      });
  };
  //===========STRIKE/COMPLETE TASK===================
  const strikeUnstrike = (task) => {
    task.completed = !task.completed;
    let url = `${process.env.REACT_APP_API_URL}/api/usdavet/drvrusda/update/${task.id}/`;
    let csrftoken = getCookie("csrftoken");
    let taskUpdate = {
      title: task.title,
      completed: task.completed,
    };
    axios
      .post(url, taskUpdate, {
        headers: {
          "Content-Type": "application/json",
          "X-CSRFTOKEN": csrftoken,
        },
      })
      .then(() => {
        fetchData();
      });
  };

  const handleChange = (e) => {
    e.preventDefault();
    var value = e.target.value;
    setActiveItem({ ...activeItem, title: value });
  };
  return (
    <div className="container drvrusda-bg">
      <main>
        <Helmet>
          <title>AVI PETS - Driver USDA Checklist</title>
          <meta name="description" content="Driver USDA Checklist" />
        </Helmet>
      </main>
      <CheckListComponent
        headTitle="Driver Usda Checklist"
        tasks={tasks}
        setTask={setTask}
        addTask={addTask}
        editTask={editTask}
        deleteTask={deleteTask}
        strikeUnstrike={strikeUnstrike}
        handleChange={handleChange}
        editButton="driver_usda_edit"
        deleteButton="driver_usda_delete"
        addButton="driver_usda_submit"
        activeItem={activeItem}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(DriverUsdaChecklist);
