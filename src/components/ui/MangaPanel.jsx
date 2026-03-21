/* ============================================================================
   MangaPanel.jsx
   Reusable brutalist panel component with three variants:
   - dark: Blue border + blue shadow + neon glow
   - light: Black border + black shadow + cream bg
   - accent: Red bg + black border + cream text
   ============================================================================ */

import './MangaPanel.css';

export const MangaPanel = ({ 
  variant = 'dark', 
  children, 
  offset = false,
  className = '',
  style = {}
}) => {
  const variantClasses = {
    dark: 'manga-panel-dark',
    light: 'manga-panel-light',
    accent: 'manga-panel-accent'
  };

  const offsetClass = offset ? 'manga-panel-offset' : '';
  const baseClass = `manga-panel ${variantClasses[variant]} ${offsetClass} ${className}`;

  return (
    <div className={baseClass} style={style}>
      {children}
    </div>
  );
};

export default MangaPanel;
