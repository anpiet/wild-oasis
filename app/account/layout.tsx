import { ReactNode } from 'react';
import SideNavigation from '../components/SideNavigation';

type PageProps = {
  children: ReactNode;
};

export default function Layout({ children }: PageProps) {
  return (
    <div className='grid grid-cols-[16rem_1fr] h-full gap-12'>
      <SideNavigation />
      <div className='py-1'>{children}</div>
    </div>
  );
}
