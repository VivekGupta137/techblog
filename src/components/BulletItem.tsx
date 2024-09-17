// BulletItem.tsx
import React from 'react';

type BulletItemProps = {
  children: React.ReactNode;
};

export const BulletItem: React.FC<BulletItemProps> = ({ children }) => (
  <div style={{ color: 'black', display: 'flex', alignItems: 'center' }}>
    <span style={{ marginRight: '8px' }}>•</span> {children}
  </div>
);
