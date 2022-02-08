import React from 'react';
import '../css/register.css'


const FormButton = (props) => {
    return (
        <tr>
            <td className="test">
                <span className="glyphicon glyphicon-info-sign form-group"> </span>
                <span className="tooltip-text">{props.tip}</span>
            </td>
            <td>
                <input type={props.type} className="form-control form-group" placeholder={props.placeholder}/>
            </td>
        </tr>
    );
}


const RegistrationForm = () => {
  return (
      <form id="RegistrationForm" action="/">
          <table>
              <tbody>
              <FormButton type="email" placeholder=" Email" tip="Please enter your email here"/>
              <FormButton type="password" placeholder=" Password" tip="Please select a password"/>
              <FormButton type="password" placeholder=" Password Confirmation" tip="Please confirm your password"/>
              <FormButton type="text" placeholder=" Nickname" tip="Please choose a nickname"/>
              </tbody>
          </table>

          <div>
              <button type="submit" className="btn btn-primary">Sign Up</button>
          </div>

          <div className="form-group">
              <input type="checkbox" className="form-check-input" id="RememberMe"/>
              <label className="form-check-label" id="RememberMeLabel" htmlFor="RememberMe">Remember me</label>
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