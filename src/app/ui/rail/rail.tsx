import MovieTile from '@/app/ui/tile/movie';
type movieTile = {
  original_title: string,
  poster_path: string,
  media_type?: 'movie'|'show'
}
export default function Rail({
  title,
  tiles = []
}:{
  title:string,
  tiles:Array<movieTile>
}) {
  return (
    <div className="text-white ml-7 mb-5">
      <p className="ml-5 mb-5 text-base">{ title }</p>
      <>
        {
          tiles.map((tile:movieTile, index:number)=>{
            return(<MovieTile key={`movie-${index}`} title={tile.original_title} imagePath={tile.poster_path}></MovieTile>)
          })
        }
      </>
    </div>
  );
}