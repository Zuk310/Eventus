import { createContext, useState } from "react";


export const ApiContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
})

export const ApiProvider = ({children}) =>{
    const [apiData, setApiData] = useState(null);
    const [eventId, setEventId] = useState("");

    const value = {
        apiData, setApiData, eventId, setEventId
    }
    return <ApiContext.Provider value={value}>
        {children}
    </ApiContext.Provider>
}