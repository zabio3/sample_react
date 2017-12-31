import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';

import SearchPage from './SearchPage';
import About from './AboutPage';

import { Layout, Menu, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

const App = () => (
  <Router>
    <Layout>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
    >
    <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Icon type="dashboard" />
          <span className="nav-text">
            <Link to="/">ホテル検索</Link>
          </span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="desktop" />
          <span className="nav-text">
            <Link to="/about">このサイトについて</Link>
          </span>
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <Header style={{ background: '#fff', padding: 0 }}>
        <h1 className="app-title">Hotel Search</h1>
      </Header>
      <Content style={{ margin: '24px 16px 0' }}>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
          <Switch>
            <Route exact path="/" component={SearchPage} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </Content>
        <Footer style={{ textAlign: 'center' }}>
          hotel search ©2018 Created by zabio3
        </Footer>
      </Layout>
    </Layout>
  </Router>

  // トップレベルのElementは一つでなければならない
  /*
  <Router>
  <div>
  <div>
  <Menu
  defaultSelectedKeys={['1']}
  defaultOpenKeys={['sub1']}
  mode="inline"
  theme="dark"
  >
  <Menu.Item key="1">
  <Icon type="pie-chart" />
  <span>TOPページ</span>
  </Menu.Item>
  <SubMenu key="sub1" title={<span><Icon type="appstore" /><span>ダッシュボード</span></span>}>
  <Menu.Item key="9">
  <Link to="/">ホテル検索</Link>
  </Menu.Item>
  <SubMenu key="sub2" title="サイドメニュー">
  <Menu.Item key="11">
  <Link to="/about">このサイトについて</Link>
  </Menu.Item>
  </SubMenu>
  </SubMenu>
  </Menu>
  </div>
  <Switch>
  <Route exact path="/" component={SearchPage} />
  <Route exact path="/about" component={About} />
  </Switch>
  </div>
  </Router>
  */
  /*
  <Router>
  <div className="app">
  <ul className="left-navi">
  <li><Link to="/">ホテル検索</Link></li>
  <li><Link to="/about">About</Link></li>
  </ul>
  <Switch>
  <Route exact path="/" component={SearchPage} />
  <Route exact path="/about" component={About} />
  </Switch>
  </div>
  </Router>
  */
);

export default App;
