import { Avatar, Button, Menu, Typography } from 'antd'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import icon from '../images/cryptocurrency.png';
import { BulbOutlined, FunctionOutlined, HomeOutlined, MoneyCollectOutlined } from '@ant-design/icons';

const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className='logo-container'>
            <Avatar src={icon} size="large"/>
            <Typography.Title level={2} className='logo'>
                <NavLink to="/">Cryptoverse</NavLink>
            </Typography.Title>
        </div>

            <Menu theme='dark'>
                <Menu.Item icon={<HomeOutlined/>}>
                    <Link to="/">Home</Link>
                </Menu.Item>

                <Menu.Item icon={<FunctionOutlined/>}>
                    <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                </Menu.Item>

                <Menu.Item icon={<MoneyCollectOutlined/>}>
                    <Link to="/exchanges">Exchanges</Link>
                </Menu.Item>

                <Menu.Item icon={<BulbOutlined/>}>
                    <Link to="/news">News</Link>
                </Menu.Item>
            </Menu>
    </div>
  )
}

export default Navbar