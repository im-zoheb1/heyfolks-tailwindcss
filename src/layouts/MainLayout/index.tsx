import React, { useState } from 'react';
import { Outlet } from 'react-router-dom'
import { CoreMenu } from 'components/Elements';

const MainLayout: React.FC = (): JSX.Element => {
  const [menuWidth, setMenuWidth] = useState<string>('300px');

  return (
    <main className="flex bg-[#f6f9fb] min-h-screen">
      <CoreMenu />
      <section className="pl-[280px]">
        <div className="p-6">
          <Outlet />
        </div>
      </section>
    </main>
  )
}

export default MainLayout;
