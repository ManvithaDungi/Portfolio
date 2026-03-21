/* ============================================================================
   TransitionRibbon.jsx
   Full-width ribbon strips between dark and light sections
   Creates manga chapter break visual separation
   ============================================================================ */

import './TransitionRibbon.css';

export const TransitionRibbon = ({ direction = 'dark-to-light' }) => {
  const isDarkToLight = direction === 'dark-to-light';
  
  return (
    <div className={`transition-ribbon ${isDarkToLight ? 'ribbon-dark-to-light' : 'ribbon-light-to-dark'}`}>
      <div className="ribbon-content">
        {isDarkToLight ? '// // // // // // // // // // // // //' : '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'}
      </div>
    </div>
  );
};

export default TransitionRibbon;
