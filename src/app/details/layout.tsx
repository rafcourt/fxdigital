'use client'

import { init, useFocusable, FocusContext } from '@noriginmedia/react-spatial-navigation';
import { useEffect } from 'react';

init({ debug: false, visualDebug: false});

export default function Layout({ children }:{ children: React.ReactNode }) {
  const { ref, focusSelf, focusKey } = useFocusable();
  useEffect(() => {
    focusSelf('BACKBUTTON');
  }, [focusSelf]);
  return (
    <>
       <FocusContext.Provider value={focusKey}>{children}</FocusContext.Provider>
    </>
  );
}