'use client'

import { useFocusable } from '@noriginmedia/react-spatial-navigation';
import { SetStateAction } from 'react';

export type keyPressEvent = {
  keyFace: string
}

export default function FocusableElement({ 
    children, 
    focusClassNames = '', 
    normalClassNames = '',
    className = '',
    onFocus,
    onEnterPress,
    focusKey,
    extraProps,
    testId,
}:{ 
    children: React.ReactNode,
    focusClassNames:string, 
    normalClassNames:string,
    className?:string,
    onFocus?:({ x }: { x: number })=>void,
    onEnterPress?:(arg: keyPressEvent)=>void,
    focusKey?:string,
    extraProps?: object,
    testId?:string,
}) {
    const { ref, focused } = useFocusable({ focusKey, onFocus, onEnterPress, extraProps });
    return (
      <div data-testid={testId} ref={ref} className={`${className} ${focused ? focusClassNames: normalClassNames}`}>{children}</div>
    );
  }