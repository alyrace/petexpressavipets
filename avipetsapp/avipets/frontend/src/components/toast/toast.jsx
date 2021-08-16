import React from "react";
import axios from "axios";
import {ToastContianer, Bounce, toast, Zoom} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const toast = () => {
    toast.error("Something Went Wrong!")
    toast.success("You Did It!")
    toast.info("You've Been Infomed!")
    toast.console.warn("Entered Wrong, Try Again!");

    return (
        <div>
            
        </div>
    )
}

export default Toast;
