import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiSend, FiPaperclip } = FiIcons;

const ChatInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');
  const textareaRef = useRef(null);

  // Auto resize textarea based on content
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "44px";
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + "px";
    }
  }, [message]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message.trim());
      setMessage('');
      
      // Reset height after sending
      if (textareaRef.current) {
        textareaRef.current.style.height = "44px";
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="p-3 sm:p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
    >
      <form onSubmit={handleSubmit} className="flex items-end space-x-2 sm:space-x-3">
        <button
          type="button"
          className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors hidden sm:block"
          title="Attach file"
        >
          <SafeIcon icon={FiPaperclip} className="w-5 h-5" />
        </button>
        <div className="flex-1 relative">
          <textarea
            ref={textareaRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about product strategy, user research insights, competitive analysis..."
            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg resize-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm sm:text-base bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            rows="1"
            style={{ minHeight: '44px', maxHeight: '120px' }}
          />
        </div>
        <button
          type="submit"
          disabled={!message.trim()}
          className="p-2.5 sm:p-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex-shrink-0"
        >
          <SafeIcon icon={FiSend} className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </form>
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center px-2">
        AI advisor trained on design strategy best practices for Series B startups
      </p>
    </motion.div>
  );
};

export default ChatInput;