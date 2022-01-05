import React, {useState} from 'react';
import {Dialog, alert, confirm, modal} from './dialog';
import {Button} from '../button/button';

const DialogExample: React.FC = () => {
  const [v, setV] = useState(false);
  const [c, setC] = useState(false);
  const openModal = () => {
    const close = modal(
      <h1>你好 <Button onClick={() => close()}>close</Button></h1>
    );
  };

  return (
    <>
      <div>
        <h1>example 1</h1>
        <Button onClick={() => setV(!v)}>click</Button>
        <Dialog visible={v}
                onClose={() => setV(false)}
                button={
                  [
                    <Button onClick={() => setV(false)}>按钮1</Button>,
                    <Button onClick={() => setV(false)}>按钮2</Button>
                  ]
                }>
          <strong>example1</strong>
        </Dialog>
      </div>
      <div>
        <h1>example 2</h1>
        <Button onClick={() => setC(!c)}>click</Button>
        <Dialog visible={c}
                closeOnClickMask={true}
                onClose={() => setC(false)}
                button={
                  [
                    <Button onClick={() => setC(false)}>按钮1</Button>,
                    <Button onClick={() => setC(false)}>按钮2</Button>
                  ]
                }>
          <strong>example2</strong>
        </Dialog>
      </div>
      <div>
        <h1>example 3</h1>
        <Button onClick={() => alert('alert')}>alert</Button>
        <Button onClick={() =>
          confirm('confirm',
            () => console.log('你点击了 Yes'),
            () => console.log('你点击了 No'))}>confirm</Button>
      </div>
      <div>
        <h1>example 4</h1>
        <Button onClick={openModal}>modal</Button>
      </div>
    </>
  )
    ;
};

export {DialogExample};