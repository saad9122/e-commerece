import { useScroll } from "framer-motion";
import { createContext, useContext, useState } from "react";

const NotificationContext = createContext()


export const NotificationProvider = ({children}) => {

    const [showNotification,setShowNotification] = useState(false)

    const [notificationInfo,setNotificationInfo] = useState(null)

    const handleNotificationInfo = (info) => {

        setNotificationInfo(info)

    }

    const handleShowNotification = () => {
        setShowNotification(true) 

        setTimeout(() => {

            setShowNotification(false)

        },2500)
    }
    return (
        <NotificationContext.Provider
        value={{
            showNotification,
            notificationInfo,
            handleShowNotification,
            handleNotificationInfo
        }}
        >
            {children}
        </NotificationContext.Provider>

    )
}

export const useNotificationHandler = () => useContext(NotificationContext)