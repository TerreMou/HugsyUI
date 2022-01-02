import React from 'react';
import './importIcons.js'

interface IconProps {
  name: string;
}

const Icon: React.FC<IconProps> = (props) => {
  return (
    <span>
      <svg>
        <use xlinkHref={`#${props.name}`}/>
      </svg>
    </span>
  );
};

export {Icon};