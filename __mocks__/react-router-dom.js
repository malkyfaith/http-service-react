import React from 'react';

// reference: https://medium.com/@antonybudianto/react-router-testing-with-jest-and-enzyme-17294fefd303
// Just render plain div with its children
const rrd = require('react-router-dom');
rrd.BrowserRouter = ({ children }) => <div>{children}</div>;

module.exports = rrd;
