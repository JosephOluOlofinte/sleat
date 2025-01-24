import React, { useState } from 'react';

interface AccordionProps {
  title: string;
  description: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div style={{ margin: '10px 0', border: '1px solid #ccc', borderRadius: '5px' }}>
      <button
        onClick={toggleAccordion}
        style={{
          width: '100%',
          textAlign: 'left',
          padding: '10px',
          cursor: 'pointer',
          background: isOpen ? '#f0f0f0' : '#fff',
          border: 'none',
          outline: 'none',
        }}
      >
        {title}
      </button>
      {isOpen && (
        <div style={{ padding: '10px', borderTop: '1px solid #ccc' }}>
          {description}
        </div>
      )}
    </div>
  );
};

export default Accordion;
