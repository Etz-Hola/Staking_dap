"use client"
import React from 'react'
import toast, { Toaster } from 'react-hot-toast'

const Withdraw = () => {
    const handleToast = () => {        
        toast.error('please enter a valid positive number')
    }
  return (
    <div>
        <h1>Amoun to Withdraw</h1>
        <input type="text" />

        <h1 className='ml-10 cursor-pointer font-semibold mt-7' onClick={handleToast}>Withdraw your stake</h1>
        <Toaster />
    </div>
  )
}

export default Withdraw