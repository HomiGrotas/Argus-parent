import Navbar from "./utils/navbar";
import "../css/welcome.css"
 

const Help = () => {
    return (
        <div>
            <Navbar/>
            <div id="WelcomePage">
                <img src="background.png" alt="Argus Logo" id="Logo"/>
                <div id="WelcomeContent">
                    <label id="WelcomeLabel">Welcome!</label>
                    <div className="welcome-section">
                        <label >Functionallity</label>
                        <br></br>
                        <span>In this website you can:</span>
                        <ul>
                            <li>View children usage hours</li>
                            <li>View which apps and websites are most popular by your children</li>
                            <li>Block websites and applications</li>
                            <li>Set the child time limit (default 1 hour)</li>
                        </ul>
                    </div>
                    <div className="welcome-section">
                        <label>How to register a child?</label>
                        <br></br>
                        <ul>
                            <li>Go to <a href="/dashboard">Dashboard</a></li>
                            <li>Go to "my children" section, and press 'Copy Token to Clipboard'</li>
                            <li>Send the token to your child</li>
                            <li>After the child inserts the token, the system will automatically detect you're the parent, and you will have acess to the child</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Help;