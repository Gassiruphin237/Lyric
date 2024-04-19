import React from 'react'
import '../css/Box.css'

const Box = ({ icon, title, number }) => {
  return (
    <div className="custom-card text-dark shadow-sm p-3 mb-5 bg-body-tertiary rounded">
      <div className="head">
        <p className='icon'>{icon}</p>
        <p className='title'>{title}</p>
      </div>
      <p className='number'>{number}</p>
    </div>
  );
}
export default Box