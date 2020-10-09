import React from 'react';
import { css } from 'emotion';

import './userMenu.less'
import { Menu, Dropdown, Avatar } from 'antd';
import { UserOutlined,LogoutOutlined,DownOutlined } from '@ant-design/icons';


const overwriteP = css`
margin-bottom: 0px;
`;



const menu = (
    <Menu>
        <Menu.Item>
        <a style={{display:'flex', alignItems: "center",}} target="_blank" rel="noopener noreferrer" href="#" >
            <UserOutlined />
            <p className={overwriteP}>Profile</p>
        </a>
        </Menu.Item>
        <Menu.Item>
        <a style={{display:'flex', alignItems: "center",}} target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
            <LogoutOutlined />
            <p className={overwriteP}>Log out</p>
        </a>
        </Menu.Item>
    </Menu>
);

const ProfileMenu = () => {
    
    return(
        <Dropdown overlay={menu} trigger={['click']} placement="bottomLeft" arrow>
            <div>
                <Avatar src="https://images.unsplash.com/photo-1527082395-e939b847da0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80" />
                <p className={overwriteP}>Jonas Hiltl</p>
                <DownOutlined />
            </div>
        </Dropdown>
    )
}

export default ProfileMenu
