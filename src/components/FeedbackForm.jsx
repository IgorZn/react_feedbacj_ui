import React, {useState} from 'react';
import Card from './shared/Card'
import Button from "./shared/Button";
import {isDisabled} from "@testing-library/user-event/dist/utils";

function FeedbackForm(props) {
    const [text, setText] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');


    const handleTextChange = (e) => {
        if(text === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if(text !== '' && text.trim().length <= 10 ) {
            setMessage('Text must be at least 10 characters')
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }

        setText(e.target.value)
    }

    return <Card>
        <form action="">
            <h2>How would your rate your service with us?</h2>
            {/* @todo - rating select component*/}
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