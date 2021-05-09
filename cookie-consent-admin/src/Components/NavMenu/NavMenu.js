import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Layout, Menu, Row, Divider } from 'antd';
import { PieChartOutlined, GlobalOutlined, EyeInvisibleFilled } from '@ant-design/icons';
import DataConfigure from '../../Screens/DataConfigure/DataConfigure';
import ThemeConfiguration from '../../Screens/ThemeConfiguration/ThemeConfiguration';
import DummyWidget from '../../Components/DummyWidget/DummyWidget';
import DummyJson from '../../Common/DummyJson';
import 'antd/dist/antd.css';
import './NavMenu.scss';

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

class NavMenu extends Component {
  state = {
    collapsed: false,
    currentPath: '/dashboard',
    widgetDataModel: DummyJson.widgetProps,
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };

  dataFromChild = (data) => {
    this.setState({ widgetDataModel: data });
  };

  render() {
    return (
      <Router>
        <Layout
          style={{
            minHeight: '100vh',
          }}
        >
          <Header className="logo" style={{ position: 'fixed', zIndex: '9999', minWidth: '100vw' }}>
            <Row>
              <EyeInvisibleFilled
                style={{
                  fontSize: '40px',
                  color: '#fff',
                  alignSelf: 'center',
                }}
              />
              <div className="app-name">Privacy Management System</div>
            </Row>
          </Header>
          <Layout>
            <Sider
              collapsible
              collapsed={this.state.collapsed}
              onCollapse={this.onCollapse}
              style={{ position: 'fixed', minHeight: '100vh', zIndex: '9999', marginTop: 64 }}
            >
              <Menu theme="dark" defaultSelectedKeys={this.state.currentPath} mode="inline">
                <Menu.Item key="/dashboard" icon={<PieChartOutlined />}>
                  <span>Dashboard</span>
                  <Link to="/dashboard" />
                </Menu.Item>
                <SubMenu key="/profiles" icon={<GlobalOutlined />} title="Profiles">
                  <SubMenu key="sub1.1" title="Website 1">
                    <Menu.Item key="/profiles/audit">
                      Audit
                      <Link to="/profiles/audit" />
                    </Menu.Item>
                    <Menu.Item key="/profiles/scan">
                      Cookie Scanner
                      <Link to="/profiles/scan" />
                    </Menu.Item>
                    <Menu.Item key="/profiles/widget/content">
                      Widget Content
                      <Link to="/profiles/widget/content" />
                    </Menu.Item>
                    <Menu.Item key="/profiles/widget/theme">
                      Widget Theme
                      <Link to="/profiles/widget/theme" />
                    </Menu.Item>
                    <Menu.Item key="/profiles/behaviour">
                      Widget Behaviour
                      <Link to="/profiles/behaviour" />
                    </Menu.Item>
                  </SubMenu>
                  <Menu.Item key="4">Website 2</Menu.Item>
                  <Menu.Item key="5">Website 3</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout className="site-layout">
              <Content style={{ marginLeft: this.state.collapsed ? 80 : 200, transition: '0.2s', marginTop: 64 }}>
                <Switch>
                  <Route path="/profiles/widget/content">
                    <DataConfigure widgetData={this.state.widgetDataModel} dataFromChild={this.dataFromChild} />
                  </Route>

                  <Route path="/profiles/widget/theme">
                    <ThemeConfiguration widgetData={this.state.widgetDataModel} dataFromChild={this.dataFromChild} />
                  </Route>
                </Switch>
                <Route path="/profiles/widget">
                  <div className="WidgetTheme" style={{ width: this.state.collapsed ? '32%' : '29.5%', transition: '0.2s' }}>
                    <Divider orientation="center" className="ThemeHeader">
                      Widget Preview
                    </Divider>
                    <DummyWidget widgetJsonData={this.state.widgetDataModel} />
                  </div>
                </Route>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default NavMenu;
