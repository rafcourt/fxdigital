import API from '@/app/lib/api';
import Image from 'next/image';

function TVShowInfo({key,children,className}:{key:string,children:React.ReactNode,className?:string}){
    return <p key={key} className={`relative text-white ${className}`}>{children}</p>;
}
export default async function TVShowDetails({ id }:{ id: string }){
    const movieDetails = await API.get({
        endpointIdentifier:'detailsTV',
        pathId:id
    });
    const {
        original_name,
        backdrop_path,
        poster_path,
        overview,
        tagline,
        runtime,
        first_air_date,
        last_air_date,
        number_of_episodes,
        number_of_seasons,
    } = movieDetails
    return (<>
        <Image  
            src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`}
            className='absolute opacity-10'
            alt={`${id}`}
            width={1280}
            height={100}></Image>
        <Image  
            src={`https://image.tmdb.org/t/p/w300${poster_path}`}
            className='rounded-l relative ml-auto mr-12 mt-12'
            alt={`${id}`}
            width={300}
            height={100}></Image>
        <div className='absolute top-0 w-[900px] p-12'>
            <TVShowInfo key='original_name' className="text-3xl font-bold">{original_name}</TVShowInfo>
            <TVShowInfo key='tagline' className="text-lg font-bold pb-6">{tagline}</TVShowInfo>
            <TVShowInfo key='overview' className="pb-6">{overview}</TVShowInfo>
            <TVShowInfo key='number_of_seasons' className="pb-6">{`${number_of_seasons} seasons, ${number_of_episodes} episodes`}</TVShowInfo>
            <TVShowInfo key='first_air_date'>{`First aired: ${first_air_date}`}</TVShowInfo>
            <TVShowInfo key='last_air_date'>{`Last air date: ${last_air_date}`}</TVShowInfo>
        </div>
        
    </>)
}