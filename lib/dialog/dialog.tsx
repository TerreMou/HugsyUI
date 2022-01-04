import React from 'react';
import './dialog.scss'
import {Icon} from '../index';
import {scopedClassMaker} from '../scopedClassMaker';

const scopedClass = scopedClassMaker('hugsyui-dialog')
const sc = scopedClass

interface Props {
  visible: boolean;
}
const Dialog: React.FC<Props> = (props) => {

  return (
    props.visible ?
      <>
        <div className={sc('mask')}/>
        <div className={sc()}>
          <div className={sc('close')}>
            <Icon name='close'/>
          </div>
          <header className={sc('header')}>提示</header>
          <main className={sc('main')}>
            {props.children}
          </main>
          <footer className={sc('footer')}>
            <button>ok</button>
            <button>cancel</button>
          </footer>
        </div>
      </> :
      null
  );
};

export {Dialog};