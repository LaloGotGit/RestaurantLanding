import React from 'react';
import {SubHeading} from '../../components'
import {images} from '../../constants'

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
        <SubHeading title='Contact'/>
        <h1 className='headtext__cormorant' style={{marginBottom: '3rem'}}>Find Us</h1>
        <div className='app__wrapper-content'>
          <p className='p__opensans'>Nullam magna nulla, mollis id ultrices eu, consectetur nec turpis.</p>
          <p className='p__cormorant' style={{color: '#DCCA87', margin:'2rem 0'}}>Opening Hours</p>
          <p className='p__opensans'>Mon - Fri: 09:00 am - 02:30 am</p>
          <p className='p__opensans'>Sat - Sun: 10:00 am - 01:00 am</p>
        </div>
        <button className='custom__button' style={{marginTop:'12rem'}}>Visit Us</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.findus}/>
    </div>
  </div>
);

export default FindUs;
