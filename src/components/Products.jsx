import React from 'react';
import { Link } from 'react-router-dom';
const Products = () => {
    return (
        <div>
           <p>This is Product</p> 
            <Link to="/" className='underline'>go to Dashboard</Link>
        </div>
    );
};

export default Products;