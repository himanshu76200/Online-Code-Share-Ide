import React, { useState, createContext } from 'react';
import io from "socket.io-client";

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [roomId, setRoomId] = useState();
    const socket = io.connect("http://localhost:5000");
    return (
        <AppContext.Provider value={{ roomState: [roomId, setRoomId], socket: socket }}>
            {props.children}
        </AppContext.Provider>
    )
}