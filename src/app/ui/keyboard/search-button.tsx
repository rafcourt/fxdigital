import FocusableElement from '@/app/ui/focusable';
import { useRouter } from 'next/navigation';

export default function SearchButton({query}:{query:string}) {
  const base = "mx-auto w-32 h-12 rounded-full text-center overflow-hidden px-5";
  const normal = `${base} bg-blue-900 text-white `;
  const focus = `${base} bg-blue-100 text-black`;
  const router = useRouter();
  return (
    <FocusableElement 
    focusClassNames={focus} 
    normalClassNames={normal} 
    onEnterPress={() => query != '' && router.push(`search/results/${query}`)}>
      <p className="whitespace-nowrap text-base overflow-hidden w-full mt-3">Search</p>
    </FocusableElement>
  );
}