"use client"
import React from 'react'
import toast, { Toaster } from 'react-hot-toast'

const Approval = () => {
    const handleToast = () => {        
        toast.error('please enter a valid positive number')
    }
  return (
    <div>
        <h1 className=' font-semibold cursor-pointer' onClick={handleToast}>Approval</h1>
    </div>
  )
}

export default Approval