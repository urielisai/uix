import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import logo from '../../assets/logo.png';
import './Nav.css';
import ContentIcon from '../ContentIcon';

const { Header } = Layout;

const Nav = () => {
    const tabnames = [" ","Inspiracion", "Hogar", "Tienda", "Sucursales"];
    const items = tabnames.map((name, index) => ({
        key: index + 1,
        label: name,
        url: index === 0 ? "/" : `/${name.toLowerCase()}`
    }));

    return (
        <Layout>
            <Header className="header-content">
                <Link to='/'>
                    <img src={logo} alt='logo' className='logo' />
                </Link>
                <Menu
                    theme='light'
                    mode='horizontal'
                    defaultSelectedKeys={['1']}
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        flex: 1,
                        minWidth: 0,
                        marginRight: '20px'
                    }}
                >
                    {items.map(item => (
                        <Menu.Item key={item.key}>
                            <Link to={item.url}>{item.label}</Link>
                        </Menu.Item>
                    ))}
                </Menu>
                <ContentIcon />
            </Header>
        </Layout>
    );
};

export default Nav;
