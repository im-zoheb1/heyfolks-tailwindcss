import React from 'react';
import { CoreInput } from 'components/Elements';

interface Props {
  width: string 
}

const Header: React.FC<Props> = (props): JSX.Element => {
  return (
    <header className="bg-white absolute top-0 left-0 right-0 w-full shadow-sm h-16 flex items-center" style={{paddingLeft: props.width}}>
      <div className="pl-6">
        <CoreInput placeholder="Search..." />
      </div>
    </header>
  )
}

export default Header;
