import Rail from '@/app/ui/rail/rail';
import API from '@/app/lib/api';

export default async function TrendingShows() {
  const trendingShows = await API.get('searchMovies');
  return (
    <>
      <Rail key="Trending Shows" title="Trending Shows" tiles={trendingShows.results}></Rail>
    </>
  );
}