// jshint esversion:6
import React from 'react';
import BookingSubmitForm from '../search-bar-booking-tool/client/src/components/booking-submit-form.jsx';
import BookingHeader from '../search-bar-booking-tool/client/src/components/booking-header.jsx';
import CalendarDisplayBooking from '../search-bar-booking-tool/client/src/components/calendar-display-booking.jsx';
import { shallow, mount, render } from 'enzyme';

it('expect to render Search Button component', () => {
    expect(shallow(<BookingHeader />).length).toEqual(1);
});

it('expect to render Booking Form component', () => {
    expect(shallow(<BookingSubmitForm/>)).toMatchSnapshot();
});

it('expect to render Calendar Display component', () => {
    expect(shallow(<CalendarDisplayBooking/>)).toMatchSnapshot();
});


