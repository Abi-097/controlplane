import React from 'react';

interface WorkflowProgressProps {
  currentStage: string;
}

const stages = ['New', 'Proposal Creation', 'Presentation', 'Negotiation', 'Closed'];

const WorkflowProgress: React.FC<WorkflowProgressProps> = ({ currentStage }) => {
  const currentIndex = stages.indexOf(currentStage);

  return (
    <div className="w-full max-w-4xl mx-auto">
  <svg width="100%" height="50" viewBox="0 0 800 50" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      const textColor = isActive ? '#2080D0' : '#000000';
      const strokeColor = '#CCCCCC';

      let pathD = '';

      if (index === 0) {
        // First stage
        pathD = `M${x},0 H${x + 140} L${x + 160},25 L${x + 140},50 H${x} Z`;

      } else if (index === stages.length - 1) {
        // Last stage
        pathD = `M${x},0 H${x + 140} L${x + 140},0 L${x + 140},50 H${x} L${x + 20},25 Z`;
      } else {
        // Middle stages
        pathD = `M${x},0 H${x + 140} L${x + 160},25 L${x + 140},50 H${x} L${x + 20},25 Z`;
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
            x={x + (index === stages.length - 1 ? 60 : 80)}
            y="27"
            textAnchor="middle"
            dominantBaseline="middle"
            fill={textColor}
            fontFamily="Arial, sans-serif"
            fontSize="12"
            fontWeight="bold"
          >
            {stage}
          </text>
        </g>
      );
    })}
  </svg>
</div>

  );
};

export default WorkflowProgress;
