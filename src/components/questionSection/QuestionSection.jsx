import React, { useState } from 'react';

import { IoIosAddCircle } from 'react-icons/io';

const QuestionSection = ({ item }) => {
  const [isVisible, setIsVisible] = useState(false);

  const isVisibleFunction = () => {
    isVisible ? setIsVisible(false) : setIsVisible(true);
  };

  return (
    <div className='flex flex-col '>
      <div className='flex items-center justify-between'>
        <p>{item.question}</p>
        <button
          onClick={() => {
            isVisibleFunction();
          }}
        >
          <IoIosAddCircle />
        </button>
      </div>
      {isVisible ? (
        <div>
          <p>{item.answer}</p>
        </div>
      ) : null}
    </div>
  );
};

export default QuestionSection;
