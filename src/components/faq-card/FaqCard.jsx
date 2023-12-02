import React from 'react';
import './faqCardStyle.css';

import star from '../../assets/iconStar.svg';

const FaqCard = () => {
  return (
    <div className='card-cnt'>
      <div className='card-outer-div'>
        <div className='card-imghead-cnt'>
          <img className='card-icon' src={star} alt='star icon' />
          <p className='card-para'>FAQs</p>
        </div>
      </div>
    </div>
  );
};

export default FaqCard;
