import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ProgressBar from './ProgressBar';
import { useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();
  
  // Define the steps in our flow
  const steps = [
    { path: '/', label: 'Welcome' },
    { path: '/set-goal', label: 'Set Goal' },
    { path: '/add-context', label: 'Add Context' },
    { path: '/strategic-paths', label: 'Strategic Paths' },
    { path: '/path-detail', label: 'Path Detail' },
    { path: '/summary', label: 'Summary' }
  ];
  
  // Find current step index
  const getCurrentStepIndex = () => {
    const currentPath = location.pathname;
    // Handle path-detail/:pathId pattern
    if (currentPath.startsWith('/path-detail/')) {
      return steps.findIndex(step => step.path === '/path-detail');
    }
    return steps.findIndex(step => step.path === currentPath);
  };
  
  const currentStepIndex = getCurrentStepIndex();
  
  // Only show progress bar after welcome screen
  const showProgressBar = currentStepIndex > 0;
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      {showProgressBar && (
        <ProgressBar 
          steps={steps} 
          currentStep={currentStepIndex} 
        />
      )}
      
      <main className="flex-1 container mx-auto px-4 py-6 md:px-6 lg:px-8">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;