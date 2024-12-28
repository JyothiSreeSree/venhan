import React from 'react';
import ReactFlow, { addEdge as addEdgeFlow, Background } from 'react-flow-renderer';
import { useSelector, useDispatch } from 'react-redux';
import { addEdge as addEdgeAction } from '../../redux/edgesSlice';

const Diagram = () => {
  const nodes = useSelector((state) => state.nodes);
  const edges = useSelector((state) => state.edges);
  const dispatch = useDispatch();

  const onConnect = (params) => {
    // Use react-flow-renderer's addEdge for edge creation
    const newEdge = addEdgeFlow(params, edges);
    dispatch(addEdgeAction(newEdge[0])); // Dispatch only the new edge
  };

  return (
    <div style={{ height: 500, width: '100%' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onConnect={onConnect}
        fitView
      >
        <Background />
      </ReactFlow>
    </div>
  );
};

export default Diagram;
