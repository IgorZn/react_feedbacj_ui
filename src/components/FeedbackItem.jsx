import React from 'react';
import Card from "./shared/Card";
import PropTypes from "prop-types";
import { FaTimes} from "react-icons/fa";


function FeedbackItem({item, setFeedback}) {
    const handleClose = () => {
        if(window.confirm('Are you sure to delete feedback?')) {
            setFeedback(current => current.filter(feedback => feedback.id !== item.id))
        }

    }

    return (
        <Card reverse={false}>
            <div className="num-display">{item.rating}</div>
            <button className="close" onClick={handleClose}>
                <FaTimes color={"purple"} />
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    );
}

FeedbackItem.prototype = {
    item: PropTypes.object.isRequired
}

export default FeedbackItem;