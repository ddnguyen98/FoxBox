import React, { Component } from 'react';
import request from 'superagent'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

import './main.scss'

// Calendar ID used to connect to calendar
// API Used to connect to google servers
// Url returns individual events (Single Events turns recurring into their own object)
const CALENDAR_ID = 'umn.edu_6gok0mfp3fdc2g6kb8qesmjfro@group.calendar.google.com'
const API_KEY = 'AIzaSyAbsu0VJ3yJnUZp6yoJSsjGYcOK6vozRs4'
let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}&singleEvents=true`

class Schedule extends Component {
    componentDidMount = () => {
        this.getEvents();
    }

    getEvents(){
        // xhr call, using library to make simpler
        request
        .get(url)
        .end((err, resp) => {
            // Error check
            if (!err) {
                const events = []
                // eslint-disable-next-line
                JSON.parse(resp.text).items.map((event) => {
                    //Pushes events into events array, stores into state
                    events.push({
                        start: event.start.date || event.start.dateTime,
                        end: event.end.date || event.end.dateTime,
                        title: event.summary
                    })
                })
                this.setState({calendarEvents: events})
          }
        })
    }

    state = {
        calendarEvents: {}
    }
    // Uses Fullcalendar library to visualy show data with ease of access
    render() {
        return (
            <div>
                <FullCalendar 
                    defaultView="dayGridMonth"
                    events={this.state.calendarEvents}
                    plugins={[ dayGridPlugin ]}
                    eventLimit={true}
                    />
            </div>
        );
    }
}

export default Schedule;