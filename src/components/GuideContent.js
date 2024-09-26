// src/components/GuideContent.js

import React from 'react';
import Section from './Section';

function GuideContent({ sections }) {
  return (
    <div className="guide-content">
      {sections.map((section, index) => (
        <Section key={index} section={section} level={1} />
      ))}
    </div>
  );
}

export default GuideContent;
