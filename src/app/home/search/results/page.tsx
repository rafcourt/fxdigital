'use client'
import SearchResults from '@/app/ui/rail/searchResults';

export default function Page({query="dra"}:{query:string}) {
  return (
    <>
      <SearchResults key="searchedMovies" title="Movies" searchType="Movies" query={query}></SearchResults>
      <SearchResults key="searchedShows" title="TV Shows" searchType="Shows" query={query}></SearchResults>
    </>
  );
}