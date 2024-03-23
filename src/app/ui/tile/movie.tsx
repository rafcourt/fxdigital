import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import FocusableElement from '@/app/ui/focusable';

export default function MovieTile({
  title, 
  imagePath,
  key,
  id,
  media_type,
  onFocus
}:{
  title:string, 
  imagePath:string,
  key:string,
  id:number,
  media_type:string
  onFocus:({ x }: { x: number })=>void,
}) {
  const router = useRouter();
  const base = "w-movie-tile h-fit inline-block relative text-center px-1 py-1 mx-2 rounded-l";
  const normal = `${base} bg-transparent`;
  const focus = `${base} bg-yellow-900`;

  const url = `/details/${media_type}/${id}`
  return (
    <FocusableElement focusClassNames={focus} normalClassNames={normal} onFocus={onFocus} onEnterPress={() => router.push(url)}>
      <Link key={key} href={url}>
        <Image
          src={`https://image.tmdb.org/t/p/w185${imagePath}`}
          className='rounded-l bg-gray-500'
          alt={`${title}`}
          width={150}
          height={213}
        />
      </Link>
    </FocusableElement>
  );
}
