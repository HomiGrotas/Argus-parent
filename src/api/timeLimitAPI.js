import configData from "../config.json"

class TimeLimitAPI {
    static endpoint = configData.SERVER_BASE_URL + "/child";

    static async patch(email, password, setError, day, limit, childID)
    {
        const newLimit = {};
        newLimit[day] = limit;
        const response = await fetch(TimeLimitAPI.endpoint + "?id=" + childID, {
            "method": "PATCH",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa(email + ":" + password) 
            },
            body: JSON.stringify(
                {
                    usage_limits: newLimit
                })
        }).catch(error => {
            return error.message
            }
        )

        const data = await response.json();

        if (response.status !== 200){
            setError(data);
            return -1
        }
        return 1;
    }
}

export default TimeLimitAPI;