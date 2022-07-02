import React, { useState } from 'react';
import { Outlet } from 'react-router-dom'
import { CoreMenu, CoreHeader } from 'components/Elements';

const MainLayout: React.FC = (): JSX.Element => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  return (
    <main className="flex bg-zinc-50 min-h-screen">
      <CoreHeader />
      <CoreMenu onToggle={(e) => setIsCollapsed(e)} />
      <section className="shadow-lg" style={{ paddingLeft: isCollapsed ? '75px': '280px' }}>
        <div className="p-6 mt-14">
          <Outlet />
        </div>
      </section>
    </main>
  )
}

export default MainLayout;
