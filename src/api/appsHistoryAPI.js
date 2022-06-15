import configData from "../config.json"

class AppsHistoryAPI
{
    static endpoint = configData.SERVER_BASE_URL + "/app_history";

    static async get(email, password, id, setError, amount)
    {
        const response = await fetch(AppsHistoryAPI.endpoint+"?id=" + id + "&amount=" + amount, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Basic ' + btoa(email + ":" + password) 
            }

        }).catch(error => {
            return error.message
            }
        )


        const data = await response.json();

        if (response.status !== 200)
        {
            setError(data);
            return
        }
        return data;

    }

}

export default AppsHistoryAPI;