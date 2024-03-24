'use client'

import { useFocusable } from '@noriginmedia/react-spatial-navigation';
import { SetStateAction } from 'react';

export default function FocusableElement({ 
    children, 
    focusClassNames = '', 
    normalClassNames = '',
    className = '',
    onFocus,
    onEnterPress,
    onEnterRelease,
    focusKey,
    extraProps,
    testId,
}:{ 
    children: React.ReactNode,
    focusClassNames:string, 
    normalClassNames:string,
    className?:string,
    onFocus?:({ x }: { x: number })=>void,
    onEnterPress?:<T extends SetStateAction<string>>(arg: T)=>void,
    onEnterRelease?:<T extends SetStateAction<string>>(arg: T)=>void,
    focusKey?:string,
    extraProps?: object,
    testId?:string,
}) {
    const { ref, focused } = useFocusable({ focusKey, onFocus, onEnterPress, onEnterRelease, extraProps });
    return (
      <div data-testid={testId} ref={ref} className={`${className} ${focused ? focusClassNames: normalClassNames}`}>{children}</div>
    );
  }