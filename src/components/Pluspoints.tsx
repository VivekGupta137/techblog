"use client"

import { Check, Cross, X } from "lucide-react";
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
    <Check className="size-5 text-green-600 mr-2 mt-1 dark:text-green-400" />
  ) : (
    // Cross Icon for Cons
    <X className="size-5 text-red-600 mr-2 mt-1 dark:text-red-400" />
  );

  return (
    <div className={`points p-2 sm:p-4 bg-muted border-l-4 ${isPros ? 'border-green-500' : 'border-red-500'} dark:bg-muted-dark`}>
      <ul className="space-y-2 font-gt-reg">
        {React.Children.map(children, (child) => (
          <li className='flex'>
            <div>
                {icon}
            </div>
            <div>{child}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Points;
