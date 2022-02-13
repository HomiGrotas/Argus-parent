import '../css/register.css'
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Parent from "../api/parent";


const FormButton = (props) => {
    return (
        <tr>
            <td className="test">
                <span className="glyphicon glyphicon-info-sign form-group"> </span>
                <span className="tooltip-text">{props.tip}</span>
            </td>
            <td>
                <input type={props.type} className="form-control form-group" placeholder={props.placeholder} value={props.stateHook} onChange={(e) => props.setter(e.target.value)}/>
            </td>
        </tr>
    );
}


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
                navigate('/');
            }
            else{
                setErrorPreview(errors);
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

              <div id="RememberMe">
                <input type="checkbox" className="form-check-input" id="RememberMeBox"/>
                <label className="form-check-label" id="RememberMeLabel" htmlFor="RememberMe">Remember me</label>
              </div>
          </div>

      </form>
  );
}

const RegistrationPage = () => {
    return (
        <div id="RegistrationPage">
            <img src="background.png" alt="Argus Logo" id="Logo"/>
            <RegistrationForm/>
        </div>
    );
}

const Register = () => {
    return (
        <div id="RegistrationPage">
            <RegistrationPage/>
        </div>
    );
};
export default Register;