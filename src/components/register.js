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
        <div id="RegistrationPage">
            <form id="RegistrationForm" action="/">
                <table>
                    <FormButton type="email" placeholder="Email" tip="Please enter your email here"/>
                    <FormButton type="password" placeholder="Password" tip="Please select a password"/>
                    <FormButton type="password" placeholder="Password Confirmation" tip="Please confirm your password"/>
                    <FormButton type="text" placeholder="Nickname" tip="Please choose a nickname"/>
                </table>

                <div>
                    <button type="submit" className="btn btn-primary">Sign Up</button>
                </div>

                <div className="form-group">
                    <input type="checkbox" className="form-check-input" id="RememberMe"/>
                    <label className="form-check-label" id="RememberMeLabel" htmlFor="RememberMe">Remember me</label>
                </div>
            </form>
        </div>
    );
}

const Register = () => {
    return (
        <div id="RegistrationPage">
            <RegistrationForm/>
        </div>
    );
};
export default Register;