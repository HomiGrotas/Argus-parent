import configData from "../config.json"

class BlockedPercentageAPI
{
    static endpoint = configData.SERVER_BASE_URL + "/child/statistics/blocked";

    static async get(email, password, setError, childID)
    {
        const response = await fetch(BlockedPercentageAPI.endpoint + "?id=" + childID, {
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

export default BlockedPercentageAPI;