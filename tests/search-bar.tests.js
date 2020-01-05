// jshint esversion:6
import React from 'react';
import SearchButton from '../search-bar-booking-tool/client/src/components/search-button.jsx';
import SearchBar from '../search-bar-booking-tool/client/src/components/search-bar.jsx';
import CalendarDisplay from '../search-bar-booking-tool/client/src/components/calendar-display.jsx';
import { shallow, mount, render } from 'enzyme';

it('expect to render Search Button component', () => {
    expect(shallow(<SearchButton />).length).toEqual(1);
});

it('expect to render Search Bar component', () => {
    expect(shallow(<SearchBar/>)).toMatchSnapshot();
});

it('expect to render Calendar Display component', () => {
    expect(shallow(<CalendarDisplay/>)).toMatchSnapshot();
});

