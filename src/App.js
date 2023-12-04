import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";
import FeedbackData from "./fakeData";
import FeedBackList from "./components/FeedBackList";
import {useState} from "react";

function App() {
    const [feedback, setFeedback] = useState(FeedbackData);

    return (
        <>
            <Header/>
            <div className="container">
                <FeedBackList feedback={feedback} />
            </div>
        </>
    );
}



export default App;
