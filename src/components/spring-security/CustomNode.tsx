"use client"
import React, { Fragment, memo } from 'react';
import { Handle, Position } from '@xyflow/react';
 
interface CustomNodeProps {
  data: {
    label: string;
  };
}

const CustomNodeComponent = memo(({ data }: CustomNodeProps) => {
  return (
    <div className='p-2 bg-background rounded-md bg-green-500 dark:bg-green-800 border-primary border-2'>
      {data.label}
      <Handle type="source" position={Position.Top} id="st" />
      <Handle type="source" position={Position.Right} id="sr" />
      <Handle type="source" position={Position.Bottom} id="sb" />
      <Handle type="source" position={Position.Left} id="sl" />
      <Handle type="target" position={Position.Top} id="tt" />
      <Handle type="target" position={Position.Right} id="tr" />
      <Handle type="target" position={Position.Bottom} id="tb" />
      <Handle type="target" position={Position.Left} id="tl" />
    </div>
  );
});

CustomNodeComponent.displayName = "CustomNode";

export const CustomNode = CustomNodeComponent;