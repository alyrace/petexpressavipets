import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import "../clients/client.scss"

const ClientDropdown = ({options, prompt, value, onChange}) => {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);
    const [query, setQuery] = useState("");
    /*const renderOption = () => {
        clientlist.map((c, key) =>{<option value={c.id} key={key}>{c.client_name}</option>         
        })        
    }*/
    useEffect(() => {
        ["click", "touched"].forEach(e => {
            document.addEventListener(e, toggle);
        })
        return () => ["click", "touched"].forEach(e => {
            document.removeEventListener(e, toggle)
        })
    }, [])

    function toggle(e){
        setOpen(e && e.target === ref.current)
    }

    /*function filter(options){
        return options.filter((option) => {
            option.client_name.toLowerCase().indexOf(query.toLocaleLowerCase()) > -1
        })
    }*/

    function displayValue(){
        if (query.length > 0) return query;
        if (value) return value.client_name;
        return "";
 }

function selectOption(option) {
    setQuery("");
    onChange(option);
    setOpen(false);
}

    return (
      <div className="client_dropdown">
        <div
          className="control"
          id="client"
          //name={client}
          aria-label="Dropdown"
          //onChange={(e) => (e.target.value)}
        >
          <div className="selected_value">
            <input
              type="text"
              ref={ref}
              placeholder={value ? value.client_name : prompt}
              value={displayValue()}
              onChange= {
                  (e)=> {setQuery(e.target.value)
                  onChange(null)
              }}
              onClick={toggle}
              onTouchEnd={toggle} 
            />
          </div>
          <div className={`arrow ${open ? "open" : null}`} />
        </div>
        <div className={`options ${open ? "open" : null}`}>
          {options.map((option) => (
            <div
              key={option.id}
              className={`option ${value === option ? "selected" : null}`}
              onClick={() => {selectOption(option)}}
              onTouchEnd={() => {selectOption(option)}}

            >
              {option.client_name}
            </div>
          ))}
        </div>
      </div>
    );
};

export default ClientDropdown;
