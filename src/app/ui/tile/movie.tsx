import Image from 'next/image';
export default function MovieTile({
  title, 
  imagePath
}:{
  title:string, 
  imagePath:string
}) {
  const base = "w-200 h-fit inline-block text-center px-1 py-1 mx-2 rounded-l";
  const normal = `${base} bg-transparent`;
  const focus = `${base} bg-yellow-900`;
  return (
    <div className={focus}>
      <Image
        src={`https://image.tmdb.org/t/p/w185${imagePath}`}
        className='rounded-l'
        alt={`${title}`}
        width={200}
        height={100}
      />
    </div>
  );
}
