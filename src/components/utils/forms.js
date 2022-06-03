import { useState } from "react";


const FormButton = (props) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <tr onMouseEnter={() => {setShowPassword(true)}} onMouseOut={() => {setShowPassword(false)}}>
            <td className="test">
                <span className="glyphicon glyphicon-info-sign form-group"></span>
                <span className="tooltip-text">{props.tip}</span>
            </td>
            <td>
                <input type={props.type === "password" && showPassword ? "text" : props.type} className="form-control form-group" placeholder={props.placeholder} value={props.stateHook} onChange={(e) => props.setter(e.target.value)}/>
            </td>
        </tr>
    );
}

export default FormButton;