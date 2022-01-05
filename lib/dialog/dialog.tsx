import React, {ReactElement, ReactFragment, ReactNode} from 'react';
import './dialog.scss';
import {Icon} from '../index';
import {scopedClassMaker} from '../scopedClassMaker';
import ReactDOM from 'react-dom';
import {Button} from '../button/button';

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

        {props.button && props.button.length >= 1 &&
        <footer className={sc('footer')}>
          {props.button && props.button.map((btn, index) =>
            React.cloneElement(btn, {key: index})
          )}
        </footer>
        }

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
  const onClose = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };
  const component = (
    <Dialog visible={true}
            onClose={onClose}
            button={[<Button onClick={onClose}>ok</Button>]}
    >
      {content}
    </Dialog>
  );
  const div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(component, div);
};
const confirm = (content: string, yes?: () => void, no?: () => void) => {
  const onYes = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
    yes && yes();
  };
  const onNo = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
    no && no();
  };
  const component = (
    <Dialog visible={true}
            onClose={onNo}
            button={[
              <Button onClick={onYes}>Yes</Button>,
              <Button onClick={onNo}>No</Button>
            ]}
    >
      {content}
    </Dialog>
  );
  const div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(component, div);
};

const modal = (content: ReactNode | ReactFragment) => {
  const onClose = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };
  const component = (
    <Dialog onClose={onClose} visible={true}>
      {content}
    </Dialog>
  );
  const div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(component, div);

  return onClose;
};

export {Dialog, alert, confirm, modal};