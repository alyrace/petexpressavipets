import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { Redirect} from "react-router-dom";
import { useHistory } from "react-router";
import axios from "axios";

import CheckListComponent from "./CheckListComponent";

//axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
//axios.defaults.xsrfCookieName = "csrftoken";

const OpsVetChecklist = ({ isAuthenticated}) => {
    if (isAuthenticated === false) return <Redirect to="/login" />;
    const [tasks, setTask] = useState([]);
    const [editing, setEditing] = useState(false);
    const [activeItem, setActiveItem] = useState({id: null, title: '', completed: false});

     function getCookie(name) {
       var cookieValue = null;
       if (document.cookie && document.cookie !== "") {
         var cookies = document.cookie.split(";");
         for (var i = 0; i < cookies.length; i++) {
           var cookie = cookies[i].trim();
           // Does this cookie string begin with the name we want?
           if (cookie.substring(0, name.length + 1) === name + "=") {
             cookieValue = decodeURIComponent(
               cookie.substring(name.length + 1)
             );
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
          `${process.env.REACT_APP_API_URL}/api/usdavet/opsvet/`
        );
        setTask(res.data.results);
        console.log(res.data.results);
      } catch (err) {
        console.log(err);
      }
    };
    //store data
    useEffect(()=>{
        fetchData();
    }, []);
    //===============ADD TASK=================
    const addTask = async (e) => {
        e.preventDefault();
        let url = `${process.env.REACT_APP_API_URL}/api/usdavet/opsvet/create/`;
        let csrftoken = getCookie("csrftoken");
        
        if (editing === true) {
        url = `${process.env.REACT_APP_API_URL}/api/usdavet/opsvet/update/${activeItem.id}/`
        setEditing(false)
        }
        
        await axios.post(url, activeItem,
          {headers: {
            "X-CSRFTOKEN": csrftoken,
          },
          })
          .then(() => { 
            fetchData();
            setActiveItem({ id: null, title: "", completed: false });
          })
          .catch((err) => console.log(err));
           document.getElementById("form").reset();
    }

    
    //===========EDIT TASK===============================
    const editTask = async (task) => {
        setActiveItem(task);
        setEditing(true);
    } 
    //===========DELETE TASK ==============================
    const deleteTask = async (task) => {
        let url = `${process.env.REACT_APP_API_URL}/api/usdavet/opsvet/delete/${task.id}/`;
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
    }
    //===========STRIKE/COMPLETE TASK===================
     const strikeUnstrike = (task) => {
       task.completed = !task.completed;
       let url = `${process.env.REACT_APP_API_URL}/api/usdavet/opsvet/update/${task.id}/`;
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
      <div className="container opsvet-bg">
        <main>
          <Helmet>
            <title>AVI PETS - Operations Vet Checklist</title>
            <meta name="description" content="Operations Vet Checklist" />
          </Helmet>
        </main>
        <CheckListComponent
          headTitle="Operations Vet Checklist"
          tasks={tasks}
          setTask={setTask}
          addTask={addTask}
          editTask={editTask}
          deleteTask={deleteTask}
          strikeUnstrike={strikeUnstrike}
          handleChange={handleChange}
          editButton="ops_vet_edit"
          deleteButton="ops_vet_delete"
          addButton="ops_vet_submit"
          activeItem={activeItem}
        />
      </div>
    );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(OpsVetChecklist);
