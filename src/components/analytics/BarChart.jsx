import React from 'react';

const BarChart = ({ data, height = 300 }) => {
  const maxValue = Math.max(...data.map(d => d.value));
  
  return (
    <div className="w-full" style={{ height }}>
      <div className="flex items-end justify-between h-full space-x-2">
        {data.map((item, index) => {
          const barHeight = (item.value / maxValue) * 100;
          return (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div 
                className="w-full bg-primary-600 dark:bg-primary-500 rounded-t-md transition-all duration-500 ease-out flex items-end justify-center pb-2"
                style={{ height: `${barHeight}%` }}
              >
                <span className="text-xs text-white font-medium">
                  {item.value}
                </span>
              </div>
              <div className="mt-2 text-xs text-gray-600 dark:text-gray-400 text-center">
                {item.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BarChart;