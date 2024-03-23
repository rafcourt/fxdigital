import MovieDetails from '@/app/ui/details/movie';
import TVShowDetails from '@/app/ui/details/tv-show';
import BackButton from '@/app/ui/back-button';

export default function Page({ params }: { params: { slug: Array<string> } }) {
  const [mediaType, id] = params.slug; 
  return (
    <>
      {(mediaType === 'movie' ? <MovieDetails id={id}></MovieDetails>:<TVShowDetails id={id}></TVShowDetails>)}
      <BackButton></BackButton>
    </>
  );
}