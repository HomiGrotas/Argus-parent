import configData from "../config.json"


class BlockedAppsAPI {
    static endpoint = configData.SERVER_BASE_URL + "/blocked_apps";

    static async get(email, password, id, setError)
    {

        const response = await fetch(BlockedAppsAPI.endpoint+"?id=" + id, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Basic ' + btoa(email + ":" + password) 
            }

        }).catch(error => {
            return error.message
            }
        )
        
        if (response.status !== 200){
            if (response.status === 401){
                setError("Invalid username or password");
            }

            return null;
        }

        const data = await response.json();
        console.log(data);
        return JSON.stringify(data);
    }
}

export default BlockedAppsAPI
