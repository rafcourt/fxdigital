type Protocols = {
    open:string,
    secure:string
};
type Hosts = {
    [environment:string]:string
};
type Endpoints = {
    [index:string]:string,
};
const PROTOCOLS:Protocols = {
    open:'http://',
    secure:'https://'
};
const HOSTS:Hosts = {
    dev: `${PROTOCOLS.secure}api.themoviedb.org/3`,
    stage: `${PROTOCOLS.secure}api.themoviedb.org/3`,
    prod: `${PROTOCOLS.secure}api.themoviedb.org/3`,
};
const ENV:string = "dev";//get value from dotenv
const ENDPOINTS:Endpoints = {
    config: `${HOSTS[ENV]}/configuration`,
    trendingMovies: `${HOSTS[ENV]}/trending/movie/day?language=en-US`,
    trendingShows: `${HOSTS[ENV]}/trending/tv/day?language=en-US`,
    searchMovies: `${HOSTS[ENV]}/search/movie?include_adult=false&language=en-US&page=1`,
    searchShows: `${HOSTS[ENV]}/search/tv?include_adult=false&language=en-US&page=1`,
};

export default function Url(endpointIdentifier:string):string {
    return ENDPOINTS[endpointIdentifier];
}