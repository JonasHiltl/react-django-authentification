import React, { useState } from 'react';
import { css } from 'emotion';
import './layout.less'

import {
    ArrowRightOutlined,
  } from '@ant-design/icons';
import Icon from '@ant-design/icons';

const HomeSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.5 21.5" fill="none" stroke="#fff" strokeLinecap = "round" strokeLinejoin="round" strokeWidth="1.5px">
        <path id="Home-6" className="cls-1" d="M7.41,19.52V16.45A1.43,1.43,0,0,1,8.83,15h2.89a1.43,1.43,0,0,1,1.43,1.42h0v3.08a1.22,1.22,0,0,0,1.2,1.22h1.92a3.46,3.46,0,0,0,3.48-3.44h0V8.59a2.44,2.44,0,0,0-1-1.9L12.21,1.44a3.17,3.17,0,0,0-4,0L1.71,6.69a2.43,2.43,0,0,0-1,1.91v8.71a3.45,3.45,0,0,0,3.47,3.44H6.15a1.24,1.24,0,0,0,1.24-1.23h0"/>
    </svg>
)

const HomeIcon = props => <Icon component={HomeSVG} {...props} />;
  
const CustomLayout = (props) => {

    const overwriteP = css`
    margin-bottom: 0px;
    `;

    const iconWrapper = css`
        display: flex;
        align-items: center;
        margin-right: 15px;
    `;

    var state = {
        isCollapsed: false,
      }
    

    return(
        <div className="wrapper">
            <div className="sidebar">
                <div className="sidebar-btn-fixed">
                    <div className="sidebar-btn-relative">
                        <div onClick={() => this.setState({isCollapsed: true})} className={ this.state.isCollapsed ? ".sidebar-btn" : ".sidebar-btn-collapsed"}>
                            <ArrowRightOutlined />
                        </div>
                    </div>
                </div>
                <div className="sidebar-flex">
                    <div className= { this.state.isCollapsed ? ".sidebar-menu" : ".sidebar-menu-collapsed"}>
                        <center className="profile">
                            <img className= { this.state.isCollapsed ? ".profile-img" : ".profile-img-collapsed"} src="{{ user.profile.image.url }}" alt=""/> {/* {{ user.profile.image.url }} */}
                            <p className={name}>Username</p> {/* {{user.username}} */}
                        </center>
                        <li className= { this.state.isCollapsed ? ".menu-link-list" : ".menu-link-list-collapsed"} id="menu-btn-1">
                            <a className= { this.state.isCollapsed ? ".menu-link" : ".menu-link-collapsed"} href="{% url 'dashboard-home' %}">
                                <div className={iconWrapper}>
                                    <HomeIcon className= { this.state.isCollapsed ? ".link-icon" : ".link-icon-collapsed"}/>
                                </div>
                                {/*<img src="" alt=""/>  {% static "dashboard/images/home.svg" %} */}
                                <p className= { this.state.isCollapsed ? ".link-text" : ".-collapsed"}>Dashboard</p>
                            </a>
                        </li>
                        <li className= { this.state.isCollapsed ? ".menu-link-list" : ".menu-link-list-collapsed"} id="menu-btn-2">
                            <a className= { this.state.isCollapsed ? ".menu-link" : ".menu-link-collapsed"} href=""> {/* {% url 'dashboard-watch' %} */}
                                <div className={iconWrapper}>
                                    <HomeIcon className= { this.state.isCollapsed ? ".link-icon" : ".link-icon-collapsed"}/>
                                </div>
                                {/*<img src="" alt=""/>  {% static "dashboard/images/watch.svg" %} */}
                                <p className= { this.state.isCollapsed ? ".link-text" : ".-collapsed"}>Courses</p>
                            </a>
                        </li>
                        <li className= { this.state.isCollapsed ? ".menu-link-list" : ".menu-link-list-collapsed"} id="menu-btn-3">
                            <a className= { this.state.isCollapsed ? ".menu-link" : ".menu-link-collapsed"} href="#">
                                <div className={iconWrapper}>
                                    <HomeIcon className= { this.state.isCollapsed ? ".link-icon" : ".link-icon-collapsed"}/>
                                </div>
                                {/*<img src="" alt=""/>  {% static "dashboard/images/statistics.svg" %} */}
                                <p className= { this.state.isCollapsed ? ".link-text" : ".-collapsed"}>Statistics</p>
                            </a>
                        </li>
                        <li className= { this.state.isCollapsed ? ".menu-link-list" : ".menu-link-list-collapsed"} id="menu-btn-4">
                            <a className= { this.state.isCollapsed ? ".menu-link" : ".menu-link-collapsed"} href="#"> {/* {% url 'dashboard-profile' %} */}
                                <div className={iconWrapper}>
                                    <HomeIcon className= { this.state.isCollapsed ? ".link-icon" : ".link-icon-collapsed"}/>
                                </div>
                                {/*<img src="" alt=""/>  {% static "dashboard/images/profile.svg" %} */}
                                <p className= { this.state.isCollapsed ? ".link-text" : ".-collapsed"}>Profile</p>
                            </a>
                        </li>
                    </div>
                </div>
            </div>
            <div className= { this.state.isCollapsed ? ".main-content-wrapper" : ".main-content-wrapper-collapse"}>
                {props.children}
            </div>
        </div>
    )
}

export default CustomLayout