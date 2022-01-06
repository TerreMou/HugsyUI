import React from 'react';
import {classes} from '../helpers/scopedClassMaker';

interface Props extends React.HTMLAttributes<HTMLElement> {
}

const Header: React.FC<Props> = ({className, children, ...rest}) => {
  return (
    <div className={classes('hugsyui-layout-header', className)} {...rest}>
      {children}
    </div>
  );
};

export {Header};