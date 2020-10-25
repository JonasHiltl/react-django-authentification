import React from 'react';
import { css } from 'emotion';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import { Menu, Dropdown, Avatar, Modal, Button, Typography } from 'antd';
import { UserOutlined, LogoutOutlined, DownOutlined } from '@ant-design/icons';
import './ProfileMenu.less';
import { logout } from '../../store/actions/auth';

const { Text } = Typography;

function confirm({ logout }) {
  Modal.confirm({
    title: 'Confirm your Logout',
    centered: true,
    okText: 'Logout',
    icon: <LogoutOutlined />,
    cancelButtonProps: {
      danger: true,
    },
    content: (
      <div>
      </div>
    ),
    onOk() {
		logout();
		return new Promise((resolve, reject) => {
			setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
		  }).catch(() => console.log('Oops errors!'));
	},
  });
}

const NavbarMenu = (props) => {

	return (
		<Menu>
		<Menu.Item>
			<Link to='!#'
			style={{ display: 'flex', alignItems: 'center' }}
			>
			<UserOutlined />
			<Button style={{ padding: '4px', }}  type="text">Profile</Button>
			</Link>
		</Menu.Item>
		<Menu.Item>
			<div
			onClick={confirm}
			style={{ display: 'flex', alignItems: 'center' }}

			>
			<LogoutOutlined />
			<Button style={{ padding: '4px', }}  type="text">Log out</Button>
			</div>
		</Menu.Item>
		</Menu>
	);
	};

const ProfileMenu = ( {user} ) => {

	return (
		<Dropdown overlay={NavbarMenu} trigger={['click']} placement="bottomLeft" arrow>
			<div>
			<Avatar
				style={{ borderRadius: '7px', margin: '0px 10px 0px 0px' }}
				src="https://images.unsplash.com/photo-1527082395-e939b847da0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
			/>
			{ user.name ?
			<Text>{user.name}</Text>
			: <Text>Not logged in</Text>
			}
			<DownOutlined />
			</div>
		</Dropdown>
	);
};

const mapStateToProps = state => ({
	user: state.auth.user
});

const mapDispatchToProps = dispatch => {
	return {
		logout: () => dispatch(logout())
	}
}

export default connect (mapStateToProps, mapDispatchToProps)(ProfileMenu);