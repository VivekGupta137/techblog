"use client";
import {
    ReactFlow,
    useNodesState,
    useEdgesState,
    addEdge,
    Edge,
    Background,
    BackgroundVariant,
    MiniMap,
    Controls,
    Connection,
    ColorMode,
    MarkerType,
    EdgeTypes,
    Node,
    Position,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import { useTheme } from "next-themes";
import { useCallback, useEffect } from "react";
import {CustomNode} from "./CustomNode";

const nodeTypes = {
    custom: CustomNode,
  };
  

const initialNodes: Node[] = [
    {
        id: "client",
        position: { x: 0, y: 10 },
        data: { label: "username & password from user" },
        type: "custom",
    },
    { id: "filters", position: { x: 0, y: 200 }, data: { label: "Spring security Filters" } ,type: "custom",},
    { id: "auth", position: { x: 200, y: 400 }, data: { label: "Authentication" } ,type: "custom",},
    { id: "auth-manager", position: { x: 300, y: 100 }, data: { label: "Authentication Manager" } ,type: "custom",},
    { id: "auth-provider", position: { x: 400, y: 200 }, data: { label: "Authentication Provider" } ,type: "custom",},
    { id: "user-details", position: { x: 400, y: 400 }, data: { label: "User Details Service" } ,type: "custom",},
    { id: "security-context", position: { x: 0, y: 400 }, data: { label: "Security Context" } ,type: "custom",},
];

const generateEdge = (source: string, target: string, label: string, sourceHandle='sa', targetHandle='tb') : Edge => ({
    id: `e-${source}-${target}`,
    source,
    target,
    animated: true,
    label,
    
    markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 10,
        height: 10,
        color: "hsl(var(--primary))",
    },
    style: {
        strokeWidth: 2,
    },
    sourceHandle,
    targetHandle,
})
const initialEdges: Edge[] = [
    generateEdge("client", "filters", "1", 'sb', 'tt'),
    generateEdge("filters", "auth", "2", "sb", "tt"),
    generateEdge("filters", "auth-manager", "3", "sr", "tl"),
    generateEdge("auth-manager", "auth-provider", "4", "sr", "tt"),
    generateEdge("auth-provider", "user-details", "5", "sb", "tt"),
    generateEdge("auth-provider", "auth-manager", "6", "sl", "tb"),
    generateEdge("auth-manager", "filters", "7", "sb", "tr"),
    generateEdge("filters", "security-context", "8", "sb", "tt"),
];
const proOptions = { hideAttribution: true };

const edgeTypes: EdgeTypes = {
  };
  

const FirstFlow = () => {
    const { resolvedTheme } = useTheme();
    const [nodes, , onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback(
        (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
        [setEdges]
    );

    

    return (
        <div style={{ width: "100%", height: "500px" }} className="group">
            <ReactFlow
                colorMode={resolvedTheme as ColorMode}
                proOptions={proOptions}
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                edgeTypes={edgeTypes}
                fitView
                nodeTypes={nodeTypes}
            >
                <Background color="#ccc" variant={BackgroundVariant.Dots} />
                <MiniMap className="hidden group-hover:block" nodeStrokeWidth={12} zoomable pannable />
            </ReactFlow>
        </div>
    );
};

export default FirstFlow;
