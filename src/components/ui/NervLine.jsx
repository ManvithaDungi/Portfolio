import React from 'react';
import './NervLine.css';

const NervLine = ({ text, align = 'right' }) => {
  return (
    <div className="nerv-line">
      <div className="nerv-line-left" />
      <div className={`nerv-line-text align-${align}`}>{text}</div>
    </div>
  );
};

export default NervLine;
