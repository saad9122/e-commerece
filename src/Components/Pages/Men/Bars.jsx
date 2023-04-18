import React from 'react'

export const Bars = ({setGridCols}) => {


  return (
    <div className='select-grid-cols'>

      <div className='bars-wrapper one' onClick={() => setGridCols('one')}>
          <div className='bars-container'>
            <div className='bar'></div>
          </div>
        </div>
         
        <div className='bars-wrapper two' onClick={() => setGridCols('two')}>
          <div className='bars-container'>
            <div className='bar'></div>
            <div className='bar'></div>
          </div>
        </div>

        <div className='bars-wrapper three' onClick={() => setGridCols('three')}>
          <div className='bars-container'>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
          </div>
        </div>

        <div className='bars-wrapper four' onClick={() => setGridCols('four')}>
          <div className='bars-container'>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
          </div>
        </div>
    </div>
  )
}
