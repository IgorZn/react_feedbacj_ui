import React, {useState} from 'react';
import Card from './shared/Card'

function FeedbackForm(props) {
    const [text, setText] = useState('');
    const handleTextChange = (e) => {
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
                <button type={"submit"}>Sent</button>
            </div>
        </form>
    </Card>
}

export default FeedbackForm;