// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';

export default function  Dashboard() {
    return (
      <div>
        <p>This is DashBoard.</p>
        <Link to="/products" className='underline'>go to Products</Link>
      </div>
    );

};