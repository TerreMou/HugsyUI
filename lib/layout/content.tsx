import React from 'react';
import {classes} from '../helpers/scopedClassMaker';

interface Props extends React.HTMLAttributes<HTMLElement> {
}

const Content: React.FC<Props> = ({className, children, ...rest}) => {
  return (
    <div className={classes('hugsyui-layout-content', className)} {...rest}>
      {children}
    </div>
  );
};

export {Content};