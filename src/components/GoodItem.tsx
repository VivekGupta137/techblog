import React from 'react';

type GoodItemProps = {
  children: React.ReactNode;
};

export const GoodItem: React.FC<GoodItemProps> = ({ children }) => (
  <div style={{ color: 'green', display: 'flex', alignItems: 'center' }}>
    <span style={{ marginRight: '8px' }}>👍</span> {children}
  </div>
);
