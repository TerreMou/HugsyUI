import React, {ReactElement} from 'react';
import {classes} from '../helpers/scopedClassMaker';
import './layout.scss'
import {Aside} from './aside';

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: ReactElement | Array<ReactElement>
}

const Layout: React.FC<Props> = ({className, children, ...rest}) => {
  let hasAside = false;
  if ((children as Array<ReactElement>).length) {
    (children as Array<ReactElement>).map(node=>{
      if (node.type === Aside) {
        hasAside = true
      }
    })
  }

  return (
    <div className={classes('hugsyui-layout', [className,hasAside && 'hugsyui-layout-hasAside'].join(' ') )} {...rest}>
      {children}
    </div>
  );
};

export {Layout};