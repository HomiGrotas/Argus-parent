import configData from "../config.json"

class ChildRegistrationAPI
{
    static endpoint = configData.SERVER_BASE_URL + "/parent/child_registration_token"

    static async get(email, password, setError)
    {
        const response = await fetch(ChildRegistrationAPI.endpoint, {
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
}


export default ChildRegistrationAPI;