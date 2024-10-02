"use client"

import React from "react";


type PointsType = 'pros' | 'cons';

interface PointsProps {
  type: PointsType;
  children: React.ReactNode;
}

const Points = ({ type, children }: PointsProps) => {
  const isPros = type === 'pros';
  const icon = isPros ? (
    // Check Icon for Pros
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-5 h-5 text-green-600 mr-2 mt-1 dark:text-green-400"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  ) : (
    // Cross Icon for Cons
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-5 h-5 text-red-600 mr-2 mt-1 dark:text-red-400"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );

  return (
    <div className={`points p-4 bg-muted border-l-4 ${isPros ? 'border-green-500' : 'border-red-500'} dark:bg-muted-dark`}>
      <ul className="space-y-2">
        {React.Children.map(children, (child) => (
          <li className='flex'>
            {icon}
            <span>{child}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Points;
