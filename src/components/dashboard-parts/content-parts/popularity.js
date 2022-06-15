import '../../../css/dashboard/content-parts/popularity.css'
import React, { useContext, useState } from 'react';
import ParentContext from '../../utils/parentHook';
import Auth from '../../utils/auth';
import PopularityAPI from '../../../api/popularityAPI';

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

const Popularity = () => 
{
    const auth = Auth.GetAuth();
    const [error, setError] = useState();
    const [popularity, setPopularity] = useState([]);
    let index = 0;

    async function loadStatistics()
    {
        var p = await PopularityAPI.get(auth.e, auth.p, setError)
        setPopularity(p.slice(0, 5));
        console.log(popularity);
    }

    React.useEffect(() =>{
        loadStatistics()
        }, []
    )

    return (
        <div id='popularity'>
            <table>
                <tbody>
                    <tr>
                        <th>#</th>
                        <th>App</th>
                        <th>Amount</th>
                    </tr>                
                    {popularity.map(
                        app => 
                            <tr key={++index}>
                                <td>{index+1}</td>
                                <td>{app.app_name}</td>
                                <td>{app.amount}</td>
                            </tr>
                    )
                    }
                </tbody>
            </table>
        </div>
    );
}


const PopularitySection = () => {
    const [parent, ] = useContext(ParentContext);

    return (
        <div className="Section" id="popularitySection">
            {parent && parent.children.length === 0 ? <FirstSteps/> : <Popularity/>}
        </div>
    );
}


export default PopularitySection;