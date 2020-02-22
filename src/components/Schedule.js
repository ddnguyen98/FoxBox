import React, { Component } from 'react';
import request from 'superagent'

import FullCalendar from '@fullcalendar/react'
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import dayGridPlugin from '@fullcalendar/daygrid'

import './main.scss'

const CALENDAR_ID = 'umn.edu_6gok0mfp3fdc2g6kb8qesmjfro@group.calendar.google.com'
const API_KEY = 'AIzaSyAbsu0VJ3yJnUZp6yoJSsjGYcOK6vozRs4'
let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}&singleEvents=true`

class Schedule extends Component {
    componentDidMount = () => {
        this.getEvents();
    }

    getEvents(){
        request
        .get(url)
        .end((err, resp) => {
          if (!err) {
            const events = []
            JSON.parse(resp.text).items.map((event) => {
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
        calendarEvents: {
        }
      }
    render() {
        return (
            <div>
                <FullCalendar 
                    defaultView="dayGridMonth"
                    events={this.state.calendarEvents}
                    plugins={[ dayGridPlugin ]}
                    />
            </div>
        );
    }
}

export default Schedule;