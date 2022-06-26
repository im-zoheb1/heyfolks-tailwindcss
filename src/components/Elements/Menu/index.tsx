import React from 'react';
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
  FiPlusCircle, 
  FiUser, 
  FiAlignLeft,
  FiAlignRight,
  FiSettings
} from 'react-icons/fi'

interface NavigationLink {
  link: string,
  label: string,
  icon: JSX.Element
}

const navigationLinks: NavigationLink[] = [
  { link: '/', label: 'Feed', icon: <FiGrid className="stroke-[2.5px]" /> },
  { link: '/', label: 'Friends', icon: <FiUsers className="stroke-[2.5px]" /> },
  { link: '/', label: 'Messages', icon: <FiMessageCircle className="stroke-[2.5px]" /> },
  { link: '/', label: 'Notifications', icon: <FiBell className="stroke-[2.5px]" /> },
  { link: '/', label: 'Discover', icon: <FiSearch className="stroke-[2.5px]" /> },
  { link: '/', label: 'Profile', icon: <FiUser className="stroke-[2.5px]" /> },
  { link: '/', label: 'Create', icon: <FiPlusCircle className="stroke-[2.5px]" /> }
]

const Menu: React.FC = ():JSX.Element => {
  return (
    <aside className={`bg-white w-[280px] overflow-y-auto fixed top-0 left-0 bottom-0 border-r-[0.3px]`}>
      <div className="flex justify-between px-6">
        <CoreButton className="grid place-items-center my-1 h-10 w-10 text-gray-600 text-[22px] hover:bg-indigo-100" variant="light" pilled compact>
          { true ? <FiAlignLeft className="stroke-[2.5px] text-gray-500" /> : <FiAlignRight className="stroke-[2.5px]" /> }
        </CoreButton>
      </div>
      <div className="flex items-center mr-3 my-4 ml-8"> 
        <span className="flex shadow-lg rounded-full ring-offset-2 ring-1 ring-slate-300">
          <span className="w-14 h-14 rounded-full overflow-hidden">
            <img className="w-full h-full object-cover scale-102" src={ProfileImage} />
          </span>
        </span>
        <span className="ml-3 font-medium text-black">
          <div className="leading-none text-medium leading-none">Zohaib Khan</div>
          <div className="text-gray-500 leadig-none">@im_zoheb1</div>
        </span>
      </div>
      <nav className={`${style.nav}`}>
        <ul className={style.nav_list}>
          {
            navigationLinks.map((item: NavigationLink, index: number): React.ReactNode => (
              <li className={ `${style.nav__item} ${index === 1 ? style.active : ''}` } key={`menu-nav-link-${index}`}>
                <Link to={item.link} className={`${style.nav_link} flex items-center pl-8 py-[14px] hover:bg-indigo-50`}>
                  <span className="text-[23px]">{item.icon}</span> 
                  <p className="font-bold text-[17px] ml-4">{item.label}</p>
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
