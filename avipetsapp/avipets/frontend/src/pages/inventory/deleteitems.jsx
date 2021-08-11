import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router";

//import Navbar from "../../components/navigation/navbar.component";

const InventoryDeleteItems = (isAuthenticated) => {
    if (isAuthenticated === false) return <Redirect to="/login" />;
    return (
    <div className="container">
        <main>  
            <Helmet>   
                <title>AVI PETS - Inventory Delete</title>
                <meta name="description" content="AVI Pets Inventory Delete" />
            </Helmet>
        </main>
        <div className="container">
        </div>   
    </div>
    )
};


const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(InventoryDeleteItems);
