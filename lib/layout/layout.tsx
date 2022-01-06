import React from 'react';
import {classes} from '../helpers/scopedClassMaker';

interface Props extends React.HTMLAttributes<HTMLElement> {
}

const Layout: React.FC<Props> = ({className, children, ...rest}) => {
  return (
    <div className={classes('hugsyui-layout', className)} {...rest}>
      {children}
    </div>
  );
};

export {Layout};