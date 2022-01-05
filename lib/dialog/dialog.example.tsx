import React, {useState} from 'react';
import {Dialog} from './dialog';
import {Button} from '../button/button';

const DialogExample: React.FC = () => {
  const [v, setV] = useState(false);
  const [c, setC] = useState(false);
  return (
    <>
      <div>
        <h1>example 1</h1>
        <Button onClick={() => setV(!v)}>click</Button>
        <Dialog visible={v}
                onClose={() => setV(false)}
                button={
                  [
                    <Button onClick={() => setV(false)}>取消</Button>,
                    <Button onClick={() => setV(false)}>确认</Button>
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
                    <Button onClick={() => setC(false)}>取消</Button>,
                    <Button onClick={() => setC(false)}>确认</Button>
                  ]
                }>
          <strong>example2</strong>
        </Dialog>
      </div>
    </>
  )
    ;
};

export {DialogExample};