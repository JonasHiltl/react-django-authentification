import React from 'react';
import styled from '@emotion/styled';

import { Input, AutoComplete, Space} from 'antd';
import ProfileMenu from './userMenu/ProfileMenu';
import './Navbar.less';

const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  float: right;
  `;

const options = [
  {
    value: 'Burns Bay Road',
  },
  {
    value: 'Downing Street',
  },
  {
    value: 'Wall Street',
  },
];


const Navbar = () => (
  <NavbarWrapper>
    <Space size={10}>
      <AutoComplete
          style={{
            width: 200,
          }}
          options={options}
          placeholder="input search text"
          filterOption={(inputValue, option) =>
            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
        >
          <Input.Search
            onSearch={(value) => console.log(value)}
            style={{ width: 200 }}
          />
      </AutoComplete>
      <ProfileMenu />
    </Space>
  </NavbarWrapper>
);

export default Navbar;
