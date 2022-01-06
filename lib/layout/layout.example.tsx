import React from 'react';
import {Layout} from './layout';
import {Header} from './header';
import {Content} from './content';
import {Footer} from './footer';

const LayoutExample: React.FC = () => {
  return (
    <>
      <div>
        <h1>example 1</h1>
        <Layout className='x'>
          <Header className='y'>header</Header>
          <Content className='z'>content</Content>
          <Footer className='k'>footer</Footer>
        </Layout>
      </div>

    </>

  );
};

export {LayoutExample};