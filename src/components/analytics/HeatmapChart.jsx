import React from 'react';

const HeatmapChart = ({ data, xLabels, yLabels }) => {
  const maxValue = Math.max(...data.flat());
  
  const getIntensity = (value) => {
    const intensity = value / maxValue;
    return {
      backgroundColor: `rgba(99, 102, 241, ${intensity})`,
      color: intensity > 0.5 ? 'white' : 'rgb(55, 65, 81)'
    };
  };

  return (
    <div className="overflow-x-auto">
      <div className="inline-block min-w-full">
        {/* Y-axis labels */}
        <div className="flex">
          <div className="w-20 flex flex-col justify-between py-2">
            {yLabels.map((label, index) => (
              <div key={index} className="h-8 flex items-center text-xs text-gray-600 dark:text-gray-400">
                {label}
              </div>
            ))}
          </div>
          
          {/* Heatmap grid */}
          <div className="flex-1">
            {/* X-axis labels */}
            <div className="flex mb-2">
              {xLabels.map((label, index) => (
                <div key={index} className="flex-1 text-center text-xs text-gray-600 dark:text-gray-400 px-1">
                  {label}
                </div>
              ))}
            </div>
            
            {/* Data grid */}
            {data.map((row, rowIndex) => (
              <div key={rowIndex} className="flex mb-1">
                {row.map((value, colIndex) => (
                  <div
                    key={colIndex}
                    className="flex-1 h-8 flex items-center justify-center text-xs font-medium rounded mx-0.5 transition-all duration-200 hover:scale-105"
                    style={getIntensity(value)}
                  >
                    {value}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        
        {/* Legend */}
        <div className="mt-4 flex items-center justify-center space-x-2">
          <span className="text-xs text-gray-600 dark:text-gray-400">Low</span>
          <div className="flex space-x-1">
            {[0.1, 0.3, 0.5, 0.7, 0.9].map((intensity, index) => (
              <div
                key={index}
                className="w-4 h-4 rounded"
                style={{ backgroundColor: `rgba(99, 102, 241, ${intensity})` }}
              />
            ))}
          </div>
          <span className="text-xs text-gray-600 dark:text-gray-400">High</span>
        </div>
      </div>
    </div>
  );
};

export default HeatmapChart;