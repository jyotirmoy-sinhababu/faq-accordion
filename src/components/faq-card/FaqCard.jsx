import React from 'react';

import star from '../../assets/iconStar.svg';

import { data } from '../../utils/Data';
import QuestionSection from '../questionSection/QuestionSection';

const FaqCard = () => {
  console.log(data);

  return (
    <div className=''>
      <div className=''>
        <div className=''>
          <img className='' src={star} alt='star icon' />
          <p className=''>FAQs</p>
        </div>
        <div>
          {data?.map((item) => {
            return (
              <div key={item.id}>
                <QuestionSection item={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FaqCard;
