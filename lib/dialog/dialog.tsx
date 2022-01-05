import React, {ReactElement} from 'react';
import './dialog.scss';
import {Icon} from '../index';
import {scopedClassMaker} from '../scopedClassMaker';

const scopedClass = scopedClassMaker('hugsyui-dialog');
const sc = scopedClass;

interface Props {
  visible: boolean;
  button: Array<ReactElement>;
  onClose: React.MouseEventHandler;
  closeOnClickMask?: boolean;
}

const Dialog: React.FC<Props> = (props) => {
  const onClickClose: React.MouseEventHandler = (e) => {
    props.onClose(e);
  };
  const onClickMask: React.MouseEventHandler = (e) => {
    if (props.closeOnClickMask) {
      props.onClose(e);
    }
  };

  return (
    props.visible ?
      <>
        <div className={sc('mask')}
             onClick={onClickMask}/>
        <div className={sc()}>
          <div className={sc('close')}
               onClick={onClickClose}
          >
            <Icon name="close"/>
          </div>
          <header className={sc('header')}>提示</header>
          <main className={sc('main')}>
            {props.children}
          </main>
          <footer className={sc('footer')}>
            {props.button.map((btn, index) =>
              React.cloneElement(btn, {key: index})
            )}
          </footer>
        </div>
      </> :
      null
  );
};

Dialog.defaultProps = {
  closeOnClickMask: false
};

export {Dialog};