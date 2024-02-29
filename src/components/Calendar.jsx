import React from 'react';
import Event from './Event';

const Calendar = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const hours = ['8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm'];
    return (
        <div className='Calendar'>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        {days.map(day => <th key={day}>{day}</th>)}
                    </tr>
                </thead>
                <tbody>
                {hours.map(hour => (
                    <tr key={hour}>
                        <td className="time">{hour}</td>
                        {days.map(day => (
                            <td key={day}>
                                {(day === 'Wednesday' && hour === '10 am') ? <Event event="Meeting 🎩" color="green" location="Office" /> : 
                                 (day === 'Friday' && hour === '1 pm') ? <Event event="Starbucks ☕️" color="green" location="Cafeteria" /> : 
                                 (day === 'Monday' && hour === '2 pm') ? <Event event="Subway 🚊" color="pink" location="Maple & Ash" /> : null}                               
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default Calendar;