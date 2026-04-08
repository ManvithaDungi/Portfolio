import React, { useState, useEffect } from 'react';
import {
  RadarChart as RechartsRadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
} from 'recharts';

/**
 * useTheme — returns 'dark' | 'light' and updates live when
 * the [data-theme] attribute on <html> changes.
 */
function useTheme() {
  const getTheme = () =>
    typeof document !== 'undefined'
      ? (document.documentElement.getAttribute('data-theme') ?? 'light')
      : 'light';

  const [theme, setTheme] = useState(getTheme);

  useEffect(() => {
    const observer = new MutationObserver(() => setTheme(getTheme()));
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });
    return () => observer.disconnect();
  }, []);

  return theme;
}

const RadarChart = ({ data }) => {
  const theme   = useTheme();
  const isDark  = theme === 'dark';

  const gridColor   = isDark ? 'rgba(26, 127, 255, 0.2)' : 'rgba(0, 71, 204, 0.12)';
  const tickColor   = isDark ? '#D8E8FF'                  : '#1A1A2E';
  const radarStroke = isDark ? '#1A7FFF'                  : '#0047CC';
  const radarFill   = isDark ? 'rgba(26, 127, 255, 0.15)' : 'rgba(0, 71, 204, 0.10)';
  const dotFill     = isDark ? '#00EEFF'                  : '#0047CC';

  return (
    <ResponsiveContainer width="100%" height={340} minHeight={240}>
      <RechartsRadarChart data={data} margin={{ top: 16, right: 24, bottom: 16, left: 24 }}>
        <PolarGrid
          stroke={gridColor}
          strokeDasharray="0"
          isAnimationActive={false}
        />
        <PolarAngleAxis
          dataKey="name"
          tick={{
            fill: tickColor,
            fontSize: 11,
            fontFamily: 'var(--font-mono)',
            fontWeight: 700,
            letterSpacing: '0.05em',
          }}
          isAnimationActive={false}
        />
        <Radar
          name="Proficiency"
          dataKey="value"
          stroke={radarStroke}
          strokeWidth={1.5}
          fill={radarFill}
          isAnimationActive={false}
          dot={{ fill: dotFill, r: 3, strokeWidth: 0 }}
        />
      </RechartsRadarChart>
    </ResponsiveContainer>
  );
};

export default RadarChart;
