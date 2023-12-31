import {createContext, useEffect, useState} from "react";

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [feedback, setFeedback] = useState([]);
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    });

    useEffect(() => {
        fetchFeedback()
    }, []);

    // Fetch feedback
    const fetchFeedback = async () => {
        const response = await fetch('/feedback?_sort=id&_order=desc')
        const data = await response.json()
        setFeedback(data)
        setIsLoading(false)
    }

    // Update feedback item
    const updateFeedback = async (id, updItem) => {
        const response = await fetch(`/feedback/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updItem)
        })

        const data = await response.json()

        setFeedback(
            feedback.map(item => item.id === id ? {...item, ...data} : item)
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

    // Delete feedback
    const handleClose = async (id) => {
        if (window.confirm('Are you sure to delete feedback?')) {
            await fetch(`/feedback/${id}`, {
                method: 'DELETE'
            })
            setFeedback(current => current.filter(feedback => feedback.id !== id))
        }

    }

    return <FeedbackContext.Provider value={{
        feedback,
        setFeedback,
        feedbackEdit,
        isLoading,
        handleClose,
        editFeedback,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;