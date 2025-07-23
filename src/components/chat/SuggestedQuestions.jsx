import React from 'react';
import { motion } from 'framer-motion';
import { useChatContext } from '../../context/ChatContext';

const SuggestedQuestions = ({ onQuestionClick }) => {
  const { messages, suggestedQuestions } = useChatContext();

  // These are the full predefined workflow questions for easy testing
  const workflowQuestions = [
    "How do we define measurable KPIs for our designs that meaningfully address the intersection of our business goals and user needs?",
    "How can we track and measure the direct impact of design choices on long-term engagement, especially when user behavior is influenced by factors outside our control?",
    "How do we ensure our designs reflect both short-term user needs and long-term product strategy, especially when both are in tension?",
    "What's the most effective way to conduct a competitive design analysis for our healthcare platform that goes beyond just feature comparison?",
    "Our design system is becoming unwieldy as we scale. How should we evolve it to support multiple products while maintaining consistency?"
  ];

  // Use context-aware suggestions if available, otherwise use the predefined workflow questions
  const questionsToShow = messages.length > 0 ? suggestedQuestions : workflowQuestions;

  return (
    <div className="space-y-2 max-w-4xl mx-auto">
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 text-center">
        Try asking about:
      </p>
      <div className="grid grid-cols-1 gap-2">
        {questionsToShow.map((question, index) => (
          <motion.button
            key={question}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => onQuestionClick(question)}
            className="text-left p-3 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg text-sm text-gray-700 dark:text-gray-200 transition-colors"
          >
            {question}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default SuggestedQuestions;