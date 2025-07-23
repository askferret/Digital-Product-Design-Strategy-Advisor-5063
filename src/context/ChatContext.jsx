import React, { createContext, useContext, useState, useEffect } from 'react';
import { chatWorkflows, findWorkflowByQuestion, getSuggestedQuestions } from '../data/chatWorkflows';

const ChatContext = createContext();

export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChatContext must be used within a ChatProvider');
  }
  return context;
};

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [suggestedQuestions, setSuggestedQuestions] = useState(
    getSuggestedQuestions([])
  );

  useEffect(() => {
    // Update suggested questions whenever messages change
    if (messages.length > 0) {
      setSuggestedQuestions(getSuggestedQuestions(messages));
    }
  }, [messages]);

  const addMessage = (message) => {
    setMessages(prev => [...prev, message]);
  };

  const clearMessages = () => {
    setMessages([]);
    setSuggestedQuestions(getSuggestedQuestions([]));
  };

  const processUserMessage = async (content) => {
    // Add user message
    const userMessage = {
      id: `user-${Date.now()}`,
      content,
      type: 'user',
      timestamp: new Date()
    };
    addMessage(userMessage);
    setIsTyping(true);

    // Check if this matches a predefined workflow
    const matchedWorkflow = findWorkflowByQuestion(content);
    
    console.log('User question:', content);
    console.log('Matched workflow:', matchedWorkflow ? matchedWorkflow.initialQuestion : 'No match');

    setTimeout(() => {
      if (matchedWorkflow && matchedWorkflow.responses.length > 0) {
        // Use the predefined response from the workflow
        const response = {
          ...matchedWorkflow.responses[0],
          id: `assistant-${Date.now()}`, // Generate new ID
          timestamp: new Date() // Update timestamp to current time
        };
        console.log('Using predefined response for:', matchedWorkflow.initialQuestion);
        addMessage(response);
      } else {
        // Generate a dynamic response
        console.log('Using dynamic response');
        const response = generateDynamicResponse(content);
        addMessage({
          id: `assistant-${Date.now()}`,
          content: response,
          type: 'assistant',
          timestamp: new Date()
        });
      }
      setIsTyping(false);
    }, 1500); // Simulate thinking time
  };

  // Generate a response for questions not in our predefined workflows
  const generateDynamicResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('design system')) {
      return `# Design System Strategy

Based on your healthcare context and current team structure, here are my recommendations for your design system approach:

## Key Principles for Healthcare Design Systems

1. **Clinical Accuracy**: Components must maintain precision in medical data presentation
2. **Accessibility First**: WCAG AA compliance as a minimum baseline  
3. **Contextual Density**: Ability to adapt information density based on user role and scenario
4. **Compliance Built-in**: Design patterns that inherently support regulatory requirements

## Implementation Recommendations

- Start with a core components audit to identify what's already in use
- Prioritize clinical workflows for initial pattern development
- Create a governance model that includes clinical stakeholders
- Develop a contribution model that works with your agile process

Would you like me to elaborate on any specific aspect of design system implementation for healthcare?`;
    }

    if (lowerMessage.includes('user research') || lowerMessage.includes('research methods')) {
      return `# Research Methods for Healthcare UX

Based on your specific context, I recommend this research approach:

## Recommended Methods

### For Clinician Users
- **Contextual Inquiry**: Observing workflow in actual clinical settings
- **Diary Studies**: Understanding usage patterns across shifts  
- **Task Analysis**: Measuring efficiency of key clinical workflows

### For Administrative Users
- **Jobs-to-be-Done Interviews**: Understanding core administrative needs
- **Service Blueprinting**: Mapping cross-departmental workflows
- **Usability Benchmarking**: Comparing against industry standards

### For Patients  
- **Accessibility Evaluation**: Ensuring inclusive design
- **First-Click Testing**: Optimizing critical navigation paths
- **Comprehension Testing**: Ensuring medical information clarity

## Research Planning Framework

I've analyzed your current research activities and recommend:
1. Quarterly deep-dive studies on high-impact areas
2. Monthly pulse checks on key metrics  
3. Bi-weekly usability testing on in-development features

Would you like me to develop a specific research plan for an upcoming feature?`;
    }

    // Default response for other questions
    return `Based on your healthcare platform context and the data sources I have access to, I can provide strategic guidance on this question.

To give you the most helpful response, could you share a bit more about:

1. Which specific aspect of this challenge is most pressing for your team right now?
2. Are there any particular constraints (time, resources, technical) I should consider?
3. Have you tried approaches to address this already?

This will help me tailor my strategic recommendations to your specific situation.`;
  };

  const value = {
    messages,
    addMessage,
    clearMessages,
    isTyping,
    setIsTyping,
    suggestedQuestions,
    processUserMessage
  };

  return (
    <ChatContext.Provider value={value}>
      {children}
    </ChatContext.Provider>
  );
};