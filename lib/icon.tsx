import React from 'react';
import './importIcons.js';
import './icon.scss';

interface IconProps {
  name: string;
  onClick?: React.MouseEventHandler<SVGElement>;
}

const Icon: React.FC<IconProps> = (props) => {
  return (
    <svg className="hugsyui-icon" onClick={props.onClick}>
      <use xlinkHref={`#${props.name}`}/>
    </svg>
  );
};

export {Icon};