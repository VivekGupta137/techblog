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
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import { useTheme } from "next-themes";
import { useCallback } from "react";

const initialNodes = [
    { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
    { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
];
const initialEdges: Edge[] = [
    {
        id: "e1-2",
        source: "1",
        target: "2",
        animated: true,
        markerEnd: "arrow",
    },
];
const proOptions = { hideAttribution: true };

const FirstFlow = () => {
    const { theme } = useTheme()
    const [nodes,, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback(
        (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
        [setEdges]
    );

    return (
        <div style={{ width: "100%", height: "500px" }}>
            <ReactFlow
                colorMode={theme as ColorMode }
                proOptions={proOptions}
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
            >
                <Background color="#ccc" variant={BackgroundVariant.Dots} />
                <MiniMap nodeStrokeWidth={12} zoomable pannable />
                <Controls />
            </ReactFlow>
        </div>
    );
};

export default FirstFlow;
