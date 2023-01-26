


import React, { Fragment } from 'react'
import { useCallback } from 'react';
import  ReactFlow, {
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
  } from 'reactflow';
  import 'reactflow/dist/style.css';


  const initBgColor = '#1a192b';



  const initialElements = [
    { id: '1', position: { x: -400, y: 0 }, data: { label: 'M.ENG' },draggable: false },
    { id: '2', color:'initBgColor' , position: { x: -400, y: 100 }, data: { label: 'Courses: SYDE660, 6 ENG grad courses (at least 2 at 600 or 700 level)'} , draggable: false},
    { id: '3', position: { x: -400, y: 200 }, data: { label: 'Thesis Reqs: None' } ,draggable: false},
    { id: '4', position: { x: -400, y: 300 }, data: { label: 'Other Reqs: Grad AIM, cumelative average of at least 70%' }, draggable: false },
    
    { id: '5', position: { x: -200, y: 0 }, data: { label: 'MASc' }, draggable: false },
    { id: '6', position: { x: -200, y: 100 }, data: { label: 'Courses: 4 ENG grad courses approved by advisor (at least 2 at 600, or 700 level)' }, draggable: false },
    { id: '7', position: { x: -200, y: 200 }, data: { label: 'Thesis Reqs: Present research seminar on thesis, submit a thesis with results of work' }, draggable: false },
    { id: '8', position: { x: -200, y: 300 }, data: { label: 'Other Reqs: Grad AIM, cumelative average of at least 70%, attend 4 seminars/semester' }, draggable: false },
   
    { id: '9', position: { x: 0, y: 0 }, data: { label: 'PhD' }, draggable: false},
    { id: '10', position: { x: 0, y: 100 }, data: { label: 'Courses: 3 ENG grad courses approved by advisor (at least 2 at 600 or 700 level)' }, draggable: false },
    { id: '11', position: { x: 0, y: 200 }, data: { label: 'Thesis Reqs: Comp Exam, present a seminar, submit a thesis with novel results' }, draggable: false },
    { id: '12', position: { x: 0, y: 300 }, data: { label: 'Other Reqs: Grad AIM, cumelative average of at least 70%, attend 4 seminars/semester' }, draggable: false },
    
  ];


  const initialEdges = [
        { id: 'e1-2', source: '1', target: '2' },
        { id: 'e2-3', source: '2', target: '3' },
        { id: 'e3-4', source: '3', target: '4' },
        { id: 'e5-6', source: '5', target: '6' },
        { id: 'e6-7', source: '6', target: '7' },
        { id: 'e7-8', source: '7', target: '8' },
        { id: 'e9-10', source: '9', target: '10' },
        { id: 'e10-11', source: '10', target: '11' },
        { id: 'e11-12', source: '11', target: '12' },
      ];

  const containerStyle = {
  width: 1000,
  height: 1000
}

  const MindNode = () =>  {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialElements);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  
    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);
  
    return (
      <div style={containerStyle}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
        >

          <text> hihi </text>
          <MiniMap />
          <Controls />
          <Background />
        </ReactFlow>

        </div>

    
      );
    }


export default MindNode;
   

















// import React,{ useState, useEffect, useCallback } from 'react'
// import  ReactFlow, {
//     MiniMap,
//     Controls,
//     Background,
//     useNodesState,
//     useEdgesState,
//     addEdge,
//   } from 'reactflow';
//   import 'reactflow/dist/style.css';
  
  

//   const initBgColor = '#1A192B';

//   const CustomNodeFlow = () => {
//     const [nodes, setNodes, onNodesChange] = useNodesState([]);
//     const [edges, setEdges, onEdgesChange] = useEdgesState([]);
//     const [bgColor, setBgColor] = useState(initBgColor);
  



//   const initialElements = [
//     { id: '1', position: { x: -400, y: 0 }, data: { label: 'fasdfjsadfcbsajcbsajcabcmab fcmabfnjdfbakjfbnakfnakfnakdfn lqsaknfakn f,af aknfkanf dmabnfkahfiakbnfkqf' } },
//     { id: '2', data: {color: initBgColor },
//     style: { border: '1px solid #777', padding: 10 }, position: { x: -400, y: 100 }, data: { label: '2' } , selectable: false},
//     { id: '3', position: { x: -400, y: 200 }, data: { label: '3' } },
//     { id: '4', position: { x: -200, y: 0 }, data: { label: '4' } },
//     { id: '5', position: { x: -200, y: 100 }, data: { label: '5' } },
//     { id: '6', position: { x: -200, y: 200 }, data: { label: '6' } },
//     { id: '7', position: { x: 0, y: 0 }, data: { label: '7' } },
//     { id: '8', position: { x: 0, y: 100 }, data: { label: '8' } },
//     { id: '9', position: { x: 0, y: 200 }, data: { label: '9' }},
//   ];


//   const initialEdges = [
//     { id: 'e1-2', source: '1', target: '2' },
//     { id: 'e2-3', source: '2', target: '3' },
//     { id: 'e4-5', source: '4', target: '5' },
//     { id: 'e5-6', source: '5', target: '6' },
//     { id: 'e7-8', source: '7', target: '8' },
//     { id: 'e8-9', source: '8', target: '9' },
//   ];

//   const containerStyle = {
//   width: 4000,
//   height: 1000,
// }
// const minimapStyle = {
//    height: 120,
//    };
  


//   const MindNode = () =>  {
//     const [nodes, setNodes, onNodesChange] = useNodesState(initialElements);
//     const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  
//     const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);
  
//     return (
//       <div style={containerStyle}>
//         <ReactFlow
//           nodes={nodes}
//           edges={edges}
//           onNodesChange={onNodesChange}
//           onEdgesChange={onEdgesChange}
//           onConnect={onConnect}
//           fitView
          
//         >

//           <text> SYDE Graduate Student Program Reqs </text>
//           <MiniMap style={minimapStyle} zoomable pannable />
//           <Controls />
//           <Background color="#aaa" gap={16} />
//           <Controls />
//           <Background />
//         </ReactFlow>

//         </div>


        

    
//       );
//     };
//   };

// export default MindNode;
   

// // const MindNode = () =>  {
// //   const [nodes, setNodes, onNodesChange] = useNodesState(initialElements);
// //   const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

// //   const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

// //   return (
// //     <div style={containerStyle}>
// //       <ReactFlow
// //         nodes={nodes}
// //         edges={edges}
// //         onNodesChange={onNodesChange}
// //         onEdgesChange={onEdgesChange}
// //         onConnect={onConnect}
// //         fitView
// //       >

// //         <text> hihi </text>
// //         <MiniMap />
// //         <Controls />
// //         <Background />
// //       </ReactFlow>

// //       </div>

  
// //     );
// //   }
