import React from 'react'

const ButtonType1 = (props) => {
  return (
    <div>
      <button
       
        className="text-white px-4 py-2 rounded-full cursor-pointer hover:bg-gray-800 bg-opacity-50 transition duration-500 ease-in-out"
        >
        {props.text}
      </button>
    </div>
  )
}

export default ButtonType1
