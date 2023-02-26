import React from 'react';
import '../styles/DateContainer.scss';
import DateBox from './DateBox';

const DateContainer = () => {
  return (
    <div className='date-container'>
    <DateBox Heading={"Published Date"}/>
    <DateBox Heading={"Closing Date"}/>
    </div>
  )
}

export default DateContainer