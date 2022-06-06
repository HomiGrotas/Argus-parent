// import configData from "../config.json"
import fetch from "node-fetch";

class JWTtoken
{
    //static endpoint = configData.SERVER_BASE_URL + "/parent/child_registration_token
    static endpoint = "http://127.0.0.1:80/" + "parent/child_registration_token";

    static async get(email, password)
    {
        const response = await fetch(JWTtoken.endpoint, {
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


export default JWTtoken;