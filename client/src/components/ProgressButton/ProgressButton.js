import React, { useState, useEffect } from 'react';

import './ProgressButton.scss'; 

import arrowImage from '../../assets/icons/arrow-right-icon.svg';

const ProgressButton = ({action, progress}) => {
  const color = '#F48F1D';

  let conicGradientStyle = {
    background: `conic-gradient(${color}, rgba(249, 231, 207, 0.692) ${progress})`,
  };

  useEffect(() => {
    conicGradientStyle = {
      background: `conic-gradient(${color}, rgba(249, 231, 207, 0.692) ${progress})`,
    };
  }, [progress, conicGradientStyle]);

  return (
    <div className="progress-button">
      <div 
        className="progress-button__bar"
        style={conicGradientStyle}
      >
      </div>
      <button 
        className="progress-button__button"
        onClick={() => action()}
        >
        <img className="progress-button__button-image" src={arrowImage} alt="arrow" />
      </button>
    </div>
  );
};

export default ProgressButton;