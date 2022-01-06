import React from 'react';
import {classes} from '../helpers/scopedClassMaker';

interface Props extends React.HTMLAttributes<HTMLElement> {
}

const Aside: React.FC<Props> = ({className, children, ...rest}) => {
  return (
    <div className={classes('hugsyui-layout-aside', className)} {...rest}>
      {children}
    </div>
  );
};

export {Aside};