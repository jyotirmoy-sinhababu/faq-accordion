import React from 'react';

import star from '../../assets/iconStar.svg';

import { data } from '../../utils/Data';
import QuestionSection from '../questionSection/QuestionSection';

const FaqCard = () => {
  console.log(data);

  return (
    <div className='flex flex-col w-[580px] h-[600px] border p-[3%] gap-[7%]'>
      <div className='flex gap-7 items-center'>
        <img className='' src={star} alt='star icon' />
        <p className=' text-5xl'>FAQs</p>
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
  );
};

export default FaqCard;
