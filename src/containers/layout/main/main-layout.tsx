import {Layout, Menu} from 'antd';
import * as React from "react";

const { Header, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
    textAlign: 'center',
};

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 'calc(100vh - 75px)',
};

const siderStyle: React.CSSProperties = {
    textAlign: 'center',
    height: 'calc(100vh - 75px)',
    position: 'fixed'
};

const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
};

const menuItems = [
    {key: '1', label: 'Browse games'},
    {key: '2', label: 'Game Jams'},
    {key: '3', label: 'Upload game'},
    {key: '4', label: 'Developer logs'},
    {key: '5', label: 'Community'},
]

export const MainLayout: React.FC = () => (
    <Layout style={layoutStyle}>
        <Header style={headerStyle}>
            <Menu
                // theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                items={menuItems}
                style={{ flex: 1, minWidth: 0 }}
            />
        </Header>
        <Layout>
            <Sider width="15%" style={siderStyle}>
                Sider
            </Sider>
            <Content style={contentStyle}>Content</Content>
        </Layout>
    </Layout>
);