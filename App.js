import React from 'react';
import MindNode from './components/node.components';
import ReactFlow, { MiniMap, Background, BackgroundVariant, Controls } from 'reactflow';
import 'reactflow/dist/style.css';
import ResizableNode from './ResizableNode';
import ResizableNodeSelected from './ResizableNodeSelected';
import CustomResizerNode from './CustomResizerNode';
import './App.css';

function App() {
  return (
     <div className="App">
      <MindNode/>
    
     </div>)
}




export default App;






