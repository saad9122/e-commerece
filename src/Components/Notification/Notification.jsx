import React from 'react'
import { AnimatePresence,motion } from 'framer-motion'

export const Notification = ({showNotification,notificationInfo}) => {
  return (

    <AnimatePresence>
    {showNotification && 

    <motion.div 
    initial = {{scale: 0}}
    transition={{type:"spring", stiffness:300, damping: 25,delay:0.4}}
    animate = {{scale: 1}}
    exit={{scale: 0}}
    className='fixed flex justify-center top-16 left-0 right-0 z-[1100]'>

      <div className={`${notificationInfo.bgColor} w-1/3 rounded-md`}>

        <p className='p-4 text-center text-xl text-white'>{notificationInfo.text}</p>

    </div>

    </motion.div>
    
    }

    </AnimatePresence>
        
  )
}
