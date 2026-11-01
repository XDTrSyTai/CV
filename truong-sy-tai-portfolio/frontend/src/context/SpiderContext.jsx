import React, { createContext, useContext, useState, useEffect } from 'react';

const SpiderContext = createContext();

export const SpiderProvider = ({ children }) => {
  const [spiderActive, setSpiderActive] = useState(() => {
    const saved = localStorage.getItem('tst-spider-active');
    // Default to true so user immediately sees the spider when integrated
    return saved !== null ? saved === 'true' : true;
  });

  const toggleSpider = () => {
    setSpiderActive(prev => {
      const next = !prev;
      localStorage.setItem('tst-spider-active', String(next));
      return next;
    });
  };

  return (
    <SpiderContext.Provider value={{ spiderActive, toggleSpider }}>
      {children}
    </SpiderContext.Provider>
  );
};

export const useSpider = () => {
  const context = useContext(SpiderContext);
  if (!context) {
    throw new Error('useSpider must be used within a SpiderProvider');
  }
  return context;
};

export default SpiderContext;

