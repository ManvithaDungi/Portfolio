/* ============================================================================
   SpeedLines.jsx
   Decorative manga speed lines - radial burst pattern
   CSS conic-gradient creates radial lines effect
   ============================================================================ */

import './SpeedLines.css';

export const SpeedLines = ({ 
  size = 600,
  opacity = 0.4,
  className = '',
  style = {}
}) => {
  return (
    <div 
      className={`speed-lines ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        opacity: opacity,
        ...style
      }}
    />
  );
};

export default SpeedLines;
