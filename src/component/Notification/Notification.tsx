import React from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


export default function Notification() {
    return <ToastContainer 
        position='top-right'
        theme='colored'
    />
}

export const notification = {
    info: (message: string) => toast.info(message),
    success: (message: string) => toast.success(message),
    warn: (message: string) => toast.warn(message),
    error: (message: string) => toast.error(message),
}