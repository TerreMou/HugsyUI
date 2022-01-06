import React from 'react';
import './button.scss';
import {classes} from '../helpers/scopedClassMaker';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name?: string;
}

const Button: React.FC<ButtonProps> =
  ({name, className, children, ...restProps}) => {
    return (
      <button className={classes('hugsyui-button', className)}
              {...restProps}
      >
        {children}
      </button>
    );
  };

export {Button};