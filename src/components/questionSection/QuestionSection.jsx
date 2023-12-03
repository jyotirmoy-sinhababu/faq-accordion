import React from 'react';

const QuestionSection = ({ item }) => {
  return (
    <div>
      <div>
        <p>{item.question}</p>
      </div>
      <div>
        <p>{item.answer}</p>
      </div>
    </div>
  );
};

export default QuestionSection;
