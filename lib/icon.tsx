import React from 'react';
import './importIcons.js';
import './icon.scss';
import {classes} from './helpers/classes';

interface IconProps extends React.SVGAttributes<SVGElement>{
  name: string;
}

const Icon: React.FC<IconProps> = (props) => {
  const {className, ...restProps} = props
  return (
    <svg className={classes('hugsyui-icon', className)}
         {...restProps}
    >
      <use xlinkHref={`#${props.name}`}/>
    </svg>
  );
};

export {Icon};