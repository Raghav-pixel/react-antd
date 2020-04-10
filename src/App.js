import React from 'react';
import './App.css';
import Title from 'antd/lib/typography/Title'
import { Layout, Avatar } from 'antd';
const { Header, Footer, Sider, Content } = Layout;


function App() {
  return (
    <div className = "App">
    <Layout>
      <Header>
      <Avatar style = {{float: 'right'}} icon= "user" />
      <Title style = {{color: 'white'}} level={3}>RAGHAV</Title>
      </Header>
    <Layout>
    <Sider style= {{background: 'red'}}>Sider</Sider>
    <Layout>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  </Layout>
  </Layout>
  </div>
  );
}

export default App;
