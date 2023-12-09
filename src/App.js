import {useState} from "react";
import {BrowserRouter, Route, Routes, NavLink} from 'react-router-dom'
//
import Header from "./components/Header";
import FeedbackData from "./fakeData";
import FeedBackList from "./components/FeedBackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import About from "./pages/About";
import AboutIconLink from "./components/AboutIconLink";
import Card from "./components/shared/Card";
import Post from "./components/Post";
import Tost from "./components/Tost";
import {FeedbackProvider} from "./context/FeedbackContext";

function App() {
    const [feedback, setFeedback] = useState(FeedbackData);

    return (
        <FeedbackProvider>
            <BrowserRouter>
                <Header/>
                <div className="container">
                    <Routes>
                        <Route exact path="/" element={
                            <>
                                <FeedbackForm setFeedback={setFeedback}/>
                                <FeedbackStats feedback={feedback}/>
                                <FeedBackList feedback={feedback} setFeedback={setFeedback}/>
                            </>
                        }>
                        </Route>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/post/:id/:name" element={<Post/>}/>
                        <Route path="/tost/*" element={<Tost/>}/>
                    </Routes>
                </div>
                <Card revIsEnable={false}>
                    <NavLink to={'/'} activeclassname={'active'}>
                        Home
                    </NavLink>
                    <NavLink to={'/about'} activeclassname={'active'}>
                        About
                    </NavLink>
                </Card>
                <AboutIconLink/>
            </BrowserRouter>

        </FeedbackProvider>
    );
}


export default App;
