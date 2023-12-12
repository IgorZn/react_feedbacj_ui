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
        if(feedbackEdit.edit === true){
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
        console.log('hello')
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

    const handleSubmit = (e) => {
        e.preventDefault()
        const newFeedback = {
            text,
            rating
        }
        if(feedbackEdit.edit === true){
            updateFeedback(feedbackEdit.item.id, newFeedback)
        } else {
            newFeedback.id = Date.now()
            setFeedback(c => [newFeedback, ...c])
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