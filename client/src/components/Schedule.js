import React, {Component} from 'react';
import Navigation from './common/Navigation';
import Modal from './common/Modal';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import {toggleModal} from '../actions/modal';

BigCalendar.momentLocalizer(moment);

class Schedule extends Component {

    handleSelectSlot(startTime, endTime) {
        const message = `selected slot: \n\nstart ${moment(startTime).format('MMMM Do, YYYY h:mm:ss a')} \nend: ${moment(endTime).format('MMMM Do, YYYY h:mm:ss a')}`;
        this.props.dispatch(toggleModal(!this.props.modal.active, message));
    }

    render() {
        const myEventsList = [
            {
                'title': 'Dawson\'s birthday!',
                'allDay': true,
                'start': new Date(2017, 9, 5, 0, 0, 0),
                'end': new Date(2017, 9, 6, 0, 0, 0),
            }
        ];

        return (
            <div>
                <Navigation {...this.props} />
                <Modal {...this.props} />
                <BigCalendar
                    selectable
                    events={myEventsList}
                    defaultView='week'
                    startAccessor='startDate'
                    endAccessor='endDate'
                    onSelectSlot={slotInfo => this.handleSelectSlot(slotInfo.start.toLocaleString(), slotInfo.end.toLocaleString())}
                    />
            </div>
        );
    }
}

export default Schedule;
