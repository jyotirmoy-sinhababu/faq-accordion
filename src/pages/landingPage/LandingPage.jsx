import React from 'react';

import './landingPageStyle.css';
import FaqCard from '../../components/faq-card/FaqCard';

const LandingPage = () => {
  return (
    <div className='outer-div'>
      <div className='landing-cnt'>
        <FaqCard />
      </div>
    </div>
  );
};

export default LandingPage;
