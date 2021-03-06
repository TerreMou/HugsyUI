import React, {ReactElement} from 'react';
import {scopedClassMaker} from '../helpers/scopedClassMaker';
import './layout.scss';
import {Aside} from './aside';

const sc = scopedClassMaker('hugsyui-layout');

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: ReactElement | Array<ReactElement>;
}

const Layout: React.FC<Props> = (props) => {
  const {className, ...rest} = props;
  const children = props.children as Array<ReactElement>;
  const hasAside = 'length' in children &&
    children.reduce((result, node) => result || node.type === Aside, false);

  return (
    <div className={sc({hasAside, '': true}, {extra: className})}
         {...rest}
    >
      {props.children}
    </div>
  );
};

export {Layout};
export {Header} from './header';
export {Content} from './content';
export {Footer} from './footer';
export {Aside} from './aside';