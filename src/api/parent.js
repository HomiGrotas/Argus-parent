import configData from "../config.json"
import {logDOM} from "@testing-library/react";


class Parent {
    static endpoint = configData.SERVER_BASE_URL + "/parent";

    static post(email, password, nickname)
    {
        return fetch(Parent.endpoint, {
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
        })
            .then(
                function (request) {
                    console.log(request.status);
                    request.text().then(
                        function (text) {
                            console.log(text);
                        }
                    )
                }
            )
    }


    static get()
    {
    }

    static patch()
    {

    }
}

export default Parent
