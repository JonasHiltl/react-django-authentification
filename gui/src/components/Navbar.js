import React from 'react';
import ProfileMenu from './userMenu/userMenu'
import './Navbar.less'

import { Input, AutoComplete } from 'antd';


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

const Navbar = (props) => {
    return(
        <div className="navbar-wrapper">
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
                    onSearch={value => console.log(value)}
                    style={{ width: 200 }}
                />
            </AutoComplete>
            <ProfileMenu />
        </div>
    )
};

export default Navbar