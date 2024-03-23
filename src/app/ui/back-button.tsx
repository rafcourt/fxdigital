'use client'

import FocusableElement from '@/app/ui/focusable';
import { useRouter } from 'next/navigation';

export default function BackButton() {
    const base = "inline-block text-center mx-auto px-6 py-2 mx-3 rounded-3xl";
    const normal = `${base} text-white bg-black`;
    const focus = `${base} text-black bg-yellow-50`;
    const active = `${base} text-black bg-gray-100`;
    const router = useRouter();
    return (
      <FocusableElement
      className='absolute left-[3rem]' 
      focusClassNames={focus} 
      normalClassNames={normal} 
      onEnterPress={() => router.back()}>Back</FocusableElement>
    );
  }