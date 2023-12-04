import React, { useState } from 'react';

import { IoIosAddCircle } from 'react-icons/io';

const QuestionSection = ({ item }) => {
  const [isVisible, setIsVisible] = useState(false);
  console.log(item);
  return (
    <div className='flex flex-col '>
      <div className='flex items-center justify-between'>
        <p>{item.question}</p>
        <IoIosAddCircle />
      </div>
      <div>
        <p>{item.answer}</p>
      </div>
    </div>
  );
};

export default QuestionSection;
