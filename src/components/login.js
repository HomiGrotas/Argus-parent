import '../css/login.css'
import FormButton from "./utils/forms"
import Parent from '../api/parent';
import Auth from './utils/auth';

import {useNavigate} from "react-router-dom";
import Navbar from './utils/navbar';
import {useState} from 'react';
import React from 'react';


const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorPreview, setErrorPreview] = useState('');
    const navigate = useNavigate();

    const HandleSubmit = async (e) =>
    {
        e.preventDefault();
        if (email !== "" && password !== ""){
            const resp = await Parent.get(email, password, setErrorPreview);
            if (resp){
                Auth.SetAuth(email, password);
                navigate('/dashboard');
            }
            else{
                setPassword('');
            }
        }
        else{
            setErrorPreview("Email and password can't be empty!");
        }
    }

    return (
        <form id="LoginForm" onSubmit={HandleSubmit}>
        <table>
            <tbody>
            <FormButton type="email" placeholder=" Email" tip="Please enter your email" stateHook={email} setter={setEmail}/>
            <FormButton type="password" placeholder=" Password" tip="Please enter your password" stateHook={password} setter={setPassword}/>
            </tbody>
        </table>


        <div>
            {errorPreview && <p id="errorMessage"> {errorPreview} </p>}
            <button type="submit" className="btn btn-primary">Login</button>
        </div>

    </form>    );
}


const Login = () =>
{
    const navigate = useNavigate();

    React.useEffect(() => {
        if (Auth.GetAuth() != null) {
          navigate('/dashboard');
        }
      });

    return (
        <div>
            <Navbar/>
            <div id="LoginPage">
                <img src="background.png" alt="Argus Logo" id="Logo"/>
                <LoginForm/>
            </div>
        </div>

    );
}


export default Login;
