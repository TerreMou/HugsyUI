import React, {useState} from 'react';
import {Dialog} from './dialog';
import {Button} from '../button/button';

const DialogExample: React.FC = () => {
  const [v, setV] = useState(false);
  return (
    <>
      <Button onClick={() => setV(!v)}>click</Button>
      <Dialog visible={v}>
        <strong>hi</strong>
      </Dialog>
    </>
)
  ;
};

export {DialogExample};