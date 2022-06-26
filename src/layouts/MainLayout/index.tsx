import React from 'react';
import { Outlet } from 'react-router-dom'
import { CoreMenu } from 'components/Elements';

const MainLayout: React.FC = (): JSX.Element => {
  return (
    //<main className="flex bg-[#f6f9fb] min-h-screen">
    <main className="flex bg-zinc-50 min-h-screen">
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
