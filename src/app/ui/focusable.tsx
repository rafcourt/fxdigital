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
    extraProps
}:{ 
    children: React.ReactNode,
    focusClassNames:string, 
    normalClassNames:string,
    className?:string,
    onFocus?:({ x }: { x: number })=>void,
    onEnterPress?:<T extends SetStateAction<string>>(arg: T)=>void,
    onEnterRelease?:<T extends SetStateAction<string>>(arg: T)=>void,
    focusKey?:string,
    extraProps?: object
}) {
    const { ref, focused } = useFocusable({ focusKey, onFocus, onEnterPress, onEnterRelease, extraProps });
    return (
      <div ref={ref} className={`${className} ${focused ? focusClassNames: normalClassNames}`}>{children}</div>
    );
  }