import {createContext, useState} from "react";
import fakeData from "../fakeData";

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState(fakeData);
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    });

    // Update feedback item
    const updateFeedback = (id, updItem) => {
        updItem.id = id
        setFeedback(
            feedback.map(item => item.id === id ? {...item, ...updItem} : item)
        )

        // After update set 'setFeedbackEdit' to default
        setFeedbackEdit({
            item: {},
            edit: false
        })
    }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })

    }

    const handleClose = (id) => {
        if (window.confirm('Are you sure to delete feedback?')) {
            setFeedback(current => current.filter(feedback => feedback.id !== id))
        }

    }

    return <FeedbackContext.Provider value={{
        feedback,
        setFeedback,
        feedbackEdit,
        handleClose,
        editFeedback,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;