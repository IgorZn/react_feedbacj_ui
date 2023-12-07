import {useState} from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
//
import Header from "./components/Header";
import FeedbackData from "./fakeData";
import FeedBackList from "./components/FeedBackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import About from "./pages/About";
import AboutIconLink from "./components/AboutIconLink";

function App() {
    const [feedback, setFeedback] = useState(FeedbackData);

    return (
        <>
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
                    </Routes>
                </div>
                <AboutIconLink/>
            </BrowserRouter>

        </>
    );
}


export default App;
