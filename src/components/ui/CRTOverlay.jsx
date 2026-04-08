import React from 'react';
import './CRTOverlay.css';

/**
 * CRTOverlay — persistent cathode-ray tube effect
 * Layers (bottom to top, all pointer-events: none):
 *  1. Scanlines         — fixed repeating horizontal lines
 *  2. Moving beam       — single bright horizontal sweep
 *  3. RGB flicker       — subtle chromatic shift pulse
 *  4. Vignette          — dark edges like a real CRT screen
 *  5. Noise / grain     — animated pseudo-random texture
 */
const CRTOverlay = () => (
  <div className="crt-root" aria-hidden="true">
    {/* 1. Static scanlines */}
    <div className="crt-scanlines" />
    {/* 2. Moving beam sweep */}
    <div className="crt-beam" />
    {/* 3. RGB chromatic flicker */}
    <div className="crt-rgb" />
    {/* 4. Phosphor vignette */}
    <div className="crt-vignette" />
    {/* 5. Animated grain/noise */}
    <div className="crt-noise" />
  </div>
);

export default CRTOverlay;
