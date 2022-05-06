import configData from "../config.json"


class Parent {
    static endpoint = configData.SERVER_BASE_URL + "/parent";

    static async post(email, password, nickname, setError)
    {
        setError('Loading...')
        const response = await fetch(Parent.endpoint, {
            "method": "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    email: email,
                    password: password,
                    nickname: nickname,
                })
        }).catch(error => {
            return error.message
            }
        )

        const data = await response.json();

        if (response.status !== 201){
            return JSON.stringify(data.message);
        }
        return null;
    }


    static async get(email, password, setError)
    {

        const response = await fetch(Parent.endpoint, {
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
        return JSON.stringify(data);
    }

    static async patch()
    {

    }
}

export default Parent
