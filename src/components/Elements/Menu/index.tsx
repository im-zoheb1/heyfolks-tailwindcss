import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CoreButton } from 'components/Elements';
import ProfileImage from 'assets/img/user.png';
import style from './Menu.module.scss';

import {
  FiGrid, 
  FiUsers, 
  FiMessageCircle, 
  FiBell, 
  FiSearch, 
  FiPenTool, 
  FiUser, 
  FiAlignLeft,
  FiAlignRight,
} from 'react-icons/fi'

interface Props {
  onToggle?(collapsed: boolean): void
}

interface NavigationLink {
  link: string,
  label: string,
  icon: JSX.Element
}

const Menu: React.FC<Props> = (props):JSX.Element => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  
  const navigationLinks: NavigationLink[] = [
    { link: '/', label: 'Feed', icon: <FiGrid className="stroke-[2.5px]" /> },
    { link: '/', label: 'Friends', icon: <FiUsers className="stroke-[2.5px]" /> },
    { link: '/', label: 'Messages', icon: <FiMessageCircle className="stroke-[2.5px]" /> },
    { link: '/', label: 'Notifications', icon: <FiBell className="stroke-[2.5px]" /> },
    { link: '/', label: 'Discover', icon: <FiSearch className="stroke-[2.5px]" /> },
    { link: '/', label: 'Profile', icon: <FiUser className="stroke-[2.5px]" /> },
    { link: '/', label: 'Create', icon: <FiPenTool className="stroke-[2.5px]" /> }
  ]

  const handleToggle = (): void => {
    setIsCollapsed(!isCollapsed);
    props.onToggle && props.onToggle(!isCollapsed);
  }

  return (
    <aside className={`${style.menu} ${isCollapsed ? style.collapsed : ''}`}>
      {
        /* <CoreButton className={style.menu_minimizer} variant="light" pilled compact onClick={handleToggle}>
          { isCollapsed ? <FiAlignRight className="stroke-[2.5px]" /> : <FiAlignLeft className="stroke-[2px] text-slate-800" /> }
        </CoreButton> */
      } 
      <Link to="/" className={style.menu_user}> 
          <span className={style.menu_user_photo}>
            <img src={ProfileImage} />
          </span>
          <span className={style.menu_user_text}>
            <div className="leading-none text-medium leading-none">Zohaib Khan</div>
            <div className="text-gray-500 leadig-none">@im_zoheb1</div>
          </span>
      </Link>
      <nav className={style.nav}>
        <ul className={style.nav_list}>
          {
            navigationLinks.map((item: NavigationLink, index: number): React.ReactNode => (
              <li className={ `${style.nav__item} ${index === 1 ? style.active : ''}` } key={`menu-nav-link-${index}`}>
                <Link to={item.link} className={style.nav_link}>
                  <span className={style.nav_link_icon}>{item.icon}</span> 
                  <p className={style.nav_link_text}>{item.label}</p>
                </Link>
              </li>
            )) 
          }
        </ul>
      </nav>
    </aside>
  )
}

export default Menu;
