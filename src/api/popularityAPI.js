import configData from "../config.json"


class PopularityAPI
{
    static endpoint = configData.SERVER_BASE_URL + "/popularity";

    static async get(email, password, setError)
    {
        const response = await fetch(PopularityAPI.endpoint, {
            "method": "GET",
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Basic ' + btoa(email + ":" + password) 
            }
        }).catch(error => {
            return error.message
            }
        )

        const data = await response.json();

        if (response.status !== 200){
            setError(data);
            return -1
        }
        return data;
    }

}

export default PopularityAPI;