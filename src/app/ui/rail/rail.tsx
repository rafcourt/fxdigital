'use client'

import MovieTile from '@/app/ui/tile/movie';
import { useFocusable, FocusContext } from '@noriginmedia/react-spatial-navigation';
import  { useCallback, useRef } from 'react';

type movieTile = {
  original_title: string,
  poster_path: string,
  media_type: 'movie'|'tv'|'show',
  id:number
}

export default function Rail({
  title,
  tiles = [],
  media_type,
}:{
  title:string,
  tiles:Array<movieTile>,
  media_type?:string
}) {
  const { ref, focusKey } = useFocusable();

  const scrollingRef = useRef<HTMLInputElement>(null);

  const onAssetFocus = useCallback(
    ({ x }: { x: number }) => {
      scrollingRef.current && scrollingRef.current.scrollTo({
        left: x,
        behavior: 'smooth'
      });
    },
    [scrollingRef]
  );

  return (
    <FocusContext.Provider value={focusKey}>
    <div ref={ref} className="whitespace-nowrap overflow-hidden text-white ml-7 mb-5">
      <p className="ml-5 mb-5 text-base">{ title }</p>
      <div ref={scrollingRef} className=''>
      <div className=''>
        {
          tiles.map((tile:movieTile, index:number)=>{
            return(tile.poster_path ? <MovieTile 
              key={ `movie-${index + tile.id }`} 
              title={tile.original_title} 
              imagePath={tile.poster_path}
              id={tile.id}
              media_type={media_type || tile.media_type}
              onFocus={onAssetFocus}
              > 
              </MovieTile> : <></>)
          })
        }
      </div>
      </div>
    </div>
    </FocusContext.Provider>
  );
}
