import axios from 'axios';


const CallAxios = () => {
    let url = "http://localhost:5000/activities";
    
    const get = async () => {
        const res = await axios.get(url);
        console.log(res)
        return res;
        
    };

   /* const create = async (data) => {
        const res = await axios.post(url, data);
        return res;
    };

    const destroy = async (id) => {
        let urlID = `${url}/${id}`;
        const res = await axios.delete(urlID);
        return res;
    };

    const update = async (data) => {
        let urlID = `${url}/${data.id}`;
        const res = await axios.put(urlID, data);
        return res;
    };*/
 
    return {
        get,
        //create,
        //destroy,
        //update,
        url
    };
}

export default CallAxios