/* ============================================================================
   HalftoneOverlay.jsx
   Screentone dot pattern overlay - manga paper texture effect
   ============================================================================ */

import './HalftoneOverlay.css';

export const HalftoneOverlay = ({ 
  opacity = 0.5,
  dotSize = 8,
  className = '',
  style = {}
}) => {
  return (
    <div 
      className={`halftone-overlay ${className}`}
      style={{
        '--dot-size': `${dotSize}px`,
        opacity: opacity,
        ...style
      }}
    />
  );
};

export default HalftoneOverlay;
