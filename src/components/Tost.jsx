import React from 'react';
import {Navigate, useNavigate, Routes, Route} from 'react-router-dom'

function Tost(props) {
    const status = 200
    const navigate = useNavigate()

    if(status === 400) {
        return <Navigate to={'/notfound'}/>
    }

    const onclick = () => {
        console.log('Hello')
        navigate('/about')
    }

    return (
        <div>
            <h1>Tost</h1>
            <button onClick={onclick}>Go to about</button>
            <Routes>
                <Route path={'/show'} element={<h1>Hello</h1>}/>
            </Routes>
        </div>
    );
}

export default Tost;