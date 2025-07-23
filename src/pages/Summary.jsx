import React, {useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import {motion} from 'framer-motion';
import {useAppContext} from '../context/AppContext';
import Button from '../components/Button';
import SafeIcon from '../common/SafeIcon';
import {FiArrowLeft, FiDownload, FiRefreshCw, FiCheckCircle} from 'react-icons/fi';
import {jsPDF} from 'jspdf';
import * as htmlToImage from 'html-to-image';

const Summary = () => {
  const navigate = useNavigate();
  const {businessGoal, finalSelectedPath, resetAll} = useAppContext();
  const summaryRef = useRef(null);

  if (!finalSelectedPath) {
    navigate('/compass/strategic-paths');
    return null;
  }

  const handleExportPDF = async () => {
    if (!summaryRef.current) return;

    try {
      const dataUrl = await htmlToImage.toPng(summaryRef.current, {
        quality: 1
      });

      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const imgProps = pdf.getImageProperties(dataUrl);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(dataUrl, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('strategic-design-path.pdf');
    } catch (error) {
      console.error('Error exporting PDF:', error);
      alert('Failed to export PDF. Please try again.');
    }
  };

  const handleStartOver = () => {
    if (window.confirm('Are you sure you want to start over? All progress will be lost.')) {
      resetAll();
      navigate('/compass');
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-8">
      <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        className="text-center mb-8"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <SafeIcon icon={FiCheckCircle} className="w-8 h-8 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Your Strategic Design Path
        </h1>
        <p className="text-gray-600">
          Here's a summary of your selected strategic path to achieve your business goal.
        </p>
      </motion.div>

      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 0.2}}
        ref={summaryRef}
        className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8"
      >
        <div className="mb-6 pb-6 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900 mb-2">
            Business Goal
          </h2>
          <p className="text-gray-700">{businessGoal}</p>
        </div>

        <div className="mb-6 pb-6 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900 mb-2">
            Selected Strategy
          </h2>
          <h3 className="text-xl font-semibold text-primary-700 mb-3">
            {finalSelectedPath.title}
          </h3>
          <p className="text-gray-700 mb-4">
            {finalSelectedPath.summary}
          </p>
        </div>

        <div className="mb-6 pb-6 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Key Benefits
          </h2>
          <ul className="space-y-2">
            {finalSelectedPath.pros.map((pro, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <SafeIcon icon={FiCheckCircle} className="w-3 h-3 text-green-600" />
                </span>
                <span className="text-gray-700">{pro}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Recommended Next Steps
          </h2>
          <ol className="space-y-3 list-decimal pl-5">
            {finalSelectedPath.nextSteps.map((step, index) => (
              <li key={index} className="text-gray-700 pl-2">
                {step}
              </li>
            ))}
          </ol>
        </div>
      </motion.div>

      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 0.3}}
        className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0"
      >
        <div className="flex space-x-4">
          <Button
            variant="secondary"
            onClick={() => navigate('/compass/strategic-paths')}
            icon={FiArrowLeft}
            iconPosition="left"
          >
            Back
          </Button>
          <Button
            variant="outline"
            onClick={handleStartOver}
            icon={FiRefreshCw}
            iconPosition="left"
          >
            Start Over
          </Button>
        </div>
        <Button
          onClick={handleExportPDF}
          icon={FiDownload}
          iconPosition="left"
        >
          Export Summary
        </Button>
      </motion.div>

      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 0.4}}
        className="mt-8 p-5 bg-blue-50 rounded-lg"
      >
        <h3 className="text-sm font-medium text-blue-800 mb-2">
          How was your experience?
        </h3>
        <p className="text-sm text-blue-700 mb-4">
          We're continuously improving Strategic Compass. Please rate your experience and provide feedback.
        </p>
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5].map((rating) => (
            <button
              key={rating}
              className="w-8 h-8 rounded-full bg-white border border-blue-300 hover:bg-blue-100 flex items-center justify-center text-blue-800 font-medium"
            >
              {rating}
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Summary;