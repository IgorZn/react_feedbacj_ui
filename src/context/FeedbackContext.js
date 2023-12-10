import {createContext, useState} from "react";
import fakeData from "../fakeData";

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState(fakeData);

    const handleClose = (id) => {
        if (window.confirm('Are you sure to delete feedback?')) {
            setFeedback(current => current.filter(feedback => feedback.id !== id))
        }

    }

    return <FeedbackContext.Provider value={{
        feedback,
        handleClose,
        setFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;