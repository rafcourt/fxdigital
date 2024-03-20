import Rail from '@/app/ui/rail/rail';
import API from '@/app/lib/api';

export default async function SearchResults({
  searchType, 
  query, 
  title
}:{
  searchType:string, 
  query:string, 
  title:string
}) {
  const search = await API.get(`search${searchType}`,[{
    key: "query",
    value: query
  }]);
  return (
    <>
      <Rail title={title} tiles={search.results}></Rail>
    </>
  );
}