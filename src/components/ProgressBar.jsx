import React from 'react';

const ProgressBar = ({ steps, currentStep }) => {
  // Only show relevant steps in the progress bar
  const visibleSteps = steps.filter(step => step.path !== '/');
  
  // Adjust currentStep to account for the filtered steps
  const adjustedCurrentStep = currentStep - 1;
  
  // Calculate progress percentage
  const progress = Math.round(
    ((adjustedCurrentStep) / (visibleSteps.length - 1)) * 100
  );
  
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-3">
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-primary-600 bg-primary-100">
                Progress
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-primary-600">
                {progress}%
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-1 text-xs flex rounded bg-primary-100">
            <div 
              style={{ width: `${progress}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary-600 transition-all duration-500"
            ></div>
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            {visibleSteps.map((step, index) => (
              <div key={index} className={`${index === adjustedCurrentStep ? 'text-primary-600 font-medium' : ''}`}>
                {step.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;