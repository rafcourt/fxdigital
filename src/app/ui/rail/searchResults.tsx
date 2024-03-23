import Rail from '@/app/ui/rail/rail';
import API from '@/app/lib/api';

export default async function SearchResults({
  searchType, 
  query, 
  title,
  media_type
}:{
  searchType:string, 
  query:string, 
  title:string,
  media_type:string,
}) {
  const search = await API.get({
    endpointIdentifier: `search${searchType}`,
    queryParams:[{
      key: "query",
      value: query
    }]});
  return (
    <>
      <Rail title={title} tiles={search.results} media_type={media_type}></Rail>
    </>
  );
}