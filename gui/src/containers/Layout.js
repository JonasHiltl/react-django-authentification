import React, { useState} from 'react';
import { css } from 'emotion';
import './layout.less';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { HomeIcon, ArrowIcon, WatchIcon, StatisticsIcon, ProfileIcon} from "../assets/CustomIcons"

const CustomLayout = ({ isAuthenticated, user, props }) => {
  const [active, setActive] = useState(true);

  const iconWrapper = css`
    display: flex;
    align-items: center;
    margin-right: 15px;
  `;

  if (isAuthenticated === false)
        return <Redirect to='/login' />;

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
                src="https://images.unsplash.com/photo-1527082395-e939b847da0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
                alt=""
              />
              { isAuthenticated?
              <p className={active ? 'name' : 'name-collapsed'}>{ user.name }</p>
              : <p className={active ? 'name' : 'name-collapsed'}>Undefined</p>
              }
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

const mapStateToProps = (state, ownProps) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
    props: ownProps
  }
};

export default connect(mapStateToProps)(CustomLayout);
