import Rail from '@/app/ui/rail/rail';
import API from '@/app/lib/api';

export default async function Page() {
  const trendingMovies = await API.get({endpointIdentifier:'trendingMovies'});
  const trendingShows = await API.get({endpointIdentifier:'trendingShows'});
  return (
    <>
      <Rail key="Trending Movies" title="Trending Movies" tiles={trendingMovies.results}></Rail>
      <Rail key="Trending Shows" title="Trending Shows" tiles={trendingShows.results}></Rail>
    </>
  );
}