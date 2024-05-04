"use client"
import React from 'react'

// import toast from 'react-hot-toast'
import toast, { Toaster } from 'react-hot-toast'

const Stake = () => {
    const handleToast = () => {
        // toast.success('You have Successful stake')
        toast.error('please enter a valid positive number')
    }
  return (
    <div>
        <h1 className=' font-semibold cursor-pointer'  onClick={handleToast}>Stake</h1>
        <Toaster />
    </div>
  )
}

export default Stake