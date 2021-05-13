import React from 'react';

var GroceriesItem = (props) => (
  // <ul className='groceries'>
  //  {props.items.map(item =>
  //   <li>
  //     {item.name} - {item.quantity}
  //   </li>
  // )}
  // </ul>
  <li>
    {props.items.name} - {props.items.quantity}
  </li>
)

export default GroceriesItem