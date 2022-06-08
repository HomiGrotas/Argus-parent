import configData from "../config.json"

class BlockedWebsitesAPI {
    static endpoint = configData.SERVER_BASE_URL + "/blocked_websites";

    static async get(email, password, id, setError)
    {
        const response = await fetch(BlockedWebsitesAPI.endpoint+"?id=" + id, {
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

    static async post(email, password, id, BlockedWebsite, setError)
    {
        const response = await fetch(BlockedWebsitesAPI.endpoint+"?id=" + id, {
            "method": "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa(email + ":" + password) 
            },
             body: JSON.stringify(
                 {domain:BlockedWebsite}
             )

        }).catch(error => {
            return error.message
            }
        )

        if (response.status !== 201){
            if (response.status === 401){
                setError("Invalid username or password");
            }
            return await response.json();
        }

        const data = await response.json();
        return data;
    }

    static async delete(email, password, id, BlockedWebsite, setError)
    {
        const response = await fetch(BlockedWebsitesAPI.endpoint+"?id=" + id, {
            "method": "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa(email + ":" + password) 
            },
             body: JSON.stringify(
                 {domain:BlockedWebsite}
             )

        }).catch(error => {
            return error.message
            }
        )

        if (response.status !== 201){
            if (response.status === 401){
                setError("Invalid username or password");
            }

            return await response.json();
        }

        const data = await response.json();
        return data;
    }
}

export default BlockedWebsitesAPI