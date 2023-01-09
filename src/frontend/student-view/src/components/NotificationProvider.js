import React from "react";
import Notification from "./Notification";
import { v4 } from "uuid";

export default function NotificationProvider(){

    const notifications = [{
        id: v4(),
        type: 'SUCCESS',
        title: 'Success Title',
        message: 'You are very lucky'
    },
    {
        id: v4(),
        type: 'ERROR',
        title: 'Error Title',
        message: 'You are very lucky'
    }
]


    return (
        <div className = 'notification-wrapper'>
            {notifications.map(note => {
                return <Notification key= {note.id} {...note} />
            })}
        </div>

    )
}