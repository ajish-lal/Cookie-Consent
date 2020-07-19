import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {Layout, Menu, Row} from 'antd';
import {PieChartOutlined, GlobalOutlined, EyeInvisibleFilled} from '@ant-design/icons';
import 'antd/dist/antd.css';
import './NavMenu.scss';
import DataConfigure from '../../Screens/DataConfigure/DataConfigure';
import ThemeConfiguration from '../../Screens/ThemeConfiguration/ThemeConfiguration';
import CookieCategoryList from '../../Screens/CookieCategory/CookieCategoryList/CookieCategoryList';

const {Header, Content, Sider} = Layout;
const {SubMenu} = Menu;

class NavMenu extends React.Component {
    state = {
        collapsed: false,
        currentPath: '/dashboard'
    };

    onCollapse = collapsed => {
        this.setState({collapsed});
    };

    render() {
        return (
            <Router>
                <Layout style={{
                    minHeight: '100vh'
                }}>
                    <Header className="logo">
                        <Row>
                            <EyeInvisibleFilled
                                style={{
                                fontSize: '40px',
                                color: '#fff',
                                alignSelf: 'center'
                            }}/>
                            <div className="app-name">Privacy Management System</div>
                        </Row>
                    </Header>
                    <Layout>
                        <Sider
                            collapsible
                            collapsed={this.state.collapsed}
                            onCollapse={this.onCollapse}>
                            <Menu theme="dark" defaultSelectedKeys={this.state.currentPath} mode="inline">
                                <Menu.Item key="/dashboard" icon={< PieChartOutlined />}>
                                    <span>Dashboard</span>
                                    <Link to="/dashboard"/>
                                </Menu.Item>
                                <SubMenu key="/profiles" icon={< GlobalOutlined />} title="Profiles">
                                    <SubMenu key="sub1.1" title="Booking Path">
                                        <Menu.Item key="/profiles/audit">Audit
                                            <Link to="/profiles/audit"/>
                                        </Menu.Item>
                                        <Menu.Item key="/profiles/scan">Cookie Scanner
                                            <Link to="/profiles/scan"/>
                                        </Menu.Item>
                                        <Menu.Item key="/profiles/content">Widget Content
                                            <Link to="/profiles/content"/>
                                        </Menu.Item>
                                        <Menu.Item key="/profiles/theme">Widget Theme
                                            <Link to="/profiles/theme"/>
                                        </Menu.Item>
                                        <Menu.Item key="/profiles/behaviour">Widget Behaviour
                                            <Link to="/profiles/behaviour"/>
                                        </Menu.Item>
                                    </SubMenu>
                                    <Menu.Item key="4">With Great Sadness</Menu.Item>
                                    <Menu.Item key="5">Booking Receipt</Menu.Item>
                                </SubMenu>
                                <Menu.Item key="6">
                                    Cookie Categories
                                    <Link to="/cookie_list"/>
                                </Menu.Item>

                            </Menu>
                        </Sider>
                        <Layout className="site-layout">
                            <Content >
                                <Switch>
                                    <Route path="/profiles/content">
                                        <DataConfigure/>
                                    </Route>

                                    <Route path="/profiles/theme">
                                        <ThemeConfiguration/>
                                    </Route>

                                    <Route path="/cookie_list">
                                        <CookieCategoryList/>
                                    </Route>
                                </Switch>
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </Router>
        );
    }
}

export default NavMenu;
