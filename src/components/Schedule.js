import React, { Component } from 'react';
import raidDates from '../json/raidDates';

class Schedule extends Component {
    render() {
        return (
            <div>
                <h1>Schedule</h1>
                {raidDates.map((e) => (
                    <div>
                        <h2>{e.weekday}</h2>
                        <h3>{e.date}</h3>
                        <p>{e.desc}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Schedule;