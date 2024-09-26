// src/components/Section.js

import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { FaPlus, FaMinus } from 'react-icons/fa';

function Section({ section, level }) {
  const [showDetails, setShowDetails] = useState(false);

  const HeadingTag = `h${Math.min(level + 1, 6)}`;

  return (
    <div className={`section level-${level}`}>
      <div className="section-header">
        <HeadingTag>{section.title}</HeadingTag>
        {section.simplified && <p>{section.simplified}</p>}
        {section.detailed && (
          <button onClick={() => setShowDetails(!showDetails)}>
            {showDetails ? (
              <>
                <FaMinus /> Masquer les détails
              </>
            ) : (
              <>
                <FaPlus /> En savoir plus
              </>
            )}
          </button>
        )}
      </div>
      {showDetails && section.detailed && (
        <div className="details">
          <ReactMarkdown>{section.detailed}</ReactMarkdown>
        </div>
      )}
      {section.subsections && (
        <div className="subsections">
          {section.subsections.map((subsection) => (
            <Section
              key={subsection.id}
              section={subsection}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Section;
