import React from 'react';
import './importIcons.js';
import './icon.scss';

interface IconProps {
  name: string;
}

const Icon: React.FC<IconProps> = (props) => {
  return (
    <svg className="hugsyui-icon">
      <use xlinkHref={`#${props.name}`}/>
    </svg>
  );
};

export {Icon};