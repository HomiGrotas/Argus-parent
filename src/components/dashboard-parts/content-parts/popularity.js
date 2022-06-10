import '../../../css/dashboard/content-parts/popularity.css'
import { useContext } from 'react';
import ParentContext from '../../utils/parentHook';


const FirstSteps = () =>
{
    return (
        <div id='firstSteps'>
            <label>First steps</label>
            <br></br>
            <ul>
                <li>Go to "my children" section, and press 'Copy Token to Clipboard'</li>
                <li>Send the token to your child via Whatsapp/Email and etc.</li>
                <li>After the child inserts the token, the system will automatically detect you're the parent, and you will have acess to the child</li>
                <li>Optional - Block applications using the <a href='blockedApps'>Blocked Apps dashboard</a></li>
                <li>Optional - Block websites using the <a href='blockedWebsites'>Blocked Websites dashboard</a></li>
                <li>Optional - Set time limit using the <a href='timeLimit'>Time Limit dashboard</a></li>
            </ul>
        </div>
    );
}

const popularity = () => 
{
    return (
        <div id='popularity'>

        </div>
    );
}


const PopularitySection = () => {
    const [parent, ] = useContext(ParentContext);

    return (
        <div className="Section" id="popularitySection">
            <FirstSteps/>
        </div>
    );
}


export default PopularitySection;