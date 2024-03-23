import SearchResults from '@/app/ui/rail/searchResults';

export default function Page({ params }: { params: { slug: string } }) {
  const query:string = params.slug;
  return (
    <>
      <SearchResults key="searchedMovies" title="Movies" searchType="Movies" query={query} media_type="movie"></SearchResults>
      <SearchResults key="searchedShows" title="TV Shows" searchType="Shows" query={query} media_type="tv"></SearchResults>
    </>
  );
}