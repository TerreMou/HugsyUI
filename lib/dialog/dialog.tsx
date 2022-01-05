import React, {ReactElement} from 'react';
import './dialog.scss';
import {Icon} from '../index';
import {scopedClassMaker} from '../scopedClassMaker';
import ReactDOM from 'react-dom';

const scopedClass = scopedClassMaker('hugsyui-dialog');
const sc = scopedClass;

interface Props {
  visible: boolean;
  button?: Array<ReactElement>;
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
  const x = props.visible ?
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
          {props.button && props.button.map((btn, index) =>
            React.cloneElement(btn, {key: index})
          )}
        </footer>
      </div>
    </> :
    null;

  return (
    ReactDOM.createPortal(x, document.body)
  );
};

Dialog.defaultProps = {
  closeOnClickMask: false
};

const alert = (content: string) => {
  const component =
    <Dialog visible={true} onClose={() => {
      ReactDOM.render(React.cloneElement(component, {visible: false}), div);
      ReactDOM.unmountComponentAtNode(div);
      div.remove();
    }}>
      {content}
    </Dialog>;
  const div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(component, div);
};

export {Dialog, alert};