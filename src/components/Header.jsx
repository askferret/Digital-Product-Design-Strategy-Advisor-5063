import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { FiArrowLeft, FiHome } from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const Header = () => {
  const navigate = useNavigate();
  const { resetAll } = useAppContext();
  
  const handleReset = () => {
    if (window.confirm('Are you sure you want to start over? All progress will be lost.')) {
      resetAll();
      navigate('/');
    }
  };
  
  const goBack = () => {
    navigate(-1);
  };
  
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex items-center" onClick={handleReset}>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Strategic Compass</span>
            </div>
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <button 
            onClick={goBack}
            className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100 transition"
            aria-label="Go back"
          >
            <SafeIcon icon={FiArrowLeft} className="w-5 h-5" />
          </button>
          
          <Link 
            to="/" 
            className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100 transition"
            onClick={handleReset}
            aria-label="Home"
          >
            <SafeIcon icon={FiHome} className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;