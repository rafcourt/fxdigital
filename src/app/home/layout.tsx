'use client'

import TopNav from '@/app/ui/navigation/topnav';
import { init, useFocusable, FocusContext } from '@noriginmedia/react-spatial-navigation';
import { useEffect } from 'react';

init({ debug: false, visualDebug: false});

export default function Layout({ children }: { children: React.ReactNode }) {
  const { ref, focusSelf, focusKey } = useFocusable();
  useEffect(() => {
    focusSelf();
  }, [focusSelf]);
  return (
    <>
       <FocusContext.Provider value={focusKey}>
        <TopNav></TopNav>
        {children}
        </FocusContext.Provider>
    </>
  );
}