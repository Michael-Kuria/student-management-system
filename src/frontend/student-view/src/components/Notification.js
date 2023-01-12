import React, { useEffect, useState } from "react";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CloseIcon from "@mui/icons-material/Close";
import { useCloseNotification } from "./NotificationProvider";

export default function Notification(props) {
  const [width, setWidth] = useState(0);
  const [intervalId, setIntervalId] = useState(0);
  const [exit, setExit] = useState(false);
  const dispatch = useCloseNotification(props);

  const handleStartTimer = () => {
    const n = setInterval(() => {
      setWidth((prev) => {
        if (prev < 100) {
          return (prev += 0.5);
        }

        clearInterval(n);
        return prev;
      });
    }, 20);

    setIntervalId(n);
    console.log(n + " " + intervalId + " " + props.type);
  };

  const handlePauseTimer = () => {
    console.log(intervalId);
    clearInterval(intervalId);
  };

  const handleNotificationExit = () => {
    handlePauseTimer();
    setExit(true);
    setTimeout(() => {
      dispatch({ id: props.id });
    }, 400);
  };

  useEffect(() => {
    handleStartTimer();
  }, []);

  /**
   * When the width is at 100% close the notification
   */
  useEffect(() => {
    if (width === 100) {
      handleNotificationExit();
    }
  }, [width]);

  return (
    <div
      className={`notification ${exit ? "exit" : ""}`}
      onMouseEnter={handlePauseTimer}
      onMouseLeave={handleStartTimer}
    >
      <div className="notification-info-container">
        <div className="notification-icon-container">
          {props.type === "SUCCESS" ? (
            <TaskAltIcon className="notification-icon" />
          ) : (
            <ErrorOutlineIcon className="notification-icon" />
          )}
        </div>
        <div className="notification-message-container">
          <span className="notification-title">{props.title}</span>
          <span className="notification-message"> {props.message}</span>
        </div>
        <div className="notification-btn-container">
          <button
            className="notification-close-btn"
            onClick={handleNotificationExit}
          >
            {" "}
            <CloseIcon />
          </button>
        </div>
      </div>
      <div
        style={{ width: `${width}%` }}
        className={`notification-bar ${
          props.type === "SUCCESS" ? "success" : "error"
        }`}
      ></div>
    </div>
  );
}
