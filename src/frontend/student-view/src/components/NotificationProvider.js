import React, { createContext, useContext, useReducer } from "react";
import Notification from "./Notification";
import { v4 } from "uuid";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOTIFICATION":
      state = [...state, { ...action.payload }];
      return state;
    case "REMOVE_NOTIFICATION":
      return state.filter((ac) => ac.id !== action.payload.id);
    default:
      return state;
  }
};

const NotificationContext = createContext();

export const NotificationProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <NotificationContext.Provider value={dispatch}>
      {props.children}
      <div className="notification-wrapper">
        <div></div>
        {state.map((note) => {
          return <Notification key={note.id} {...note} />;
        })}
      </div>
    </NotificationContext.Provider>
  );
};

/**
 *
 * Custom hooks to add and remove Notifications
 */

export const useErrorNotification = () => {
  const dispatch = useContext(NotificationContext);

  return (props) => {
    dispatch({
      type: "ADD_NOTIFICATION",
      payload: {
        id: v4(),
        type: "ERROR",
        title: "Error",
        message: props
      },
    });
  };
};

export const useSuccessNotification = () => {
    const dispatch = useContext(NotificationContext);
    
    return (props) => {
        dispatch({
          type: "ADD_NOTIFICATION",
          payload: {
            id: v4(),
            type: "SUCCESS",
            title: "Successful",
            message: props
          },
        });
      };
}

export const useCloseNotification = () => {
  const dispatch = useContext(NotificationContext);

  return (props) => {
    dispatch({
      type: "REMOVE_NOTIFICATION",
      payload: {
        id: props.id,
      },
    });
  };
};
