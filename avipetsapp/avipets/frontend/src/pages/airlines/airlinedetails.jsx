import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import axios from "axios";
import { Link } from "react-router-dom";

const AirlineDetails = (props) => {
     const [listing, setListing] = useState({});

     const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    useEffect(() => {
        const slug = props.match.params.id;

        const config = {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        };

    return (
        <div>
            
        </div>
    )
}

export default AirlineDetails;