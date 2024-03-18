import TopNav from '@/app/ui/navigation/topnav';
import TrendingMovies from '@/app/ui/rail/trendingMovies';
import TrendingShows from '@/app/ui/rail/trendingShows';

export default async function Page() {
  return (
    <>
      <TopNav/>
      <TrendingMovies></TrendingMovies>
      <TrendingShows></TrendingShows>
    </>
  );
}