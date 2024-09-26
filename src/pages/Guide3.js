// src/pages/Guide3.js

import React from 'react';
import GuideContent from '../components/GuideContent';
import guide3Data from '../data/guide3';

function Guide3() {
  return (
    <div className="guide">
      
      <h1>{guide3Data.title}</h1>
      <GuideContent sections={guide3Data.sections} />
    </div>
  );
}

export default Guide3;
