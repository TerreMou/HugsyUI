import React from 'react';
import {Layout} from './layout';
import {Header} from './header';
import {Content} from './content';
import {Footer} from './footer';
import {Aside} from './aside';

const LayoutExample: React.FC = () => {
  return (
    <>
      <div>
        <h1>example 1</h1>
        <Layout className="x" style={{height: 250}}>
          <Header className="y">header</Header>
          <Content className="z">content</Content>
          <Footer className="k">footer</Footer>
        </Layout>
      </div>

      <div>
        <h1>example 2</h1>
        <Layout className="x" style={{height: 250}}>
          <Header className="y">header</Header>
          <Layout>
            <Aside className="j">aside</Aside>
            <Content className="z">content</Content>
          </Layout>
          <Footer className="k">footer</Footer>
        </Layout>
      </div>

      <div>
        <h1>example 3</h1>
        <Layout className="x" style={{height: 250}}>
          <Header className="y">header</Header>
          <Layout>
            <Content className="z">content</Content>
            <Aside className="j">aside</Aside>
          </Layout>
          <Footer className="k">footer</Footer>
        </Layout>
      </div>

      <div>
        <h1>example 4</h1>
        <Layout className="x" style={{height: 250}}>
          <Aside>aside</Aside>
          <Layout>
            <Header className="y">header</Header>
            <Content className="z">content</Content>
            <Footer className="k">footer</Footer>
          </Layout>
        </Layout>
      </div>

    </>

  );
};

export {LayoutExample};