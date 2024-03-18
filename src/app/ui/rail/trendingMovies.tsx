import Rail from '@/app/ui/rail/rail';
import API from '@/app/lib/api';

export default async function TrendingMovies() {
  const trendingMovies = await API.get('trendingMovies');
  return (
    <>
      <Rail key="Trending Movies" title="Trending Movies" tiles={trendingMovies.results}></Rail>
    </>
  );
}
