import React from 'react';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import { formatDistanceToNow } from 'date-fns';

const { FiUser, FiBrain } = FiIcons;

const MessageBubble = ({ message }) => {
  const isUser = message.type === 'user';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}
    >
      <div className={`flex ${isUser ? 'flex-row-reverse' : 'flex-row'} items-start space-x-3 max-w-full ${isUser ? 'ml-3' : 'mr-3'}`}>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
          isUser 
            ? 'bg-primary-600 text-white ml-3' 
            : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 mr-3'
        }`}>
          <SafeIcon icon={isUser ? FiUser : FiBrain} className="w-4 h-4" />
        </div>
        <div className={`rounded-lg px-4 py-3 ${
          isUser 
            ? 'bg-primary-600 text-white' 
            : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white'
        } max-w-[85vw] sm:max-w-[75vw] md:max-w-[60vw] lg:max-w-2xl overflow-auto`}>
          {isUser ? (
            <p className="text-sm break-words">{message.content}</p>
          ) : (
            <div className="prose prose-sm dark:prose-invert max-w-none overflow-auto">
              <ReactMarkdown
                components={{
                  p: ({children}) => <p className="mb-2 last:mb-0 text-sm break-words">{children}</p>,
                  ul: ({children}) => <ul className="list-disc list-inside mb-2 text-sm space-y-1">{children}</ul>,
                  ol: ({children}) => <ol className="list-decimal list-inside mb-2 text-sm space-y-1">{children}</ol>,
                  strong: ({children}) => <strong className="font-semibold text-gray-900 dark:text-white">{children}</strong>,
                  em: ({children}) => <em className="italic">{children}</em>,
                  h3: ({children}) => <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{children}</h3>,
                  h4: ({children}) => <h4 className="font-medium text-gray-800 dark:text-gray-100 mb-1">{children}</h4>,
                  code: ({children}) => <code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded text-sm font-mono">{children}</code>,
                  pre: ({children}) => <pre className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg overflow-auto my-2 text-sm">{children}</pre>,
                  table: ({children}) => <div className="overflow-x-auto"><table className="min-w-full text-sm">{children}</table></div>,
                  a: ({children, href}) => <a href={href} className="text-primary-600 dark:text-primary-400 hover:underline" target="_blank" rel="noopener noreferrer">{children}</a>
                }}
              >
                {message.content}
              </ReactMarkdown>
            </div>
          )}
          <div className={`text-xs mt-2 ${isUser ? 'text-primary-100' : 'text-gray-500 dark:text-gray-400'}`}>
            {formatDistanceToNow(message.timestamp, { addSuffix: true })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MessageBubble;