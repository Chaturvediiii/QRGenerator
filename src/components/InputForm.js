import React, { useContext } from 'react'
import InputField from './InputField'
import InputColor from './InputColor'
import { InputContext } from '../App'

function InputForm() {
  const {getQRCode} = useContext(InputContext)
  const handleSubmit = () => getQRCode();
   return (
    <div className='col-span-2 p-6 grid gap-4'>
      <InputField/>
      <InputColor/>
      <button 
      onClick={handleSubmit}
      className='bg-blue-400 max-w-xs ml-auto px-4 py-2 text-white rounded-sm mt-4 hover:bg-blue-500 disabled:bg-gray-300'>Generate QrCode</button>
    </div>
  )
}

export default InputForm
