import React from "react";
import { useSuccessNotification, useErrorNotification } from "./NotificationProvider";

export default function About() {
  const dispatch1 = useSuccessNotification();
  const dispatch2 = useErrorNotification();

  const handleSuccessClick = () => {
    dispatch1("You are very lucky today");
  };

  const handleErrorClick = () =>{
    dispatch2("You messed up")
  }

  return (
    <div>
      <button onClick={handleSuccessClick}>Success Notification</button>
      <button onClick={handleErrorClick}>Error Notification</button>
      about
    </div>
  );
}
