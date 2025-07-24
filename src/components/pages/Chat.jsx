import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import { useChatContext } from '../../context/ChatContext';
import { useDataContext } from '../../context/DataContext';
import { useAuthContext } from '../../context/AuthContext';
import RoleGuard from '../auth/RoleGuard';
import MessageBubble from '../chat/MessageBubble';
import TypingIndicator from '../chat/TypingIndicator';
import SuggestedQuestions from '../chat/SuggestedQuestions';
import ChatInput from '../chat/ChatInput';

const { FiRefreshCw, FiDownload, FiMoreHorizontal } = FiIcons;

const Chat = () => {
  const { messages, processUserMessage, isTyping, clearMessages } = useChatContext();
  const { dataSources } = useDataContext();
  const { PERMISSIONS } = useAuthContext();
  const messagesEndRef = useRef(null);
  const [showActions, setShowActions] = useState(false);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = async (content) => {
    await processUserMessage(content);
  };

  const clearChat = () => {
    clearMessages();
  };

  const exportChat = () => {
    // Create a text representation of the chat
    const chatText = messages
      .map(msg => `${msg.type === 'user' ? 'You' : 'Strategic Compass'}: ${msg.content}`)
      .join('\n\n-----------------------\n\n');

    // Create a blob and download it
    const blob = new Blob([chatText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `strategic-compass-chat-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <RoleGuard permissions={[PERMISSIONS.USE_CHAT]}>
      <div className="flex flex-col h-[calc(100vh-7rem)] bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        {/* Chat Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="min-w-0 flex-1">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white truncate">Strategy Session</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
              Connected to {dataSources.length} data sources
            </p>
          </div>

          {/* Desktop Actions */}
          <div className="hidden sm:flex space-x-2">
            <button
              onClick={clearChat}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              title="Clear chat"
            >
              <SafeIcon icon={FiRefreshCw} className="w-4 h-4" />
            </button>
            <button
              onClick={exportChat}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              title="Export chat"
            >
              <SafeIcon icon={FiDownload} className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Actions Menu */}
          <div className="relative sm:hidden">
            <button
              onClick={() => setShowActions(!showActions)}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <SafeIcon icon={FiMoreHorizontal} className="w-5 h-5" />
            </button>
            <AnimatePresence>
              {showActions && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  className="absolute right-0 top-full mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg py-2 min-w-[160px] z-10"
                >
                  <button
                    onClick={() => {
                      clearChat();
                      setShowActions(false);
                    }}
                    className="w-full flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <SafeIcon icon={FiRefreshCw} className="w-4 h-4" />
                    <span>Clear Chat</span>
                  </button>
                  <button
                    onClick={() => {
                      exportChat();
                      setShowActions(false);
                    }}
                    className="w-full flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <SafeIcon icon={FiDownload} className="w-4 h-4" />
                    <span>Export Chat</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-4">
          {messages.length === 0 ? (
            <div className="text-center py-6 sm:py-12">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiIcons.FiBrain} className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Start Your Strategy Session
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 px-4">
                Ask me anything about design strategy, product decisions, or competitive positioning.
              </p>
              <SuggestedQuestions onQuestionClick={handleSendMessage} />
            </div>
          ) : (
            <AnimatePresence>
              {messages.map((message) => (
                <MessageBubble key={message.id} message={message} />
              ))}
            </AnimatePresence>
          )}
          {isTyping && <TypingIndicator />}
          <div ref={messagesEndRef} />
        </div>

        {/* Chat Input */}
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </RoleGuard>
  );
};

export default Chat;