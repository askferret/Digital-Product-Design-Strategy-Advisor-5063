import React from 'react';

const LineChart = ({ data, height = 300 }) => {
  const maxValue = Math.max(...data.map(d => d.value));
  const minValue = Math.min(...data.map(d => d.value));
  const range = maxValue - minValue || 1;
  
  // Calculate points for the line
  const points = data.map((point, index) => {
    const x = (index / (data.length - 1)) * 100;
    const y = 100 - ((point.value - minValue) / range) * 100;
    return `${x},${y}`;
  }).join(' ');
  
  // Calculate area points for gradient fill
  const areaPoints = `0,100 ${points} 100,100`;

  return (
    <div className="w-full" style={{ height }}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="overflow-visible"
      >
        {/* Grid lines */}
        <defs>
          <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgb(99 102 241)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="rgb(99 102 241)" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        
        {/* Horizontal grid lines */}
        {[0, 25, 50, 75, 100].map(y => (
          <line
            key={y}
            x1="0"
            y1={y}
            x2="100"
            y2={y}
            stroke="rgb(229 231 235)"
            strokeWidth="0.2"
            className="dark:stroke-gray-600"
          />
        ))}
        
        {/* Area fill */}
        <polygon
          points={areaPoints}
          fill="url(#chartGradient)"
          className="opacity-60"
        />
        
        {/* Main line */}
        <polyline
          points={points}
          fill="none"
          stroke="rgb(99 102 241)"
          strokeWidth="0.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="drop-shadow-sm"
        />
        
        {/* Data points */}
        {data.map((point, index) => {
          const x = (index / (data.length - 1)) * 100;
          const y = 100 - ((point.value - minValue) / range) * 100;
          return (
            <circle
              key={index}
              cx={x}
              cy={y}
              r="0.8"
              fill="rgb(99 102 241)"
              className="drop-shadow-sm"
            />
          );
        })}
      </svg>
      
      {/* X-axis labels */}
      <div className="flex justify-between mt-4 text-xs text-gray-600 dark:text-gray-400">
        {data.map((point, index) => (
          <span key={index} className={index % 2 === 0 ? '' : 'hidden sm:inline'}>
            {point.label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default LineChart;