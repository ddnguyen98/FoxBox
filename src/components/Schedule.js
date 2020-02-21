import React, { Component } from 'react';
import raidDates from '../json/raidDates';
import Calendar from 'react-calendar';

class Schedule extends Component {
    componentDidMount() {
        let newDate = this.state.maxDate;
        newDate.setFullYear(newDate.getFullYear() + 1)
        this.setState({maxDate: newDate})
    }

    state = {
        date: new Date(),
        maxDate: new Date()
    }

    onChange = date => this.setState({ date })
    

    render() {
        const tileContent = ({ date, view }) => {
            let returnVal;
            
            raidDates.forEach(e => {
                console.log(e.month);
                if( e.month === date.getMonth().toString()) {
                    console.log('month')
                    console.log(`Cal date ${e.day} current ${date.getDate()}`)
                    if( e.day === date.getDate().toString()) {
                        console.log('day')
                        if( e.year === date.getFullYear().toString()) {
                            console.log('year')
                        }        
                    }
                }


                if(
                    e.month === date.getMonth().toString() 
                    && e.day === date.getDate().toString() 
                    && e.year === date.getFullYear().toString()) 
                {
                    returnVal = <p>{e.desc}</p>
                }          
            });
            console.log(date.getDate())
            return returnVal;
        };

        return (
            <div>
                <h1>Schedule</h1>
                <Calendar
                    onChange={this.onChange}
                    value={this.state.date}
                    tileContent={tileContent}
                    maxDate={this.state.maxDate}
                />
                {raidDates.map((e, index) => (
                    <div key={index}>
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