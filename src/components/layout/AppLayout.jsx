import { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined, LogoutOutlined } from '@ant-design/icons';
import { Layout, Menu, Button, Space, Row } from 'antd';
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { routes } from '../../utils/routes';
import { menuItems } from '../../constants/menuItems';
const { Header, Sider, Content } = Layout;
const AppLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const location = useLocation()
    const navigate = useNavigate()

    const handleLogOut = () => {
        navigate('/logout')
    }

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical">
                    <img src="/logo.png" alt="site logo" className='demo-logo-vertical__image' />
                </div>
                <Menu
                    theme="light"
                    mode="inline"
                    defaultSelectedKeys={[location.pathname]}
                    items={menuItems}
                />
            </Sider>
            <Layout>
                <Header className='header'>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingRight: 24 }}>
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                            className='collapse-button'
                        />
                        <Button icon={<LogoutOutlined />} onClick={handleLogOut}>Log out</Button>
                    </div>
                </Header>
                <Content className='main-content'>
                    <Routes>
                        {
                            routes.map(item => <Route path={item.path} key={item.id} element={item.component} />)
                        }
                    </Routes>
                </Content>
            </Layout>
        </Layout>
    );
};
export default AppLayout;