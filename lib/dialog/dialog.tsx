import React, {ReactElement, ReactNode} from 'react';
import './dialog.scss';
import {Icon} from '../index';
import {scopedClassMaker} from '../scopedClassMaker';
import ReactDOM from 'react-dom';
import {Button} from '../button/button';

const scopedClass = scopedClassMaker('hugsyui-dialog');
const sc = scopedClass;

interface Props {
  visible: boolean;
  buttons?: Array<ReactElement>;
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
  const result = props.visible &&
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

        {props.buttons && props.buttons.length >= 1 &&
        <footer className={sc('footer')}>
          {props.buttons && props.buttons.map((btn, index) =>
            React.cloneElement(btn, {key: index})
          )}
        </footer>
        }

      </div>
    </>;

  return (
    ReactDOM.createPortal(result, document.body)
  );
};

Dialog.defaultProps = {
  closeOnClickMask: false
};

const modal = (content: ReactNode,
               buttons?: Array<ReactElement>,
               afterClose?: () => void) => {
  const close = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };
  const component = (
    <Dialog visible={true}
            buttons={buttons}
            onClose={() => {
              close();
              afterClose && afterClose();
            }}>
      {content}
    </Dialog>
  );
  const div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(component, div);
  return close;
};

const alert = (content: string) => {
  const button = <Button onClick={() => close()}>OK</Button>;
  const close = modal(content, [button]);
};

const confirm = (content: string, yes?: () => void, no?: () => void) => {
  const onYes = () => {
    close();
    yes && yes();
  };
  const onNo = () => {
    close();
    no && no();
  };
  const buttons = [
    <Button onClick={onYes}>Yes</Button>,
    <Button onClick={onNo}>No</Button>
  ];
  const close = modal(content, buttons, no);
};

export {Dialog, alert, confirm, modal};