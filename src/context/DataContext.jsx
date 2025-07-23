import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useDataContext must be used within a DataProvider');
  }
  return context;
};

export const DataProvider = ({ children }) => {
  const [dataSources, setDataSources] = useState([
    {
      id: 'figma_demo',
      name: 'Figma',
      description: 'Design files, prototypes, and user flows',
      type: 'design',
      status: 'connected',
      connectedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
      lastSync: new Date(Date.now() - 2 * 60 * 60 * 1000),
      recordCount: 1247,
      color: 'purple'
    },
    {
      id: 'amplitude_demo',
      name: 'Amplitude',
      description: 'User behavior analytics and product insights',
      type: 'analytics',
      status: 'connected',
      connectedAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000),
      lastSync: new Date(Date.now() - 1 * 60 * 60 * 1000),
      recordCount: 892456,
      color: 'blue'
    },
    {
      id: 'userinterviews_demo',
      name: 'User Interviews',
      description: 'Research findings and user feedback',
      type: 'research',
      status: 'connected',
      connectedAt: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000),
      lastSync: new Date(Date.now() - 6 * 60 * 60 * 1000),
      recordCount: 156,
      color: 'green'
    }
  ]);

  const addDataSource = (source) => {
    setDataSources(prev => [...prev, source]);
  };

  const removeDataSource = (id) => {
    setDataSources(prev => prev.filter(source => source.id !== id));
  };

  const updateDataSource = (id, updates) => {
    setDataSources(prev => prev.map(source => 
      source.id === id ? { ...source, ...updates } : source
    ));
  };

  const value = {
    dataSources,
    addDataSource,
    removeDataSource,
    updateDataSource
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};