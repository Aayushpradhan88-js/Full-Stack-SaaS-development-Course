import React from 'react'

const Button = (props) => {
    return (
        <>
        <span className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md '>{props.title}</span>
        </>
    )
}

export default Button