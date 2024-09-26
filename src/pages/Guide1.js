// src/pages/Guide1.js

import React from 'react';
import GuideContent from '../components/GuideContent';
import guide1Data from '../data/guide1';

function Guide1() {
  return (
    <div className="guide">
      
      <h1>{guide1Data.title}</h1>
      <GuideContent sections={guide1Data.sections} />
    </div>
  );
}

export default Guide1;
