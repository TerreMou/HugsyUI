import React, {useState} from 'react';
import {Dialog} from './dialog';

const DialogExample: React.FC = () => {
  const [v, setV] = useState(false);
  return (
    <div>
      <button onClick={() => setV(!v)}>click</button>
      <Dialog visible={v}>
        <strong>hi</strong>
      </Dialog>
    </div>
)
  ;
};

export {DialogExample};