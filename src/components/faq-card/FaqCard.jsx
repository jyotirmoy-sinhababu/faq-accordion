import React from 'react';
import './faqCardStyle.css';

import star from '../../assets/iconStar.svg';

import { data } from '../../utils/Data';
import QuestionSection from '../questionSection/QuestionSection';

const FaqCard = () => {
  // console.log(data);

  return (
    <div className='card-cnt'>
      <div className='card-outer-div'>
        <div className='card-imghead-cnt'>
          <img className='card-icon' src={star} alt='star icon' />
          <p className='card-para'>FAQs</p>
        </div>
      </div>
      <div>
        {data?.map((item) => {
          <div key={item.id}>
            <QuestionSection item={item} />
          </div>;
        })}
      </div>
    </div>
  );
};

export default FaqCard;
