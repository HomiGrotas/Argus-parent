import '../css/register.css'
import {useState} from "react";
import {useNavigate} from "react-router-dom";

import Parent from "../api/parent";
import FormButton from "./utils/forms"
import Navbar from './utils/navbar';


const RegistrationForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [vPassword, setVPassword] = useState('');
    const [nickname, setNickname] = useState('');
    const [errorPreview, setErrorPreview] = useState('');
    const navigate = useNavigate();

    const validatePassword = () => {
        if (!password)
        {
            setErrorPreview("Password can't be empty!")
            return false;
        }
        if (password !== vPassword) {
            setErrorPreview("Password and Password Conformation don't match!")
            return false;
        }
        if (password.length < 6)
        {
            setErrorPreview("Password minimum length is 6 chars");
            return false;
        }
        return true;
    }
    
    const validateNickname = () => {
      if (!nickname)
      {
          setErrorPreview("Nickname can't be empty!")
          return false;
      }
      return true;
    }

    const handleSubmit =  async (e) => {
        e.preventDefault();      // prevent refresh
        if (validatePassword() && validateNickname()){
            const errors = await Parent.post(email, password, nickname, setErrorPreview);
            if (!errors)      // got to homepage after successful registration
            {
                navigate('/login');
            }
            else{
                setErrorPreview(errors.replaceAll('"', ""));
            }
        }

    }

  return (
      <form id="RegistrationForm" onSubmit={handleSubmit}>
          <table>
              <tbody>
              <FormButton type="email" placeholder=" Email" tip="Please enter your email here" stateHook={email} setter={setEmail}/>
              <FormButton type="password" placeholder=" Password" tip="Please select a password" stateHook={password} setter={setPassword}/>
              <FormButton type="password" placeholder=" Password Confirmation" tip="Please confirm your password" stateHook={vPassword} setter={setVPassword}/>
              <FormButton type="text" placeholder=" Nickname" tip="Please choose a nickname" stateHook={nickname} setter={setNickname}/>
              </tbody>
          </table>


          <div>
              {errorPreview && <p id="errorMessage"> {errorPreview} </p>}
              <button type="submit" className="btn btn-primary">Sign Up</button>
          </div>

      </form>
  );
}

const Register = () => {
    return (
        <div>
            <Navbar/>
            <div id="RegistrationPage">
                <img src="background.png" alt="Argus Logo" id="Logo"/>
                <RegistrationForm/>
            </div>
        </div>

    );
}

export default Register;