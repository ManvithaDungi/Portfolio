import React from 'react';
import {
  RadarChart as RechartsRadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
} from 'recharts';

const RadarChart = ({ data, lightMode = false }) => {
  const chartMargin = { top: 20, right: 20, bottom: 20, left: 20 };
  const gridColor = lightMode ? 'rgba(0,0,0,0.1)' : 'rgba(0, 102, 255, 0.2)';
  const tickColor = lightMode ? '#2A2A2A' : 'var(--color-cyan)';

  return (
    <ResponsiveContainer
      width="100%"
      height={400}
      minHeight={280}
    >
      <RechartsRadarChart
        data={data}
        margin={chartMargin}
      >
        <PolarGrid
          stroke={gridColor}
          strokeDasharray="0"
          isAnimationActive={false}
        />
        <PolarAngleAxis
          dataKey="name"
          tick={{
            fill: tickColor,
            fontSize: 12,
            fontFamily: 'var(--font-mono)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
          angle={90}
          isAnimationActive={false}
        />
        <Radar
          name="Proficiency"
          dataKey="value"
          stroke="var(--color-blue)"
          strokeWidth={1.5}
          fill={lightMode ? 'rgba(0, 102, 255, 0.12)' : 'rgba(0, 102, 255, 0.15)'}
          isAnimationActive={false}
          dot={{
            fill: 'var(--color-cyan)',
            r: 3,
            strokeWidth: 0,
          }}
        />
      </RechartsRadarChart>
    </ResponsiveContainer>
  );
};

export default RadarChart;
