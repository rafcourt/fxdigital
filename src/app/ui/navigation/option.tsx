import FocusableElement from '@/app/ui/focusable';
import { useRouter } from 'next/navigation'

export default function Option({
    text,
    route
  }:{
    text:string,
    route:string
  }) {
    const base = "inline-block text-center mx-auto px-6 py-2 mx-4 rounded-3xl";
    const normal = `${base} text-white bg-black`;
    const focus = `${base} text-black bg-yellow-50`;
    const active = `${base} text-black bg-gray-100`;
    
    const router = useRouter();
    return (
      <FocusableElement focusClassNames={focus} normalClassNames={normal} onEnterPress={() => router.push(route)}>
        {text}
      </FocusableElement>
    );
  }