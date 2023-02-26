import React from 'react'
import '../styles/DateBox.scss'

const DateBox = ({Heading}) => {
    return (
        <div className='date-box'>
            <input type="checkbox" name="pulished" id="" />
            <span>
                <label htmlFor="published">{Heading}</label>
                <input type="date" name="" id="" />
            </span>
        </div>
    )
}

export default DateBox