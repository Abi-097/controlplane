// import React from 'react';
// import { TbCircleCheckFilled } from 'react-icons/tb';

// interface WorkflowProgressProps {
//   currentStage: string;
// }

// const stages = ['New', 'Open-Not Contacted', 'Closed-Not Contacted', 'Qualified', 'Closed- Converted'];

// const wrapText = (text: string, maxWidth: number, fontSize: number, fontFamily: string) => {
//   const canvas = document.createElement('canvas');
//   const context = canvas.getContext('2d');
//   if (!context) return [];
//   context.font = `${fontSize}px ${fontFamily}`;
  
//   const words = text.split(' ');
//   const lines: string[] = [];
//   let currentLine = '';

//   for (const word of words) {
//     const testLine = currentLine ? `${currentLine} ${word}` : word;
//     const testWidth = context.measureText(testLine).width;

//     if (testWidth > maxWidth) {
//       lines.push(currentLine);
//       currentLine = word;
//     } else {
//       currentLine = testLine;
//     }
//   }
  
//   if (currentLine) {
//     lines.push(currentLine);
//   }

//   return lines;
// };

// const WorkflowProgress: React.FC<WorkflowProgressProps> = ({ currentStage }) => {
//   const currentIndex = stages.indexOf(currentStage);
//   const pathWidth = 160;
//   const textWidth = 20; // Desired text width in pixels
//   const fontSize = 12;
//   const fontFamily = 'sans-serif';

//   return (
//     <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
//       <svg width="900" height="50" viewBox="0 0 900 50" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <defs>
//           <linearGradient id="lightBlueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//             <stop offset="0%" stopColor="#E6F3FF" />
//             <stop offset="100%" stopColor="#CCE7FF" />
//           </linearGradient>
//         </defs>
//         {stages.map((stage, index) => {
//           const x = index * 180;
//           const isActive = index <= currentIndex;
//           const fillColor = isActive ? 'url(#lightBlueGradient)' : 'white';
//           const textColor = isActive ? '#0070c0' : '#424242';
//           const strokeColor = '#CCCCCC';

//           let pathD = '';

//           if (index === 0) {
//             pathD = `M${x},0 H${x + pathWidth} L${x + pathWidth + 20},25 L${x + pathWidth},50 H${x} Z`;
//           } else if (index === stages.length - 1) {
//             pathD = `M${x},0 H${x + pathWidth} L${x + pathWidth},0 L${x + pathWidth},50 H${x} L${x + 20},25 Z`;
//           } else {
//             pathD = `M${x},0 H${x + pathWidth} L${x + pathWidth + 20},25 L${x + pathWidth},50 H${x} L${x + 20},25 Z`;
//           }

//           const lines = wrapText(stage, textWidth, fontSize, fontFamily);

//           return (
//             <g key={stage}>
//               <path
//                 d={pathD}
//                 fill={fillColor}
//                 stroke={strokeColor}
//                 strokeWidth="1"
//               />
//               {lines.map((line, lineIndex) => {
//                 // Define vertical offset for specific indices
//                 const verticalOffset = [0, 3].includes(index) ? 5 : 0; // 10px offset for indices 0 and 3
                
//                 return (
//                   <text
//                     key={lineIndex}
//                     x={x + (index === stages.length - 1 ? 85 : 100)}
//                     y={7 + lineIndex * (fontSize * 1.2) + verticalOffset} // Apply vertical offset
//                     textAnchor="middle"
//                     fill={textColor}
//                     fontFamily={fontFamily}
//                     fontSize={fontSize}
//                     fontWeight="bold"
//                   >
//                     {line}
//                   </text>
//                 );
//               })}
//               {isActive && (
//                 <foreignObject x={x + 22} y="2" width="32" height="32">
//                   <TbCircleCheckFilled color="green" size={32} />
//                 </foreignObject>
//               )}
//             </g>
//           );
//         })}
//       </svg>
//     </div>
//   );
// };

// export default WorkflowProgress;

import React from 'react';
import { TbCircleCheckFilled } from 'react-icons/tb';

interface WorkflowProgressProps {
  currentStage: string;
}

const stages = ['New', 'Open-Not Contacted', 'Closed-Not Contacted', 'Qualified', 'Closed-Converted'];

const WorkflowProgress: React.FC<WorkflowProgressProps> = ({ currentStage }) => {
  const currentIndex = stages.indexOf(currentStage);
  const pathWidth = 150; // Increased the width by 30px

  return (
    <div className="w-full ">
      <svg width="790" height="50" viewBox="0 0 790 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="lightBlueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#E6F3FF" />
        <stop offset="100%" stopColor="#CCE7FF" />
      </linearGradient>
    </defs>
    {stages.map((stage, index) => {
      const x = index * 160;
      const isActive = index <= currentIndex;
      const fillColor = isActive ? 'url(#lightBlueGradient)' : 'white';
      const textColor = isActive ? '#0070c0' : '#424242';
      const strokeColor = '#CCCCCC';

      let pathD = '';

       if (index === 0) {
            // First stage
            pathD = `M${x},0 H${x + pathWidth} L${x + pathWidth + 20},25 L${x + pathWidth},50 H${x} Z`;
          } else if (index === stages.length - 1) {
            // Last stage
            pathD = `M${x},0 H${x + pathWidth} L${x + pathWidth},0 L${x + pathWidth},50 H${x} L${x + 20},25 Z`;
          } else {
            // Middle stages
            pathD = `M${x},0 H${x + pathWidth} L${x + pathWidth + 20},25 L${x + pathWidth},50 H${x} L${x + 20},25 Z`;
          }

      return (
        <g key={stage}>
          <path
            d={pathD}
            fill={fillColor}
            stroke={strokeColor}
            strokeWidth="1"
          />
          <text
            x={x + (index === stages.length - 1 ? 80 : 100)}
            y="27"
            textAnchor="middle"
            dominantBaseline="middle"
            fill={textColor}
            fontFamily="sans-serif"
            fontSize="12"
            fontWeight="bold"
          >
            {stage}
          </text>
          {isActive && (
                <foreignObject x={x + 18} y="4" width="28" height="28">
                  <TbCircleCheckFilled color="green" size={28} />
                </foreignObject>
              )}
        </g>
        
      );
    })}
  </svg>
</div>

  );
};

export default WorkflowProgress;