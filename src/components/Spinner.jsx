import React from 'react';
import Spin from '../asset/image/Spin.gif'

const Spinner = () => {
  return (
    <>
      <img src={Spin} 
            alt="Loading..." 
            style={{ width: '340px', display:'block', margin:'0 auto', padding:'10%' }}   />
    </>
  )
}

export default Spinner
