import '../css/login.css'
import FormButton from "./utils/forms"
import Parent from '../api/parent';

import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Navbar from './utils/navbar';



const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorPreview, setErrorPreview] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) =>
    {
        e.preventDefault();
        const resp = await Parent.get(email, password, setErrorPreview);
        console.log(resp);
        if (resp){
            navigate('/dashboard');
        }
        else{
            setPassword('');
        }
    }

    return (
        <form id="LoginForm" onSubmit={handleSubmit}>
        <table>
            <tbody>
            <FormButton type="email" placeholder=" Email" tip="Please enter your email here" stateHook={email} setter={setEmail}/>
            <FormButton type="password" placeholder=" Password" tip="Please select a password" stateHook={password} setter={setPassword}/>
            </tbody>
        </table>


        <div>
            {errorPreview && <p id="errorMessage"> {errorPreview} </p>}
            <button type="submit" className="btn btn-primary">Login</button>

            <div id="RememberMe">
              <input type="checkbox" className="form-check-input" id="RememberMeBox"/>
              <label className="form-check-label" id="RememberMeLabel" htmlFor="RememberMe">Remember me</label>
            </div>
        </div>

    </form>    )
}


const Login = () =>
{
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
