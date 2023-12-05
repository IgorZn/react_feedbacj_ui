import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";
import FeedbackData from "./fakeData";
import FeedBackList from "./components/FeedBackList";
import {useState} from "react";
import FeedbackStats from "./components/FeedbackStats";

function App() {
    const [feedback, setFeedback] = useState(FeedbackData);

    return (
        <>
            <Header/>
            <div className="container">
                <FeedbackStats feedback={feedback} />
                <FeedBackList feedback={feedback} setFeedback={setFeedback}/>
            </div>
        </>
    );
}



export default App;
