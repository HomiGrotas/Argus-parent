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


    static get()
    {
    }

    static patch()
    {

    }
}

export default Parent
