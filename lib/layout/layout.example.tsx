import React from 'react';
import {Layout} from './layout';
import {Header} from './header';
import {Content} from './content';
import {Footer} from './footer';
import {Aside} from './aside';
import './layout.example.scss'

const LayoutExample: React.FC = () => {
  return (
    <>
      <div>
        <h1>example 1</h1>
        <Layout style={{height: 250, width: 800}}>
          <Header className="e-header">header</Header>
          <Content className="e-content">content</Content>
          <Footer className="e-footer">footer</Footer>
        </Layout>
      </div>

      <div>
        <h1>example 2</h1>
        <Layout style={{height: 250, width: 800}}>
          <Header className="e-header">header</Header>
          <Layout>
            <Aside className="e-aside">aside</Aside>
            <Content className="e-content">content</Content>
          </Layout>
          <Footer className="e-footer">footer</Footer>
        </Layout>
      </div>

      <div>
        <h1>example 3</h1>
        <Layout style={{height: 250, width: 800}}>
          <Header className="e-header">header</Header>
          <Layout>
            <Content className="e-content">content</Content>
            <Aside className="e-aside">aside</Aside>
          </Layout>
          <Footer className="e-footer">footer</Footer>
        </Layout>
      </div>

      <div>
        <h1>example 4</h1>
        <Layout style={{height: 250, width: 800}}>
          <Aside className="e-aside">aside</Aside>
          <Layout>
            <Header className="e-header">header</Header>
            <Content className="e-content">content</Content>
            <Footer className="e-footer">footer</Footer>
          </Layout>
        </Layout>
      </div>

    </>

  );
};

export {LayoutExample};