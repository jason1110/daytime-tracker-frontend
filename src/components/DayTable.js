// import React, { Component } from 'react'
import Day from './Day'

export default function DayTable({ day }) {


const showDays = () => day.map(eachDay => <Day day={eachDay} />) 

    return (
        <div className='day-table'>
            {showDays()}
        </div>
    )
}
