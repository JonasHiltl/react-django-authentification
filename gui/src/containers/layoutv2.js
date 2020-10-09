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

    const [width, setWidth] = useState("calc(100% - 200px)")
    const [marginLeft, setMarginLeft] = useState("-50px")
    const ContentWrapperSetStyle = (width, marginLeft) => {
        setWidth(width);
        setMarginLeft(marginLeft)
    };

    const [sidebarMenuWidth, setSidebarMenuWidth] = useState("100%")
    const sidebarMenuSetStyle = (sidebarMenuWidth) => {
        setSidebarMenuWidth(sidebarMenuWidth)
    };
    
    const [right, setRight] = useState("70px")
    const [transform, setTransform] = useState("rotate(180deg)")
    const sidebarBtnSetStyle = (right, transform) => {
        setRight(right)
        setTransform(transform)
    };

    const [display, setDisplay] = useState("block")
    const nameSetStyle = (display) => {
        setDisplay(display)
    };

    const [menuLinkListPadding, setMenuLinkListPadding] = useState("30px 30px 30px 10px")
    const [menuLinkListWidth, setMenuLinkListWidth] = useState("180px")
    const menuLinkListSetStyle = (menuLinkListPadding, menuLinkListWidth) => {
        setMenuLinkListPadding(menuLinkListPadding)
        setMenuLinkListWidth(menuLinkListWidth)
    };

    const [profileImageWidth, setProfileImageWidth] = useState("120px")
    const [profileImageHeight, setProfileImageHeight] = useState("120px")
    const [profileImageMarginBottom, setProfileImageMarginBottom] = useState("20px")
    const profileImageSetStyle = (profileImageWidth, profileImageHeight, profileImageMarginBottom) => {
        setProfileImageWidth(profileImageWidth)
        setProfileImageHeight(profileImageHeight)
        setProfileImageMarginBottom(profileImageMarginBottom)
    }

    const [linkIconWidth, setLinkIconWidth] = useState("21px")
    const linkIconSetStyle = (linkIconWidth) => {
        setLinkIconWidth(linkIconWidth)
    }

    const overwriteP = css`
    margin-bottom: 0px;
    `;

    const mainContentWrapper = css`
        width: ${width};
        min-height: 100vh;
        border-radius: 50px;
        background-color: white;
        z-index: 1;
        margin-left: ${marginLeft};
        padding: 20px 20px 20px 70px;
        transition: 0.3s;
        margin-left: -50px;
    `;

    const sidebarMenu = css`
        width: ${sidebarMenuWidth};
        margin-bottom: 50px;
    `;

    const sidebarBtn = css`
        color: white;
        position: absolute;
        right: ${right};
        bottom: 20px;
        transform: ${transform};
        cursor: pointer;
        pointer-events: all;
    `;

    const name = css`
        display:${display};
        color: #bbb;
        font-weight: 700;
        margin-bottom: 10px;
    `;

    const linkText = css`
        display:${display};
        margin-bottom: 0px;
    `;

    const profileImage = css`
        object-fit: cover;
        margin-bottom: ${profileImageMarginBottom};
        width: ${profileImageWidth};
        height: ${profileImageHeight};
        border-radius: 50%;
    `;

    const menuLinkList = css`
        padding: ${menuLinkListPadding};
        width: ${menuLinkListWidth};
        border-top-right-radius: 25px;
        border-bottom-right-radius: 25px;
    `;

    const menuLink = css`
        display: flex;
        color: white;
        cursor: pointer;
        z-index: 2;
        line-height: 36px;
        &:hover {
            color: white;
          }
    `;

    const iconWrapper = css`
        display: flex;
        align-items: center;
        margin-right: 15px;
    `;

    const linkIcon = css`
        height: auto;
        width: ${linkIconWidth};
        position: relative;
    `;

    const ToggleMenu=()=>{
        this.setState({
           isActive: !this.state.isActive
         })
         console.log(this.state.isActive)
   }

    return(
        <div className="wrapper">
            <div className="sidebar">
                <div className="sidebar-btn-fixed">
                    <div className="sidebar-btn-relative">
                        <div onClick={() => {
                            ContentWrapperSetStyle("calc(100% - 80px)", "-170px");
                            sidebarBtnSetStyle("190px", "rotate(360deg)");
                            nameSetStyle("none");
                            sidebarMenuSetStyle("calc(100% - 120px)");
                            menuLinkListSetStyle("25px 20px 25px 20px", "70px")
                            profileImageSetStyle("70px", "70px", "35px")
                            linkIconSetStyle("26px")
                        }} className={sidebarBtn}>
                            <ArrowRightOutlined />
                        </div>
                    </div>
                </div>
                <div className="sidebar-flex">
                    <div className={sidebarMenu}>
                        <center className="profile">
                            <img className={profileImage} src="{{ user.profile.image.url }}" alt=""/> {/* {{ user.profile.image.url }} */}
                            <p className={name}>Username</p> {/* {{user.username}} */}
                        </center>
                        <li className={menuLinkList} id="menu-btn-1">
                            <a className={menuLink} href="{% url 'dashboard-home' %}">
                                <div className={iconWrapper}>
                                    <HomeIcon className={linkIcon}/>
                                </div>
                                {/*<img src="" alt=""/>  {% static "dashboard/images/home.svg" %} */}
                                <p className={linkText}>Dashboard</p>
                            </a>
                        </li>
                        <li className={menuLinkList} id="menu-btn-2">
                            <a className={menuLink} href=""> {/* {% url 'dashboard-watch' %} */}
                                <div className={iconWrapper}>
                                    <HomeIcon className={linkIcon}/>
                                </div>
                                {/*<img src="" alt=""/>  {% static "dashboard/images/watch.svg" %} */}
                                <p className={linkText}>Courses</p>
                            </a>
                        </li>
                        <li className={menuLinkList} id="menu-btn-3">
                            <a className={menuLink} href="#">
                                <div className={iconWrapper}>
                                    <HomeIcon className={linkIcon}/>
                                </div>
                                {/*<img src="" alt=""/>  {% static "dashboard/images/statistics.svg" %} */}
                                <p className={linkText}>Statistics</p>
                            </a>
                        </li>
                        <li className={menuLinkList} id="menu-btn-4">
                            <a className={menuLink} href="#"> {/* {% url 'dashboard-profile' %} */}
                                <div className={iconWrapper}>
                                    <HomeIcon className={linkIcon}/>
                                </div>
                                {/*<img src="" alt=""/>  {% static "dashboard/images/profile.svg" %} */}
                                <p className={linkText}>Profile</p>
                            </a>
                        </li>
                    </div>
                </div>
            </div>
            <div className={mainContentWrapper}>
                {props.children}
            </div>
        </div>
    )
}

export default CustomLayout