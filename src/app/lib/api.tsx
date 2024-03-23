import Url from '@/app/lib/endpoints';

async function get({
    endpointIdentifier, 
    queryParams, 
    pathId
}:{
    endpointIdentifier:string, 
    queryParams?:Array<{key:string,value:string}>, 
    pathId?:string | null
}){
    const headers = {
        'Authorization': `Bearer ${process.env.AUTH}`
    };
    let url = Url(endpointIdentifier);
    url = pathId ? url.replace('[id]', pathId) : url;
    const additionalParameters = queryParams?.map((param)=> `&${param.key}=${param.value}`)||'';
    const response = await fetch(url+additionalParameters, {headers});
    return response.json()
}
const API = {get}
export default API