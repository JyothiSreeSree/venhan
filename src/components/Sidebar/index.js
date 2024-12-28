import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNode,deleteNode } from '../../redux/nodesSlice';
import './index.css'

const Sidebar = () => {
  const [nodeId, setNodeId] = useState('');
  const dispatch = useDispatch();

  const handleAddNode = () => {
    const newNode = {
      id: nodeId,
      type: 'default',
      position: { x: Math.random() * 400, y: Math.random() * 400 },
      data: { label: `Node ${nodeId}` },
    };
    dispatch(addNode(newNode));
    setNodeId('');
  };

  const handledeleteNode = () => {
    dispatch(deleteNode(nodeId));
    setNodeId('');
  };

  return (
    <div style={{ padding: 10 }} className='sidebar'>
      <input 
        type="text"
        placeholder="Node ID"
        value={nodeId}
        onChange={(e) => setNodeId(e.target.value)}
      />
      <div>
      <button onClick={handleAddNode} className='add-note-btn'>Add Node</button>
      </div>
      <div>
      <button onClick={handledeleteNode} className='delete-node-btn'>delete Node</button>
      </div>
    </div>
  );
};

export default Sidebar;
