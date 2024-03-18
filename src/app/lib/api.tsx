import Url from '@/app/lib/endpoints';

async function get(endpointIdentifier:string){
    const headers = {
        'Authorization': `Bearer ${process.env.AUTH}`
    };
    const url = Url(endpointIdentifier);
    const response = await fetch(url, {headers});
    return response.json()
}
const API = {get}
export default API