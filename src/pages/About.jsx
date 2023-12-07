import React from 'react';
import {Link} from 'react-router-dom'
import Card from "../components/shared/Card";

function About(props) {
    return (
        <Card>
            <div className={"about"}>
                <h1>About this page</h1>
                <p>
                    <Link to={'/'}>Home</Link>
                </p>
            </div>
        </Card>
    );
}

export default About;