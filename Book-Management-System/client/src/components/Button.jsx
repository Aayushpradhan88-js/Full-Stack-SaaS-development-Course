import React from 'react'

const Button = (props) => {
    return (
        <>
        <span className='text-white  focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0  focus:outline-none '>{props.title}</span>
        </>
    )
}

export default Button