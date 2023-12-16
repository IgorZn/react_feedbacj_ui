import React, {useContext, useEffect, useState} from 'react';
import Card from './shared/Card'
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
    const {setFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext);

    const [text, setText] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');
    const [rating, setRating] = useState(1);

    useEffect(() => {
        if (feedbackEdit.edit === true) {
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit]);

    const handleTextChange = (e) => {
        if (text === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if (text !== '' && text.trim().length <= 10) {
            setMessage('Text must be at least 10 characters')
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }

        setText(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newFeedback = {
            text,
            rating
        }

        const getPostData = async () => {
            const response = await fetch('/feedback', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newFeedback)
            })
            return await response.json()
        }

        if (feedbackEdit.edit === true) {
            updateFeedback(feedbackEdit.item.id, newFeedback)
        } else {
            const data = await getPostData()
            setFeedback(c => [data, ...c])
        }


        setText('')
        setRating(0)
        setBtnDisabled(c => true)
    }

    return <Card>
        <form action="" onSubmit={handleSubmit}>
            <h2>How would your rate your service with us?</h2>
            <RatingSelect select={setRating}/>
            <div className="input-group">
                <input
                    onChange={handleTextChange}
                    type="text"
                    value={text}
                    placeholder={"Write a review"}/>
                <Button type={"submit"} isDisabled={btnDisabled}>Sent</Button>
            </div>
            {message && <div className="message">{message}</div>}
        </form>
    </Card>
}

export default FeedbackForm;