import React from 'react'

export const Contador = ({count, setCount}) => {
    const handleIncrementar =()=>{
        setCount(count+1)
    }
    const handleDecrementar =()=>{
        setCount(count-1)
    }
    const handleReset =()=>{
        setCount(0)
    }
  return (
    <div>
        <span className='block py-2 font-medium'>Contador: {count}</span>
        <div className='space-x-2 my-2'>
            <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' onClick={handleIncrementar}>Incrementar</button>
            <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' onClick={handleDecrementar}>Decrementar</button>
            <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' onClick={handleReset}>Reset</button>
        </div>
    </div>
  )
}
