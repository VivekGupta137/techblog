// BadItem.tsx
import React from 'react';

type BadItemProps = {
  children: React.ReactNode;
};

export const BadItem: React.FC<BadItemProps> = ({ children }) => (
  <div style={{ color: 'red', display: 'flex', alignItems: 'center' }}>
    <span style={{ marginRight: '8px' }}>👎</span> {children}
  </div>
);
