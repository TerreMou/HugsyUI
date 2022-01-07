import * as React from 'react';

interface Props {
  code: string;
}

const Demo: React.FC<Props> = (props) => {
  return (
    <div>
      <div>
        {props.children}
        <pre>
          {props.code}
        </pre>
      </div>
    </div>
  );
};
export {Demo};