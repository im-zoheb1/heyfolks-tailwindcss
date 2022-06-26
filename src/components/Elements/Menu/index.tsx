import React from 'react';
import { CoreLogo } from 'components/Elements';
import ProfileImage from 'assets/img/user.png';

interface Props { } 

const Menu: React.FC<Props> = (props):JSX.Element => {
  return (
    <aside className={`shadow-sm bg-white w-[280px] overflow-y-auto fixed top-0 left-0 bottom-0 border-r`}>
      <div className="flex items-center justify-center mr-3 mt-6"> 
        <span className="flex shadow-lg rounded-full ring-offset-2 ring-2 ring-slate-300">
          <span className="w-14 h-14 rounded-full overflow-hidden">
            <img className="w-full h-full object-cover scale-102" src={ProfileImage} />
          </span>
        </span>
        <span className="ml-3 font-bold">
          <div className="leading-none text-medium leading-none">Zohaib Khan</div>
          <div className="text-gray-500 leadig-none">@im_zoheb1</div>
        </span>
      </div>
    </aside>
  )
}

export default Menu;
