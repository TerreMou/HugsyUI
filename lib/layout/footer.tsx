import React from 'react';
import {classes} from '../helpers/scopedClassMaker';

interface Props extends React.HTMLAttributes<HTMLElement> {
}

const Footer: React.FC<Props> = ({className, children, ...rest}) => {
  return (
    <div className={classes('hugsyui-layout-footer', className)} {...rest}>
      {children}
    </div>
  );
};

export {Footer};