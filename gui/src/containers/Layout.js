import React, { useState } from 'react';
import { css } from 'emotion';
import './layout.less';
import { Link } from 'react-router-dom';

import { HomeIcon, ArrowIcon, WatchIcon, StatisticsIcon, ProfileIcon} from "../assets/CustomIcons"

const CustomLayout = (props) => {
  const [active, setActive] = useState(true);

  const iconWrapper = css`
    display: flex;
    align-items: center;
    margin-right: 15px;
  `;

  return (
    <div className="wrapper">
      <div className="sidebar">
        <div className="sidebar-btn-fixed">
          <div className="sidebar-btn-relative">
            <div onClick={() => setActive(!active)}
              className={active ? 'sidebar-btn' : 'sidebar-btn-collapsed'}
            >
              <ArrowIcon />
            </div>
          </div>
        </div>
        <div className="sidebar-flex">
          <div className={active ? 'sidebar-menu' : 'sidebar-menu-collapsed'}>
            <center className="profile">
              <img
                className={active ? 'profile-img' : 'profile-img-collapsed'}
                src="{{ user.profile.image.url }}"
                alt=""
              />
              <p className={active ? 'name' : 'name-collapsed'}>Username</p>
            </center>
            <li
              className={active ? 'menu-link-list' : 'menu-link-list-collapsed'}
              id="menu-btn-1"
            >
              <Link to="/">
                <div className={active ? 'menu-link' : 'menu-link-collapsed'}>
                  <div className={iconWrapper}>
                    <HomeIcon
                      className={active ? 'link-icon' : 'link-icon-collapsed'}
                    />
                  </div>
                  <p className={active ? 'link-text' : 'link-text-collapsed'}>
                    Dashboard
                  </p>
                </div>
              </Link>
            </li>
            <li
              className={active ? 'menu-link-list' : 'menu-link-list-collapsed'}
              id="menu-btn-2"
            >
              <Link to="/watch">
                <div className={active ? 'menu-link' : 'menu-link-collapsed'}>
                  <div className={iconWrapper}>
                    <WatchIcon
                      className={active ? 'link-icon' : 'link-icon-collapsed'}
                    />
                  </div>
                  <p className={active ? 'link-text' : 'link-text-collapsed'}>
                    Courses
                  </p>
                </div>
              </Link>
            </li>
            <li
              className={active ? 'menu-link-list' : 'menu-link-list-collapsed'}
              id="menu-btn-3"
            >
              <Link to="/statistics">
                <div className={active ? 'menu-link' : 'menu-link-collapsed'}>
                  <div className={iconWrapper}>
                    <StatisticsIcon
                      className={active ? 'link-icon' : 'link-icon-collapsed'}
                    />
                  </div>
                  <p className={active ? 'link-text' : 'link-text-collapsed'}>
                    Statistics
                  </p>
                </div>
              </Link>
            </li>
            <li
              className={active ? 'menu-link-list' : 'menu-link-list-collapsed'}
              id="menu-btn-4"
            >
              <Link to="/profile">
                <div className={active ? 'menu-link' : 'menu-link-collapsed'}>
                  <div className={iconWrapper}>
                    <ProfileIcon
                      className={active ? 'link-icon' : 'link-icon-collapsed'}
                    />
                  </div>
                  <p className={active ? 'link-text' : 'link-text-collapsed'}>
                    Profile
                  </p>
                </div>
              </Link>
            </li>
          </div>
        </div>
      </div>
      <div
        className={
          active ? 'main-content-wrapper' : 'main-content-wrapper-collapsed'
        }
      >
        {props.children}
      </div>
    </div>
  );
};

export default CustomLayout;
