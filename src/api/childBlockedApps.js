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
        return data;
    }

    static async post(email, password, id, BlockedApp, setError)
    {
        const response = await fetch(BlockedAppsAPI.endpoint+"?id=" + id, {
            "method": "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa(email + ":" + password) 
            },
             body: JSON.stringify(
                 {app:BlockedApp}
             )

        }).catch(error => {
            return error.message
            }
        )

        if (response.status !== 201){
            if (response.status === 401){
                setError("Invalid username or password");
            }
            const error = await response.json()
            setError(error.message);
            return
        }

        const data = await response.json();
        return data;
    }

    static async delete(email, password, id, BlockedApp, setError)
    {
        const response = await fetch(BlockedAppsAPI.endpoint+"?id=" + id, {
            "method": "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa(email + ":" + password) 
            },
             body: JSON.stringify(
                 {app:BlockedApp}
             )

        }).catch(error => {
            setError(error);
            }
        )

        if (response.status !== 201){
            if (response.status === 401){
                setError("Invalid username or password");
            }
        }

        const data = await response.json();
        return data;
    }
}

export default BlockedAppsAPI
