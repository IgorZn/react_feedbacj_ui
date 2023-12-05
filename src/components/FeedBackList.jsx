import React from 'react';
import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";

function FeedBackList({feedback, setFeedback}) {
    if(!feedback || feedback.length === 0) {
        return <p>No feedback yet</p>
    }
    return <div className={"feedback-list"}>
        {feedback.map(item => (
            <FeedbackItem key={item.id} item={item} setFeedback={setFeedback}/>
        ))}
    </div>
}

FeedBackList.prototype = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            ration: PropTypes.number.isRequired,
        })
    )
}

export default FeedBackList;