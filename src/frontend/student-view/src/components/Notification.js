import React, { useEffect, useRef, useState } from "react";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CloseIcon from '@mui/icons-material/Close';

export default function  Notification(props){
    const [width, setWidth] = useState(0);
    const [intervalId, setIntervalId] = useState(0);


    const handleStartTimer = () => {
          const n = setInterval(() => {
            setWidth(prev => {
                
                if(prev < 100){
                    return prev += 0.5;
                }
                return prev;
            })
            
        }, 20);

        
        //clearInterval(id);
        setIntervalId(n);
        console.log(n +" " + intervalId +" " + props.type);
       
    }

    const handlePauseTimer = () => {
        console.log(intervalId);
        clearInterval(intervalId);
    }

    useEffect(() => {
        handleStartTimer();
    }, []);

    return (
        <div className="notification"  onMouseEnter={handlePauseTimer}  onMouseLeave={handleStartTimer}>
            <div className="notification-info-container">
                <div className="notification-icon-container">
                    {props.type === 'SUCCESS' ? <TaskAltIcon className="notification-icon" /> : <ErrorOutlineIcon  className="notification-icon"/>}
                </div>
                <div className="notification-message-container">
                    <span className="notification-title">{props.title}</span>
                    <span className="notification-message"> {props.message}</span>
                </div>
                <div className="notification-btn-container">
                    <button className="notification-close-btn"> <CloseIcon /></button>
                </div>
            </div>
            <div style={{width:`${width}%`}} className={`notification-bar ${props.type === 'SUCCESS'? 'success' :'error'}`}></div>
            
        </div>
    )

}