import React from 'react';
import Navbar from './utils/navbar';


import '../css/home.css'


const Home = () => {
    return (
        <div>
            <Navbar/>
            <div id='home'>
                <h1> The Argus Project </h1>
                <br></br>

                <span>This project was made by HomiGrotas as a school</span>
                <br></br>
                <span> project for the 12th grade. The GitHub repositories are private</span>
                <br></br>               
                <br></br>
                <span>For any help you may contact homigrotas2020@gmail.com</span>
            </div>
        </div>
    );
};
export default Home;