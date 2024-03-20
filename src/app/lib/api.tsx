import Url from '@/app/lib/endpoints';

async function get(endpointIdentifier:string, queryParams?:Array<{key:string,value:string}>){
    const headers = {
        'Authorization': `Bearer ${process.env.AUTH}`
    };
    const url = Url(endpointIdentifier);
    const additionalParameters = queryParams?.map((param)=> `&${param.key}=${param.value}`);
    const response = await fetch(url+additionalParameters, {headers});
    return response.json()
}
const API = {get}
export default API