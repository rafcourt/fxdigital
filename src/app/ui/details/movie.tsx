import API from '@/app/lib/api';
import Image from 'next/image';

function MovieInfo({key,children,className}:{key:string,children:React.ReactNode,className?:string}){
    return <p key={key} className={`relative text-white ${className}`}>{children}</p>;
}
export default async function MovieDetails({ id }:{ id: string }){
    const movieDetails = await API.get({
        endpointIdentifier:'detailsMovie',
        pathId:id
    });
    const {
        original_title,
        backdrop_path,
        poster_path,
        overview,
        tagline,
        runtime,
        release_date,
        genres,
        vote_average
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
            <MovieInfo key='original_title' className="text-3xl font-bold">{original_title}</MovieInfo>
            <MovieInfo key='tagline' className="text-lg font-bold pb-6">{tagline}</MovieInfo>
            <MovieInfo key='overview' className="pb-6">{overview}</MovieInfo>
            <MovieInfo key='runtime'>{`Runtime: ${runtime} minutes`}</MovieInfo>
            <MovieInfo key='release_date'>{`Release date: ${release_date}`}</MovieInfo>
        </div>
        
    </>)
}