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
          <Header className="header">header</Header>
          <Content className="content">content</Content>
          <Footer className="footer">footer</Footer>
        </Layout>
      </div>

      <div>
        <h1>example 2</h1>
        <Layout style={{height: 250, width: 800}}>
          <Header className="header">header</Header>
          <Layout>
            <Aside className="aside">aside</Aside>
            <Content className="content">content</Content>
          </Layout>
          <Footer className="footer">footer</Footer>
        </Layout>
      </div>

      <div>
        <h1>example 3</h1>
        <Layout style={{height: 250, width: 800}}>
          <Header className="header">header</Header>
          <Layout>
            <Content className="content">content</Content>
            <Aside className="aside">aside</Aside>
          </Layout>
          <Footer className="footer">footer</Footer>
        </Layout>
      </div>

      <div>
        <h1>example 4</h1>
        <Layout style={{height: 250, width: 800}}>
          <Aside className="aside">aside</Aside>
          <Layout>
            <Header className="header">header</Header>
            <Content className="content">content</Content>
            <Footer className="footer">footer</Footer>
          </Layout>
        </Layout>
      </div>

    </>

  );
};

export {LayoutExample};